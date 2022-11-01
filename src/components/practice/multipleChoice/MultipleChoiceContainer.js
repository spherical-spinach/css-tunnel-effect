/* eslint-disable function-paren-newline */
import { useState } from 'react'
// import { useSelector } from 'react-redux'
import { Formik, Form } from 'formik'

import MultipleChoiceQuestion from './MultipleChoiceQuestion'
import '../../../css/MultipleChoice.css'
import mockQuestions from './mockQuestions'

const MultipleChoiceContainer = () => {
  // const questions = useSelector(state => state.questions)
  const questions = mockQuestions
  // const chosenParts = useSelector(state => state.chosenParts)
  const [submitStyles, setSubmitStyles] = useState('')

  // const filteredQuestions = questions.filter(q =>
  //   // eslint-disable-next-line implicit-arrow-linebreak
  //   chosenParts.map(part => part.id).includes(q.partId.id),
  // )

  const initialValues = {}

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={values => {
          if (Object.keys(values).length === questions.length) {
            setSubmitStyles(values)
            console.log('multiple valuet', values)
          } else {
            // eslint-disable-next-line no-alert
            alert('ENNEN TARKISTAMISTA VASTAA ENSIN KAIKKIIN KYSYMYKSIIN')
          }
        }}
      >
        <Form>
          {questions.map(question => (
            <MultipleChoiceQuestion
              key={question.id}
              question={question}
              submitStyles={submitStyles}
            />
          ))}
          <button type="submit">TARKISTA</button>
        </Form>
      </Formik>
    </div>
  )
}

export default MultipleChoiceContainer
