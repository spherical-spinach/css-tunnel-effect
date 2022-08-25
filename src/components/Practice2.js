/* eslint-disable react/no-unescaped-entities */
import { useSelector } from 'react-redux'

import MultipleChoiceContainer from './MultipleChoiceContainer'
import '../css/Practice2.css'

const Practice2 = () => {
  const chosenCourse = useSelector(state => state.chosenCourse)
  const chosenPart = useSelector(state => state.chosenPart)

  return (
    <div className="practice2Container">
      <h4>10 KYSYMYSTÄ KURSSIN</h4>
      <h4>"{chosenCourse.name}"</h4>
      <h4>OSASTA</h4>
      <h4>"{chosenPart.name}"</h4>
      <MultipleChoiceContainer />
    </div>
  )
}

export default Practice2
