import VitalSignItem from '../model/VitalSignItem'

export default function readURL(): Promise<VitalSignItem[]> {
  const vitalSigns: VitalSignItem[] = []
  return new Promise((resolve) => {
    fetch(`http://localhost:8080/vital-signs/all`)
      .then((res) => res.json())
      .then((res) => {
        res.forEach((element) => {
          vitalSigns.push(element)
        })
        resolve(vitalSigns)
      })
  })
}
