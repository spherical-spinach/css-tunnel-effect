/* eslint-disable operator-linebreak */
/* eslint-disable indent */
// import { useNavigate } from 'react-router-dom'

import '../../css/TrickWording.css'

const TrickWordingMain = () => {
  // const navigate = useNavigate()
  const text = 'hello'
  return (
    <div className="content-container">
      <h2 className="header">Trick wording</h2>
      <div className="horizontal-line" />
      <p className="sub-header">Trick wording {text}</p>
    </div>
  )
}

export default TrickWordingMain
