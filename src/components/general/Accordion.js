import { useState } from 'react'
import '../../css/Accordion.css'

const Accordion = () => {
  const [show, setShow] = useState(false)

  let triangleClasses = 'arrow-down'
  if (show) {
    triangleClasses = 'arrow-down show'
  }
  return (
    <div className="fancyListContainer">
      <div
        className="fancyListHeader"
        onClick={() => setShow(!show)}
        onKeyPress={() => setShow(!show)}
        role="button"
        tabIndex={0}
      >
        <h2>moro</h2>
        <div className={triangleClasses} />
      </div>
      {show && (
        <div>
          <div className="fancyListContent">
            <p>moi</p>
          </div>
          <div className="fancyListContent">
            <p>moi</p>
          </div>
          <div className="fancyListContent">
            <p>moi</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Accordion
