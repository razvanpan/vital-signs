import React from 'react'
import Button from 'terra-button'
import Spacer from 'terra-spacer'
import ActionFooter from 'terra-action-footer'
import styles from './footer.component.component.css'

const VitalSignsFooter = () => (
  <div className={styles.actionFooter}>
    <ActionFooter
      end={
        <React.Fragment>
          <Spacer isInlineBlock marginRight='medium'>
            <Button text='Submit' variant={Button.Opts.Variants.EMPHASIS} />
          </Spacer>
          <Button text='Cancel' />
        </React.Fragment>
      }
    />
  </div>
)

export default VitalSignsFooter
