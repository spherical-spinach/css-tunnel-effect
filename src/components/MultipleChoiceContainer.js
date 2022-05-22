import MultipleChoice from './MultipleChoice'

import { useSelector } from 'react-redux'

const MultipleChoiceContainer = () => {
  let initialValues = {}
  const questions = useSelector(state => state.questions)

  return (
    <div>
      <MultipleChoice questions={questions} initialValues={initialValues} />
    </div>
  )
}

export default MultipleChoiceContainer
