import { useSelector } from 'react-redux'
import MultipleChoice from './MultipleChoice'

const MultipleChoiceContainer = () => {
  const questions = useSelector(state => state.questions)
  const chosenPart = useSelector(state => state.chosenPart)

  const filteredQuestions = questions.filter(q => q.partId.id === chosenPart.id)
  const initialValues = {}

  return (
    <div>
      <MultipleChoice
        questions={filteredQuestions}
        initialValues={initialValues}
      />
    </div>
  )
}

export default MultipleChoiceContainer
