import MultipleChoice from './MultipleChoice'

//In production these come from database
const questions = [
  {
    id: 0,
    choices: [
      { id: 1, text: 'asdf1' },
      { id: 2, text: 'asdf2' },
      { id: 3, text: 'asdf3' },
    ],
    rightAnswer: 2,
  },
  {
    id: 1,
    choices: [
      { id: 1, text: 'test1' },
      { id: 2, text: 'test2' },
      { id: 3, text: 'test3' },
    ],
    rightAnswer: 2,
  },
]

const MultipleChoiceContainer = () => {
  let initialValues = {}

  for (let i = 0; i < questions.length; i++) {
    initialValues[`toggled${i}`] = []
  }

  console.log(initialValues)

  return (
    <div>
      <MultipleChoice questions={questions} initialValues={initialValues} />
    </div>
  )
}

export default MultipleChoiceContainer
