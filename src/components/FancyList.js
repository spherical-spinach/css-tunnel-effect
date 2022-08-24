import '../css/Accordion.css'

const FancyList = ({ title, options, optionClickHandler }) => (
  <div className="accordionContainer">
    <div className="accordionHead">
      <h2>{title}</h2>
    </div>
    {options.map(o => (
      <div
        key={o.id}
        className="accordionContent"
        onClick={() => optionClickHandler(o)}
        onKeyPress={() => optionClickHandler(o)}
        role="button"
        tabIndex={0}
      >
        <p>{o.name}</p>
      </div>
    ))}
  </div>
)

export default FancyList
