export default class VitalSignItem {
  constructor(
    public id: number,
    public vitalSign: string,
    public value: string,
    public unitMeasure: string,
    public time: string
  ) {
    this.id = id
    this.vitalSign = vitalSign
    this.value = value
    this.unitMeasure = unitMeasure
    this.time = time
  }
}
