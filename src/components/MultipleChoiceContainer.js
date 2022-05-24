import { useSelector } from 'react-redux'
import MultipleChoice from './MultipleChoice'

const MultipleChoiceContainer = () => {
  const initialValues = {}
  const questions = useSelector(state => state.questions)

  return (
    <div>
      <MultipleChoice questions={questions} initialValues={initialValues} />
    </div>
  )
}

export default MultipleChoiceContainer
