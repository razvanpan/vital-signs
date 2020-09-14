import * as React from 'react'
import VitalSignsHeader from './components/header-component/header-component.component'
import VitalSignsFooter from './components/footer-component/footer-component.component'
import VitalSignsCard from './components/card-component/vital-sign-component.component'

export const VitalSignsComponent = () => {
  return (
    <div>
      <VitalSignsHeader />
      <VitalSignsCard />
      <VitalSignsFooter />
    </div>
  )
}
