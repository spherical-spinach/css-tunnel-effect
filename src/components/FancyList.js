import '../css/Accordion.css'

const FancyList = () => {
  return (
    <div className="accordionContainer">
      const [show, setShow] = useState(false)
      <div className="accordionHead" onClick={() => setShow(!show)}>
        <h2>{title}</h2>
        <div className={triangleClasses} />
      </div>
      {show && (
        <div>
          {courses.map(course2 => returnCourse(title, course2, setCourse))}
          {parts.map(part => returnParts(title, part, course))}
          {returnAmount(title, setShow, show)}
        </div>
      )}
    </div>
  )
}

export default FancyList
