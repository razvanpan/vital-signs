import React from 'react'
import VitalSignItem from '../../model/VitalSignItem'
import styles from '../itemview-component/vital.sign.body.component.css'
import ItemView from 'terra-clinical-item-view'
import Button from 'terra-button/lib/Button'
import Input from 'terra-form-input'

interface ItemElementProp {
  element: VitalSignItem
  bool: boolean
}

interface ItemViewState {
  itemView: ItemView
}

class ItemElement extends React.Component<ItemElementProp, ItemViewState> {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      itemView: (
        <ItemView
          key={this.props.element.id}
          displays={[]}
          layout='twoColumns'
          textEmphasis='start'
        />
      )
    }
  }

  itemViewDisplay(element: VitalSignItem) {
    const vitalSignText = (
      <div className={styles.vitalSignText}>
        <ItemView.Display key={element.id} text={element.vitalSign} />
      </div>
    )

    let valueText = {}
    let timeText = {}

    const unitMeasureText = (
      <div className={styles.unitMeasureText}>
        <ItemView.Display key={element.id} text={element.unitMeasure} />
      </div>
    )

    if (this.props.element.isInEditMode) {
      valueText = (
        <div className={styles.inputValueForm}>
          <Input
            key={element.id}
            name='default blank input'
            id='blank'
            ariaLabel='Blank'
            onInput={this.handleChange}
          />
        </div>
      )
      const date = new Date()

      timeText = (
        <div className={styles.timeText}>
          <ItemView.Display
            key={element.id}
            text={date.getHours() + ':' + date.getMinutes()}
          />
        </div>
      )

      this.setState({
        itemView: (
          <ItemView
            key={this.props.element.id}
            displays={[vitalSignText, valueText, unitMeasureText, timeText]}
            layout='twoColumns'
            textEmphasis='start'
          />
        )
      })
      return
    } else {
      valueText = (
        <div className={styles.valueText}>
          <ItemView.Display key={element.id} text={element.value} />
        </div>
      )
      timeText = (
        <div className={styles.timeText}>
          <ItemView.Display key={element.id} text={element.time} />
        </div>
      )
    }

    this.setState({
      itemView: (
        <ItemView
          key={this.props.element.id}
          displays={[vitalSignText, valueText, unitMeasureText, timeText]}
          layout='twoColumns'
          textEmphasis='start'
        />
      )
    })
  }

  componentDidMount() {
    this.itemViewDisplay(this.props.element)
  }

  handleChange(event) {
    this.props.element.value = event.target.value
  }

  render() {
    return this.renderMethod(this.state.itemView, this.props.element)
  }

  private renderMethod(itemView: ItemView, element: VitalSignItem) {
    return (
      <div className={styles.vitalSignItemView}>
        {itemView}
        <Button
          text='Edit'
          variant='de-emphasis'
          onClick={() => {
            element.isInEditMode = !element.isInEditMode
            this.itemViewDisplay(element)
          }}
        />
      </div>
    )
  }
}

export default ItemElement
