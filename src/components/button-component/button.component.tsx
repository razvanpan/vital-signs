import React from 'react'
import IconRollup from 'terra-icon/lib/icon/IconRollup'
import Button from 'terra-button/lib/Button'
import styles from './button.component.css'

const HeaderButtons = () => (
  <div className={styles.padding}>
    <Button
      text='View More'
      variant='de-emphasis'
      onClick={() => alert('You clicked the button!')}
      className={styles.viewMoreButton}
    />
    <Button
      icon={<IconRollup />}
      onClick={() => alert('You clicked the button!')}
      className={styles.iconRollupButton}
    />
  </div>
)
export default HeaderButtons
