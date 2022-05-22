import { Formik, Form } from 'formik'
import { useState } from 'react'

import MultipleChoiceQuestion from './MultipleChoiceQuestion'
import '../css/MultipleChoice.css'

const MultipleChoice = ({ questions, initialValues }) => {
  const [submitStyles, setSubmitStyles] = useState('')
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={values => {
          if (Object.keys(values).length === questions.length) {
            setSubmitStyles(values)
          } else {
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

export default MultipleChoice
