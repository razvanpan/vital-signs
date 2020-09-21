export default class VitalSignItem {
  constructor(
    public vitalSign: string,
    public value: string,
    public unitMeasure: string,
    public time: string
  ) {}
}
