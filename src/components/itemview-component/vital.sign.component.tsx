import React from 'react'
import ItemView from 'terra-clinical-item-view'
import styles from './vital.sign.component.css'
import VitalSignItem from '../../model/VitalSignItem'

const vitalSigns: VitalSignItem[] = []
const temperature: VitalSignItem = {
  vitalSign: 'Temperature',
  value: '37.2',
  unitMeasure: 'C',
  time: '10:48'
}
const heartRate: VitalSignItem = {
  vitalSign: 'Heart Rate',
  value: '75',
  unitMeasure: '/min',
  time: '10:48'
}
const bloodPressure: VitalSignItem = {
  vitalSign: 'Blood Pressure',
  value: '122/75',
  unitMeasure: 'mmHg',
  time: '10:48'
}
const oSaturation: VitalSignItem = {
  vitalSign: 'O2 Saturation',
  value: '96',
  unitMeasure: '%',
  time: '10:48'
}
const respirationRate: VitalSignItem = {
  vitalSign: 'Respiration Rate',
  value: '17',
  unitMeasure: '/min',
  time: '10:48'
}
const bloodSugar: VitalSignItem = {
  vitalSign: 'Blood Sugar',
  value: '--',
  unitMeasure: 'mg/dl',
  time: 'Not assessed'
}

vitalSigns.push(
  temperature,
  heartRate,
  bloodPressure,
  oSaturation,
  respirationRate,
  bloodSugar
)

class VitalSignItemView extends React.Component {
  data: any[] = []
  populateItemView() {
    vitalSigns.forEach((element) => {
      const vitalSignText = (
        <div className={styles.vitalSignText}>
          <ItemView.Display text={element.vitalSign} />
        </div>
      )
      const valueText = (
        <div className={styles.valueText}>
          <ItemView.Display text={element.value} />
        </div>
      )
      const unitMeasureText = (
        <div className={styles.unitMeasureText}>
          <ItemView.Display text={element.unitMeasure} />
        </div>
      )
      const timeText = (
        <div className={styles.timeText}>
          <ItemView.Display text={element.time} />
        </div>
      )

      const displays = [vitalSignText, valueText, unitMeasureText, timeText]

      const itemView = (
        <div className={styles.vitalSignItemView}>
          <ItemView
            displays={displays}
            layout='twoColumns'
            textEmphasis='start'
          />
        </div>
      )

      this.data.push(itemView)
    })
    return this.data
  }

  render() {
    return <div className={styles.padding}>{this.populateItemView()}</div>
  }
}

export default VitalSignItemView
