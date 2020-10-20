import { apiBackEndUrl } from '../constants/contants'
import VitalSignItem from '../model/VitalSignItem'
import axios, { AxiosResponse } from 'axios'

let vitalSigns: VitalSignItem[]

export default async function readURL() {
  vitalSigns = []

  try {
    const result: AxiosResponse<any> = await axios.get(`${apiBackEndUrl}all`)
    vitalSigns = result.data.map((el) => el)
  } catch (e) {
    console.log(e)
  }

  return vitalSigns
}
