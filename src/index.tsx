import * as React from 'react'
import VitalSignsHeader from './components/header-component/header.component.component'
import VitalSignsFooter from './components/footer-component/footer.component.component'
import VitalSignItemView from './components/itemview-component/vital.sign.component'
import style from './styles.module.css'

export const VitalSignsComponent = () => {
  return (
    <div className={style.vitalSign}>
      <VitalSignsHeader />
      <VitalSignItemView />
      <VitalSignsFooter />
    </div>
  )
}
