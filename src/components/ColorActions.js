import '../styles/ColorActions.css'

const ColorActions = (props) => {
  let handleClick = (event) => {
    console.log(event.target.value)
    props.onColorClicked(event.target.value)
  }

  return (
    <div className="color-actions">
      <button onClick={handleClick} value="black">
        Black
      </button>
      <button onClick={handleClick} value="red">
        Red
      </button>
      <button onClick={handleClick} value="blue">
        Blue
      </button>
    </div>
  )
}

export default ColorActions
