import React from 'react'
import Button from 'terra-button'
import Spacer from 'terra-spacer'
import ActionFooter from 'terra-action-footer'
import styles from './footer.component.component.css'
import axios from 'axios'
import { apiBackEndUrl } from '../../constants/contants'
import VitalSignItem from '../../model/VitalSignItem'

interface InputProps {
  vitalSignsList: VitalSignItem[]
  onSubmit(): void
  onCancel(): void
}

class VitalSignsFooter extends React.Component<InputProps> {
  constructor(props) {
    super(props)
    this.submitHandler = this.submitHandler.bind(this)
    this.cancelButton = this.cancelButton.bind(this)
  }

  onClickSubmit(vitalSignsList: VitalSignItem[]) {
    vitalSignsList.forEach((vitalSignData) => {
      if (vitalSignData.isInEditMode === true) {
        axios
          .patch(
            `${apiBackEndUrl}edit/${vitalSignData.id}/${vitalSignData.value}`
          )
          .then((response) => {
            vitalSignData.value = response.data.value
            vitalSignData.isInEditMode = false
          })
          .catch((error) => console.log(error))
      }
    })
    this.props.onSubmit()
  }

  submitHandler() {
    this.onClickSubmit(this.props.vitalSignsList)
  }

  cancelButton() {
    this.props.onCancel()
  }

  render() {
    return (
      <div className={styles.actionFooter}>
        <ActionFooter
          end={
            <React.Fragment>
              <Spacer isInlineBlock marginRight='medium'>
                <Button
                  text='Submit'
                  variant={Button.Opts.Variants.EMPHASIS}
                  onClick={this.submitHandler}
                />
              </Spacer>
              <Button text='Cancel' onClick={this.cancelButton} />
            </React.Fragment>
          }
        />
      </div>
    )
  }
}

export default VitalSignsFooter
