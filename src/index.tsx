import * as React from 'react'
import VitalSignsHeader from './components/header-component/header.component.component'
import VitalSignsFooter from './components/footer-component/footer.component.component'
import VitalSignItemView from './components/itemview-component/vital.sign.component'

export const VitalSignsComponent = () => {
  return (
    <div>
      <VitalSignsHeader />
      <VitalSignItemView />
      <VitalSignsFooter />
    </div>
  )
}
