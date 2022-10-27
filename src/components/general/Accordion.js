import { useState } from 'react'
import '../../css/Accordion.css'

const Accordion = ({ tree }) => {
  const [show, setShow] = useState(false)

  let triangleClasses = 'arrow-down'
  if (show) {
    triangleClasses = 'arrow-down show'
  }

  return tree.map(node => {
    if (!node.children) {
      return (
        <div key={node.id} className="fancyListContent">
          <p>{node.id}</p>
        </div>
      )
    }
    return (
      <div key={node.id} className="fancyListContainer">
        <div
          className="fancyListHeader"
          onClick={() => setShow(!show)}
          onKeyPress={() => setShow(!show)}
          role="button"
          tabIndex={0}
        >
          <h2>{node.id}</h2>
          <div className={triangleClasses} />
        </div>
        {show && <Accordion tree={node.children} />}
      </div>
    )
  })
}

export default Accordion
