/* eslint-disable react/no-unescaped-entities */
import { useSelector } from 'react-redux'

import MultipleChoiceContainer from './multipleChoice/MultipleChoiceContainer'
import '../../css/Practice2.css'

const Practice2 = () => {
  const chosenCourse = useSelector(state => state.chosenCourse)
  const chosenParts = useSelector(state => state.chosenParts)

  return (
    <div className="practice2Container">
      <h4>10 KYSYMYSTÄ KURSSIN</h4>
      <h4>"{chosenCourse.name}"</h4>
      <h4>OSISTA</h4>
      <h4>"{chosenParts.map(part => `${part.name} `)}"</h4>
      <MultipleChoiceContainer />
    </div>
  )
}

export default Practice2
