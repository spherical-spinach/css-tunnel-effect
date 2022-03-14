import { useSelector } from 'react-redux'

const Course = ({ course }) => {
  return <li className="course">{course.courseId.name}</li>
}

const Courses = () => {
  const courses = useSelector(state => state)
  return (
    <div>
      Valitse kurssi aloittaaksesi treenit
      <ul>
        {courses.map(course => (
          <Course key={course.id} course={course} />
        ))}
      </ul>
    </div>
  )
}

export default Courses
