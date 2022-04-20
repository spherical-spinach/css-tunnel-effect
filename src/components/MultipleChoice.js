import { Formik, Form } from 'formik'

import MultipleChoiceQuestion from './MultipleChoiceQuestion'
import '../css/MultipleChoice.css'

/**
 * Kun submit tapahtuu, halutaan tietää
 * A: Mitä on painettu
 * B: Mitä olisi pitänyt painaa?
 *
 * JOS nämä ovat sama, niin näytetään vihreä
 * tausta oikean vaihtoehdon kohdalla
 *
 * JOS nämä ovat eri, niin näytetään LISÄKSI
 * punainen tausta valinnan kohdalla
 *
 * Eli jokaisen kysymyksen kohdalla halutaan
 *
 *
 *
 *
 */

const MultipleChoice = ({ questions, initialValues }) => {
  console.log('täs nää:', initialValues)
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={values => {
          alert(JSON.stringify(values, null, 2))
        }}
      >
        <Form>
          {questions.map(question => (
            <MultipleChoiceQuestion question={question} key={question.id} />
          ))}
          <button type="submit">TARKISTA</button>
        </Form>
      </Formik>
    </div>
  )
}

export default MultipleChoice
