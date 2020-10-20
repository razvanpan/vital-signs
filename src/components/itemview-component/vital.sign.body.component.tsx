import React from 'react'
import styles from './vital.sign.body.component.css'
import ItemElement from '../itemElement/itemElement'
import ItemView from 'terra-clinical-item-view'
import VitalSignItem from '../../model/VitalSignItem'

interface IState {
  loading: boolean
  data: ItemView[]
}

interface InputDataProps {
  vitalSignsList: VitalSignItem[]
  bool: boolean
}

class VitalSignItemView extends React.Component<InputDataProps, IState> {
  constructor(props) {
    super(props)
    this.populateItemView = this.populateItemView.bind(this)

    this.state = { loading: true, data: [] }
  }

  populateItemView() {
    return this.props.vitalSignsList.map((el) => (
      <ItemElement key={el.id} element={el} bool={this.props.bool} />
    ))
  }

  render() {
    return <div className={styles.padding}>{this.populateItemView()}</div>
  }
}

export default VitalSignItemView
