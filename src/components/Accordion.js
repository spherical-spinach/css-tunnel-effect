import { useState } from 'react'
import { useSelector } from 'react-redux'
import '../css/Accordion.css'

function returnCourse(title, course, setCourse) {
  if (title === 'KURSSI') {
    return (
      <div
        key={course.id}
        className="accordionContent"
        onClick={() => setCourse(course.name)}
        onKeyPress={() => setCourse(course.name)}
        role="button"
        tabIndex={0}
      >
        <p>{course.name}</p>
      </div>
    )
  }
  return null
}

function returnParts(title, part, course) {
  console.log('course', course)
  console.log('part', part.courseId.name)
  if (title === 'OSA-ALUE') {
    return (
      <div key={part.id} className="accordionContent">
        <p key={part.id}>{part.name}</p>
      </div>
    )
  }
  return null
}

function returnAmount(title) {
  if (title === 'KYSYMYSTEN MÄÄRÄ') {
    return (
      <div className="accordionContent">
        <p>5</p>
        <p>10</p>
        <p>25</p>
        <p>50</p>
        <p>kaikki kysymykset</p>
      </div>
    )
  }
  return null
}

const Accordion = ({ title }) => {
  const [show, setShow] = useState(false)
  const [course, setCourse] = useState(null)
  const courses = useSelector(state => state.courses)
  const parts = useSelector(state => state.parts)

  let triangleClasses = 'arrow-down'
  if (show) {
    triangleClasses = 'arrow-down show'
  }
  return (
    <div className="accordionContainer">
      <div
        className="accordionHead"
        onClick={() => setShow(!show)}
        onKeyPress={() => setShow(!show)}
        role="button"
        tabIndex={0}
      >
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

export default Accordion
