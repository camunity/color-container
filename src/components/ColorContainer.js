import React from 'react'
import ColorBox from './ColorBox'
import ColorActions from './ColorActions'
import '../styles/ColorContainer.css'

class ColorContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      color: 'pink',
    }
  }

  colorShouldChange = (colorValue) => {
    // should get notified by ColorActions
    console.log('Color Box should be: ', colorValue)
    this.setState({ color: colorValue })
  }

  render() {
    return (
      <div className="color-container">
        <h1> Click a button to change the color! </h1>
        <ColorBox color={this.state.color} />
        <ColorActions onColorClicked={this.colorShouldChange} />
      </div>
    )
  }
}

export default ColorContainer
