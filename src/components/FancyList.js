import '../css/Accordion.css'
import { useState } from 'react'

const FancyList = ({ title, options, optionClickHandler }) => {
  const [selectedOptions, setSelectedOptions] = useState([])

  const fancyClickHandler = o => {
    if (selectedOptions.includes(o)) {
      const newSelectedOptions = selectedOptions.filter(
        part => part.id !== o.id,
      )
      setSelectedOptions(newSelectedOptions)
    } else {
      const newSelectedOptions = [...selectedOptions, o]
      setSelectedOptions(newSelectedOptions)
    }
    optionClickHandler(o)
  }

  return (
    <div className="accordionContainer">
      <div className="accordionHead">
        <h2>{title}</h2>
      </div>
      {options.map(o => (
        <div
          key={o.id}
          className={
            selectedOptions.includes(o)
              ? 'accordionContent selectedContent'
              : 'accordionContent'
          }
          onClick={() => fancyClickHandler(o)}
          onKeyPress={() => fancyClickHandler(o)}
          role="button"
          tabIndex={0}
        >
          <p>{o.name}</p>
        </div>
      ))}
    </div>
  )
}

export default FancyList
