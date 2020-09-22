import React from 'react'
import { IntlProvider } from 'react-intl'
import ActionHeader from 'terra-action-header'
import HeaderButtons from '../button-component/button.component'
import styles from './header.component.component.css'

const VitalSignsHeader = () => (
  <IntlProvider locale='en'>
    <div className={styles.actionHeader}>
      <ActionHeader title='Vital signs'>
        <HeaderButtons />
      </ActionHeader>
    </div>
  </IntlProvider>
)
export default VitalSignsHeader
