/* eslint-disable function-paren-newline */
import { useSelector } from 'react-redux'
import MultipleChoice from './MultipleChoice'

const MultipleChoiceContainer = () => {
  const questions = useSelector(state => state.questions)
  const chosenParts = useSelector(state => state.chosenParts)

  const filteredQuestions = questions.filter(q =>
    // eslint-disable-next-line implicit-arrow-linebreak
    chosenParts.map(part => part.id).includes(q.partId.id),
  )
  const initialValues = {}

  return (
    <MultipleChoice
      questions={filteredQuestions}
      initialValues={initialValues}
    />
  )
}

export default MultipleChoiceContainer
