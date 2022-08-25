import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

// import Courses from './Courses'
// import Accordion from './Accordion'
import FancyList from './FancyList'
import '../css/Practice.css'
import '../css/Home.css'
import { setChosenCourse } from '../reducers/chosenCourseReducer'
import { setChosenPart } from '../reducers/chosenPartReducer'

const Practice = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [page, setPage] = useState(0)
  const courses = useSelector(state => state.courses)
  const parts = useSelector(state => state.parts)
  const chosenCourse = useSelector(state => state.chosenCourse)
  const chosenPart = useSelector(state => state.chosenPart)

  const filteredParts = parts.filter(p => p.courseId.id === chosenCourse.id)

  const handleCourseSelection = selectedCourse => {
    dispatch(setChosenCourse(selectedCourse))
    setPage(1)
  }

  const handlePartSelection = selectedPart => {
    dispatch(setChosenPart(selectedPart))
    setPage(2)
  }

  return (
    <div className="practiceContainer">
      {page === 0 && (
        <FancyList
          title="VALITSE KURSSI"
          options={courses}
          optionClickHandler={handleCourseSelection}
        />
      )}
      {page === 1 && (
        <FancyList
          title="VALITSE OSA-ALUE"
          options={filteredParts}
          optionClickHandler={handlePartSelection}
        />
      )}
      {page === 2 && (
        <div>
          <table>
            <tbody>
              <tr>
                <td>VALITTU KURSSI:</td>
                <td>{chosenCourse.name}</td>
              </tr>
              <tr>
                <td>VALITTU OSA-ALUE:</td>
                <td>{chosenPart.name}</td>
              </tr>
            </tbody>
          </table>
          <div
            className="middleButton"
            onClick={() => navigate('/practice2')}
            onKeyPress={() => navigate('/practice2')}
            role="button"
            tabIndex={0}
          >
            <p className="middleButtonText">Treenaa 2 -näkymä</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Practice
