import * as React from 'react'
import InputData from '../../model/InputData'
import VitalSignsFooter from '../footer-component/footer.component.component'
import VitalSignsHeader from '../header-component/header.component.component'
import VitalSignItemView from '../itemview-component/vital.sign.component'
import style from '../vitalSignComponent/vital.sign.component.css'

let inputData: InputData

class VitalSignsPageComponent extends React.Component {
  constructor(props) {
    super(props)

    inputData = new InputData('', 0)
  }

  render() {
    return (
      <div className={style.vitalSign}>
        <VitalSignsHeader />
        <VitalSignItemView inputData={inputData} />
        <VitalSignsFooter inputData={inputData} />
      </div>
    )
  }
}

export default VitalSignsPageComponent
