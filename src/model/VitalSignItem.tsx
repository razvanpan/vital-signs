class VitalSignItem {
  vitalSign: string
  value: string
  unitMeasure: string
  time: string

  constructor(
    vitalSign: string,
    value: string,
    unitMeasure: string,
    time: string
  ) {
    this.vitalSign = vitalSign
    this.value = value
    this.unitMeasure = unitMeasure
    this.time = time
  }
}

export default VitalSignItem
