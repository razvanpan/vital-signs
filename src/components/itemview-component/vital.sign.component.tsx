import React from 'react'
import styles from './vital.sign.component.css'
import VitalSignComponentModel from '../../model/VitalSignComponentModel'
import readURL from '../../API/api.component'
import ItemElement from '../itemElement/itemElement'
import VitalSignItem from '../../model/VitalSignItem'
import InputData from '../../model/InputData'

let vitalSignComponentModel: VitalSignComponentModel

interface IState {
  loading: boolean
  data: any
}

interface InputDataProps {
  inputData: InputData
}

class VitalSignItemView extends React.Component<InputDataProps, IState> {
  constructor(props) {
    super(props)
    vitalSignComponentModel = new VitalSignComponentModel(0, '', [])

    this.state = { loading: true, data: [] }
  }

  async populateItemView() {
    const vitalSignsList = await readURL()
    vitalSignsList.forEach((element: VitalSignItem) => {
      vitalSignComponentModel.vitalSignDataList.push(
        <ItemElement element={element} inputData={this.props.inputData} />
      )
    })
    this.setState({
      loading: false,
      data: vitalSignComponentModel.vitalSignDataList
    })
  }

  componentDidMount() {
    this.populateItemView()
  }

  render() {
    const { loading, data } = this.state
    return (
      <div className={styles.padding}>{loading ? 'Still loading' : data}</div>
    )
  }
}

export default VitalSignItemView
