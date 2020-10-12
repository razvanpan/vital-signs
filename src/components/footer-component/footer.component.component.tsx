import React from 'react'
import Button from 'terra-button'
import Spacer from 'terra-spacer'
import ActionFooter from 'terra-action-footer'
import styles from './footer.component.component.css'
import InputData from '../../model/InputData'
import axios from 'axios'

interface InputProps {
  inputData: InputData
}

interface InputState {
  inputDataState: InputData
}

class VitalSignsFooter extends React.Component<InputProps, InputState> {
  constructor(props) {
    super(props)
    this.submitHandler = this.submitHandler.bind(this)
    this.state = {
      inputDataState: {
        input: this.props.inputData.input,
        id: this.props.inputData.id
      }
    }
  }

  onClickSubmit(inputData: InputData) {
    axios
      .patch(
        `http://localhost:8080/vital-signs/edit/${inputData.id}/${inputData.input}`
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
  }

  submitHandler() {
    this.onClickSubmit(this.props.inputData)
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
              <Button
                text='Cancel'
                // onClick={vitalSignItemView.populateItemView}
              />
            </React.Fragment>
          }
        />
      </div>
    )
  }
}

export default VitalSignsFooter
