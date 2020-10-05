import React from 'react'
import ItemView from 'terra-clinical-item-view'
import styles from './vital.sign.component.css'
import VitalSignItem from '../../model/VitalSignItem'

const vitalSigns: VitalSignItem[] = []

interface IState {
  vitalSignDataList?: any
}

class VitalSignItemView extends React.Component<null, IState> {
  constructor(props) {
    super(props)
    this.state = {
      vitalSignDataList: []
    }
  }

  readURL(): Promise<VitalSignItem[]> {
    return new Promise((resolve) => {
      fetch(`http://localhost:8080/vital-signs/all`)
        .then((res) => res.json())
        .then(async (res) => {
          await res.forEach((element) => {
            vitalSigns.push(element)
          })
          resolve(vitalSigns)
        })
    })
  }

  data: any[] = []
  async populateItemView(): Promise<VitalSignItem[]> {
    const vitalSignsList = await this.readURL()
    return new Promise((resolve) => {
      vitalSignsList.forEach((element) => {
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
      resolve(this.data)
    })
  }

  async componentDidMount() {
    this.setState({
      vitalSignDataList: await this.populateItemView()
    })
  }

  render() {
    return <div className={styles.padding}>{this.state.vitalSignDataList}</div>
  }
}

export default VitalSignItemView
