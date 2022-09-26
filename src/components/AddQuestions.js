// import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import * as yup from 'yup'
// import { configure } from '@testing-library/react'
import FancyList from './FancyList'
import '../css/Practice.css'
import { setChosenCourse } from '../reducers/chosenCourseReducer'
import { setChosenParts } from '../reducers/chosenPartsReducer'
import { setChosenQuestiontypes } from '../reducers/chosenQuestiontypesReducer'
// import { createAnswer } from '../reducers/answerReducer'
// import { createQuestion } from '../reducers/questionReducer'
import FancyTable from './FancyTable'

// import { registerUser } from '../reducers/userReducer'

const AddQuestions = () => {
  // const navigate = useNavigate()
  const dispatch = useDispatch()
  const [page, setPage] = useState(0)
  const courses = useSelector(state => state.courses)
  const parts = useSelector(state => state.parts)
  const questiontypes = useSelector(state => state.questiontypes)
  const chosenCourse = useSelector(state => state.chosenCourse)
  const chosenQuestiontypes = useSelector(state => state.chosenQuestiontypes)
  const chosenParts = useSelector(state => state.chosenParts)

  const filteredParts = parts.filter(p => p.courseId.id === chosenCourse.id)

  const handleCourseSelection = selectedCourse => {
    dispatch(setChosenCourse(selectedCourse))
    setPage(1)
  }

  const handlePartSelection = selectedPart => {
    dispatch(setChosenParts(selectedPart))
    setPage(2)
  }

  const handleTypeSelection = selectedType => {
    dispatch(setChosenQuestiontypes(selectedType))
    setPage(3)
  }

  const initialValues1 = {
    question: '',
    answer1: '',
    answer2: '',
    answer3: '',
    answer4: '',
  }

  const initialValues2 = {
    flashcardanswer: '',
    flashcardquestion: '',
  }

  const handleMultipleChoiceSubmit = ({
    question,
    answer1,
    answer2,
    answer3,
    answer4,
    isCorrect1,
    isCorrect2,
    isCorrect3,
    isCorrect4,
  }) => {
    console.log(`Tässä

    question: ${question}
    answer1: ${answer1}
    answer2: ${answer2}
    answer3: ${answer3}
    answer4: ${answer4}
    isCorrect1: ${isCorrect1}
    isCorrect2: ${isCorrect2}
    isCorrect3: ${isCorrect3}
    isCorrect4: ${isCorrect4}
    chosenCourse.id: ${chosenCourse.id}
    `)
    // const jotain = dispatch(createAnswer(answer1, isCorrect1))
    // let trueorfalse1 = false
    // let trueorfalse2 = false
    // let trueorfalse3 = false
    // let trueorfalse4 = false
    // if (isCorrect1 === true) {
    //   trueorfalse1 = true
    // }
    // if (isCorrect2 === true) {
    //   trueorfalse2 = true
    // }
    // if (isCorrect3 === true) {
    //   trueorfalse3 = true
    // }
    // if (isCorrect4 === true) {
    //   trueorfalse4 = true
    // }
    // dispatch(createAnswer(answer1, trueorfalse1))
    // dispatch(createAnswer(answer2, trueorfalse2))
    // dispatch(createAnswer(answer3, trueorfalse3))
    // dispatch(createAnswer(answer4, trueorfalse4))
    // printAnswers()
    // dispatch(
    //   createQuestion(
    //     chosenCourse.id,
    //     chosenParts.id,
    //     questiontypes.id,
    //     question,
    //     [1, 2, 3, 4],
    //   ),
    // )
    // navigate('/')
  }

  const handleFlashcardSubmit = ({ flashcardquestion, flashcardanswer }) => {
    console.log(`Tässä 
    
    flashcardquestion: ${flashcardquestion}
    flashcardanswer: ${flashcardanswer}
    `)
    // dispatch(registerUser(username, email, password))
    // navigate('/')
  }

  const validationSchema1 = yup.object().shape({
    question: yup.string().required('Kysymys ei voi olla tyhjä'),
    answer1: yup.string().required('Vastausvaihtoehto 1 ei voi olla tyhjä'),
    answer2: yup.string().required('Vastausvaihtoehto 2 ei voi olla tyhjä'),
    answer3: yup.string().required('Vastausvaihtoehto 3 ei voi olla tyhjä'),
    answer4: yup.string().required('Vastausvaihtoehto 4 ei voi olla tyhjä'),
  })

  const validationSchema2 = yup.object().shape({
    flashcardquestion: yup.string().required('Kysymys ei voi olla tyhjä'),
    flashcardanswer: yup.string().required('Vastaus ei voi olla tyhjä'),
  })

  return (
    <div className="practiceContainer">
      {page === 0 && (
        <FancyList
          title="VALITSE KURSSI JOLLE HALUAT LISÄTÄ KYSYMYKSEN"
          options={courses}
          optionClickHandler={handleCourseSelection}
        />
      )}
      {page === 1 && (
        <div>
          <p>Valittu kurssi: {chosenCourse.name}</p>
          <FancyList
            title="VALITSE OSA-ALUE, JOLLE HALUAT LISÄTÄ KYSYMYKSEN"
            options={filteredParts}
            optionClickHandler={handlePartSelection}
          />
        </div>
      )}
      {page === 2 && (
        <div>
          <p>Valittu kurssi: {chosenCourse.name}</p>
          <FancyList
            title="VALITSE KYSYMYSTYYPPI"
            options={questiontypes}
            optionClickHandler={handleTypeSelection}
          />
        </div>
      )}
      {page === 3 && (
        <div className="chosenItemsContainer">
          <FancyTable
            headers={['KURSSI', 'OSA-ALUE', 'KYSYMYSTYYPPI']}
            contents={[
              chosenCourse.name,
              chosenParts.name,
              chosenQuestiontypes.name,
            ]}
          />
          <div>
            <p>muuta valintoja</p>
          </div>
          {chosenQuestiontypes.name === 'multiple choice' ? (
            <div className="formContainer">
              <div className="formHeader">
                <h2>Lisää uusi monivalintakysymys</h2>
              </div>
              <div className="formBody">
                <Formik
                  initialValues={initialValues1}
                  onSubmit={handleMultipleChoiceSubmit}
                  validationSchema={validationSchema1}
                >
                  {({ errors, touched }) => (
                    <Form>
                      <div className="fieldContainer">
                        <label htmlFor="question">Kysymys</label>
                        <Field type="text" name="question" />
                        {errors.question && touched.question ? (
                          <div className="fieldError">{errors.question}</div>
                        ) : null}
                      </div>
                      <div className="fieldContainer">
                        <label htmlFor="answer1">Vastausvaihtoehto 1</label>
                        <Field type="text" name="answer1" />
                        {errors.answer1 && touched.answer1 ? (
                          <div className="fieldError">{errors.question}</div>
                        ) : null}
                      </div>
                      <div className="checkboxContainer">
                        <label htmlFor="isCorrect1">
                          Tämä on oikea vastaus
                        </label>
                        <Field type="checkbox" name="isCorrect1" />
                      </div>
                      <p> </p>
                      <div className="fieldContainer">
                        <label htmlFor="answer2">Vastausvaihtoehto 2</label>
                        <Field type="text" name="answer2" />
                        {errors.answer2 && touched.answer2 ? (
                          <div className="fieldError">{errors.answer2}</div>
                        ) : null}
                      </div>
                      <div className="checkboxContainer">
                        <label htmlFor="isCorrect2">
                          Tämä on oikea vastaus
                        </label>
                        <Field type="checkbox" name="isCorrect2" />
                      </div>
                      <p> </p>
                      <div className="fieldContainer">
                        <label htmlFor="answer3">Vastausvaihtoehto 3</label>
                        <Field type="text" name="answer3" />
                        {errors.answer3 && touched.answer3 ? (
                          <div className="fieldError">{errors.answer3}</div>
                        ) : null}
                      </div>
                      <div className="checkboxContainer">
                        <label htmlFor="isCorrect3">
                          Tämä on oikea vastaus
                        </label>
                        <Field type="checkbox" name="isCorrect3" />
                      </div>
                      <p> </p>
                      <div className="fieldContainer">
                        <label htmlFor="answer4">Vastausvaihtoehto 4</label>
                        <Field type="text" name="answer4" />
                        {errors.answer4 && touched.answer4 ? (
                          <div className="fieldError">{errors.answer4}</div>
                        ) : null}
                      </div>
                      <div className="checkboxContainer">
                        <label htmlFor="isCorrect4">
                          Tämä on oikea vastaus
                        </label>
                        <Field type="checkbox" name="isCorrect4" />
                      </div>
                      <button type="submit">LISÄÄ KYSYMYS</button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          ) : (
            <div className="formContainer">
              <div className="formHeader">
                <h2>Lisää uusi flashcard</h2>
              </div>
              <div className="formBody">
                <Formik
                  initialValues={initialValues2}
                  onSubmit={handleFlashcardSubmit}
                  validationSchema={validationSchema2}
                >
                  {({ errors, touched }) => (
                    <Form>
                      <div className="fieldContainer">
                        <label htmlFor="flashcardquestion">Kysymys</label>
                        <Field type="text" name="flashcardquestion" />
                        {/* {errors.flashcardquestion && touched.flashcardquestion ? (
                          <div className="fieldError">
                            {errors.flashcardquestion}
                          </div>
                        ) : null} */}
                      </div>
                      <div className="fieldContainer">
                        <label htmlFor="flashcardanswer">Vastaus</label>
                        <Field type="text" name="flashcardanswer" />
                        {errors.flashcardanswer && touched.flashcardanswer ? (
                          <div className="fieldError">
                            {errors.flashcardanswer}
                          </div>
                        ) : null}
                      </div>
                      <button type="submit">LISÄÄ</button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
export default AddQuestions
