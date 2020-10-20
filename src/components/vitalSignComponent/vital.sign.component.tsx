import * as React from 'react'
import readURL from '../../API/api.component'
import VitalSignItem from '../../model/VitalSignItem'
import VitalSignsFooter from '../footer-component/footer.component.component'
import VitalSignsHeader from '../header-component/header.component.component'
import VitalSignItemView from '../itemview-component/vital.sign.body.component'
import style from '../vitalSignComponent/vital.sign.component.css'

interface State {
  vitalSigns: VitalSignItem[]
}

class VitalSignsPageComponent extends React.Component<{}, State> {
  initialVitalSigns: VitalSignItem[] = []
  initialVitalSigns2: VitalSignItem[] = []
  bool: boolean

  constructor(props) {
    super(props)
    this.onCancel = this.onCancel.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.bool = false
    this.state = { vitalSigns: [] }
    this.initializeVitalSignData()
  }

  private initializeVitalSignData() {
    readURL().then(
      (res) => {
        const remappedArray: Array<VitalSignItem> = res.map(
          (el) =>
            new VitalSignItem(
              el.id,
              el.vitalSign,
              el.value,
              el.unitMeasure,
              el.time
            )
        )

        this.initialVitalSigns = JSON.parse(JSON.stringify(remappedArray))
        this.setState({
          vitalSigns: JSON.parse(JSON.stringify(remappedArray))
        })
      },
      (error) => {
        console.error(error)
      }
    )
  }

  onCancel(): void {
    this.setState({
      vitalSigns: this.initialVitalSigns
    })
    this.bool = true
  }

  onSubmit(): void {
    this.initializeVitalSignData()
    this.bool = true
  }

  render() {
    return (
      <div className={style.vitalSign}>
        <VitalSignsHeader />
        <VitalSignItemView
          vitalSignsList={this.state.vitalSigns}
          bool={this.bool}
        />
        <VitalSignsFooter
          vitalSignsList={this.state.vitalSigns}
          onCancel={this.onCancel}
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

export default VitalSignsPageComponent
