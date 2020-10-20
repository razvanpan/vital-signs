export default class VitalSignItem {
  constructor(
    public id: number = 0,
    public vitalSign: string = '',
    public value: string = '',
    public unitMeasure: string = '',
    public time: string = '',
    public isInEditMode: boolean = false
  ) {
    this.id = id
    this.vitalSign = vitalSign
    this.value = value
    this.unitMeasure = unitMeasure
    this.time = time
  }
}
