import React from 'react'
import ItemView from 'terra-clinical-item-view'
import styles from './vital.sign.component.css'
import VitalSignItem from '../../model/VitalSignItem'

const vitalSigns: VitalSignItem[] = []
const temperature: VitalSignItem = new VitalSignItem(
  'Temperature',
  '37.2',
  'C',
  '10:48'
)
const heartRate: VitalSignItem = new VitalSignItem(
  'Heart Rate',
  '75',
  '/min',
  '10:48'
)
const bloodPressure: VitalSignItem = new VitalSignItem(
  'Blood Pressure',
  '122/75',
  'mmHg',
  '10:48'
)
const oSaturation: VitalSignItem = new VitalSignItem(
  'O2 Saturation',
  '96',
  '%',
  '10:48'
)
const respirationRate: VitalSignItem = new VitalSignItem(
  'Respiration Rate',
  '17',
  '/min',
  '10:48'
)
const bloodSugar: VitalSignItem = new VitalSignItem(
  'Blood Sugar',
  '--',
  'mg/dl',
  'Not assessed'
)

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
