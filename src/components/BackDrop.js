import '../css/BackDrop.css'

const BackDrop = ({ backDropClickHandler }) => (
  <div
    className="backDrop"
    onClick={backDropClickHandler}
    onKeyDown={backDropClickHandler}
    role="button"
    aria-label="Close side drawer"
    tabIndex="0"
  />
)

export default BackDrop
