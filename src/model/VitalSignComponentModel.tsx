export default class VitalSignComponentModel {
  constructor(
    public id: number,
    public inputValue: string,
    public vitalSignDataList: any[]
  ) {
    this.id = id
    this.inputValue = inputValue
    this.vitalSignDataList = vitalSignDataList
  }
}
