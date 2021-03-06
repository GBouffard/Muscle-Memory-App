import React from 'react'

export default class MyRadios extends React.Component {
  constructor () {
    super()
    this.onChange = this.changeRadio.bind(this)
    this.state = {
      checkedRadio: null
    }
  }

  makeRadio (number) {
    const radioValue = `value${number}`
    const radioLabel = this.props.radiosLabels && this.props.radiosLabels[number]
      ? this.props.radiosLabels[number] : radioValue

    return (
      <div
        className='singleRadioContainer'
        // Each child in an array or iterator should have a unique "key" prop
        key={radioValue}>
        <input
          type='radio'
          onChange={this.onChange}
          value={radioValue}
          checked={this.state.checkedRadio === radioValue} />
        <label
          className='radioText'>
          {radioLabel}
        </label>
      </div>
    )
  }

  renderRadios (number) {
    // loop inside React JSX can be returned through an array
    let radios = []
    for (let i = 0; i < number; i++) {
      radios.push(this.makeRadio(i))
    }
    return radios
  }

  changeRadio (event) {
    this.setState({
      checkedRadio: event.target.value
    })
  }

  render () {
    const radiosElement = this.renderRadios(this.props.radiosNumber)

    return (
      <div
        className='multipleRadiosContainer'>
        Radios for Testing purposes:
        {radiosElement}
      </div>
    )
  }
}

MyRadios.propTypes = {
  radiosNumber: React.PropTypes.number.isRequired,
  radiosLabels: React.PropTypes.arrayOf(React.PropTypes.string)
}
