
import { useState } from 'react'
import { useSelector } from 'react-redux'
import '../css/Accordion.css'

function returnCourse(title, course, setCourse) {
  if (title == 'KURSSI') {
    return <div className="accordionContent"onClick={() => setCourse(course.name)}>
      <p>{course.name}</p>
    </div>
  }  
}

function returnParts(title, part, course) {
  console.log('course', course)
  console.log('part', part.courseId.name)
  if (title == 'OSA-ALUE') {
    return <div className="accordionContent">
      <p>{part.name}</p>
    </div>
  }  
}

function returnAmount(title) {
  if (title == 'KYSYMYSTEN MÄÄRÄ') {
    return <div className="accordionContent">
      <p>5</p>
      <p>10</p>
      <p>25</p>
      <p>50</p>
      <p>kaikki kysymykset</p>
    </div>
  
  }
}

const Accordion = ({ title }) => {
  const [show, setShow] = useState(false)
  const [course, setCourse] = useState(null)
  // console.log('course', course)
  const courses = useSelector(state => state.courses)
  const parts = useSelector(state => state.parts)
  const joku = useSelector(state => state.course)
  console.log('joku', joku)
  // console.log('parts', parts)
  let triangleClasses = 'arrow-down'
  if (show) {
    triangleClasses = 'arrow-down show'
  }
  return (
    <div className="accordionContainer">
      <div className="accordionHead" onClick={() => setShow(!show)}s>
        <h2>{title}</h2>
        <div className={triangleClasses} />
      </div>
      {show && (
        <div>
          {courses.map(course => returnCourse(title, course, setCourse))}
          {parts.map(part => returnParts(title, part, course))}
          {returnAmount(title, setShow, show)}

        </div>
      )}
    </div>
  )
}

export default Accordion
