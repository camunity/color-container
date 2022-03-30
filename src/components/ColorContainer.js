import React, { useState } from 'react'
import ColorBox from './ColorBox'
import ColorActions from './ColorActions'
import ColorMessage from './ColorMessage'
import '../styles/ColorContainer.css'

const ColorContainer = () => {
  const [color, setColor] = useState('pink')

  let colorShouldChange = (colorValue) => {
    // should get notified by ColorActions
    console.log('Color Box should be: ', colorValue)
    setColor(colorValue)
  }

  return (
    <div className="color-container">
      <ColorMessage color={color} />
      <ColorBox color={color} />
      <ColorActions onColorClicked={colorShouldChange} />
    </div>
  )
}

/*
class ColorContainer extends React.Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     color: 'pink',
        message: "",
        number: 5
  //   }

  // }

  // colorShouldChange = (colorValue) => {
  //   // should get notified by ColorActions
  //   console.log('Color Box should be: ', colorValue)
  //   this.setState({ color: colorValue })
  // }

  // render() {
  //   return (
  //     <div className="color-container">
  //       <ColorMessage color={this.state.color} />
  //       <ColorBox color={this.state.color} />
  //       <ColorActions onColorClicked={this.colorShouldChange} />
  //     </div>
  //   )
  // }
}
*/
export default ColorContainer
