import MultipleChoice from './MultipleChoice'

import { useSelector } from 'react-redux'

//In production these come from database
// const questions = [
//   {
//     id: 0,
//     choices: [
//       { id: 1, text: 'asdf1' },
//       { id: 2, text: 'asdf2' },
//       { id: 3, text: 'asdf3' },
//     ],
//     rightAnswer: 2,
//   },
//   {
//     id: 1,
//     choices: [
//       { id: 1, text: 'test1' },
//       { id: 2, text: 'test2' },
//       { id: 3, text: 'test3' },
//     ],
//     rightAnswer: 2,
//   },
// ]

// HALUTAAN DATABASESTA!!!!
// 1. Kysymys
// 2. Vaihtoehdot
// 3. Oikea vastaus

const MultipleChoiceContainer = () => {
  let initialValues = {}
  const questions = useSelector(state => state.questions)

  console.log('täs data backendistä: ', questions)

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
