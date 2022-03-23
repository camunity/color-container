import '../styles/ColorBox.css'

const ColorBox = (props) => {
  console.log('Color Box received props:', props.color)
  return <div className={`color-box ${props.color}`}></div>
}

export default ColorBox
