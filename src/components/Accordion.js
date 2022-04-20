import { useState } from 'react'

import '../css/Accordion.css'

const Accordion = ({ title }) => {
  const [show, setShow] = useState(false)
  let triangleClasses = 'arrow-down'
  if (show) {
    triangleClasses = 'arrow-down show'
  }
  return (
    <div className="accordionContainer">
      <div className="accordionHead" onClick={() => setShow(!show)}>
        <h2>{title}</h2>
        <div className={triangleClasses} />
      </div>
      {show && (
        <div className="accordionContent">
          <p>row1</p>
          <p>row2</p>
          <p>row3</p>
        </div>
      )}
    </div>
  )
}

export default Accordion
