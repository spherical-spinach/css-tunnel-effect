import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import FancyList from '../general/FancyList'
import '../../css/Practice.css'
import { setChosenCourse } from '../../reducers/chosenCourseReducer'
import { setChosenParts } from '../../reducers/chosenPartsReducer'
import FancyTable from '../general/FancyTable'

const Practice = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [page, setPage] = useState(0)
  const courses = useSelector(state => state.courses)
  const parts = useSelector(state => state.parts)
  const chosenCourse = useSelector(state => state.chosenCourse)
  const chosenParts = useSelector(state => state.chosenParts)
  const [partsToBeDispatched, setPartsToBeDispatched] = useState([])

  const filteredParts = parts.filter(p => p.courseId.id === chosenCourse.id)

  const handleCourseSelection = selectedCourse => {
    dispatch(setChosenCourse(selectedCourse))
    setPage(1)
  }

  const handlePartClick = selectedPart => {
    if (partsToBeDispatched.includes(selectedPart)) {
      const newPartsToBeDispatched = partsToBeDispatched.filter(
        part => part.id !== selectedPart.id,
      )
      setPartsToBeDispatched(newPartsToBeDispatched)
    } else {
      const newPartsToBeDispatched = [...partsToBeDispatched, selectedPart]
      setPartsToBeDispatched(newPartsToBeDispatched)
    }
  }

  const handlePartSelection = () => {
    dispatch(setChosenParts(partsToBeDispatched))
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
        <div>
          <FancyList
            title="VALITSE OSA-ALUE"
            options={filteredParts}
            optionClickHandler={handlePartClick}
          />

          <div>
            <p>
              Valitut osat: {partsToBeDispatched.map(part => `${part.name} `)}
            </p>
          </div>
          <div>
            <button type="button" onClick={handlePartSelection}>
              Seuraava
            </button>
          </div>
        </div>
      )}
      {page === 2 && (
        <div className="chosenItemsContainer">
          <FancyTable
            headers={['VALITTU KURSSI', 'VALITTU OSA-ALUE']}
            contents={[
              chosenCourse.name,
              chosenParts.map(part => `${part.name} `),
            ]}
          />
          <div
            className="middleButton"
            onClick={() => navigate('/practice2')}
            onKeyPress={() => navigate('/practice2')}
            role="button"
            tabIndex={0}
          >
            <p className="middleButtonText">{'Treenaamaan ->'}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Practice
