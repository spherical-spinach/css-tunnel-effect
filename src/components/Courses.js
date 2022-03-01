import { useSelector } from 'react-redux'
// import { useSelector } from 'react-redux'

const Course = ({ course }) => {
  console.log('course', course)
  return(
    <li className='course'>
      {course.courseId.name} 
    </li>
  )
}

const Courses = () => {
  const courses = useSelector(state => state)
  return(
    <ul>
      {courses.map(course =>
        <Course
          key={course.id}
          course={course}
        />
      )}
    </ul>
  )
}

export default Courses