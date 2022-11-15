/* eslint-disable operator-linebreak */
/* eslint-disable indent */
import { useDispatch } from 'react-redux'
import { Formik, Form, Field } from 'formik'
import { useNavigate, Link } from 'react-router-dom'
import * as yup from 'yup'

import { registerUser } from '../../reducers/userReducer'
import '../../css/Form.css'

// from captcha.audio import AudioCaptcha
// from captcha.image import ImageCaptcha

// audio = AudioCaptcha(voicedir='/path/to/voices')
// image = ImageCaptcha(fonts=['/path/A.ttf', '/path/B.ttf'])

// data = audio.generate('1234')
// audio.write('1234', 'out.wav')

// data = image.generate('1234')
// image.write('1234', 'out.png')

const validationSchema = yup.object().shape({
  username: yup.string().required('Käyttäjänimi ei voi olla tyhjä'),
  email: yup
    .string()
    .email('Sähköposti on väärän muotoinen')
    .required('Sähköposti puuttuu'),
  password: yup.string().required('Salasana ei voi olla tyhjä'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Salasanat eivät ole samat'),
})

const RegisterForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = ({ username, email, password }) => {
    dispatch(registerUser(username, email, password))
    navigate('/')
  }

  const initialValues = {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  }

  return (
    <div className="formViewContainer">
      <div className="formContainer">
        <div className="formHeader">
          <h2>Luo uusi tili</h2>
        </div>
        <div className="formBody">
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="fieldContainer">
                  <label htmlFor="username">Käyttäjänimi</label>
                  <Field type="text" name="username" />
                  {errors.username && touched.username ? (
                    <div className="fieldError">{errors.username}</div>
                  ) : null}
                </div>
                <div className="fieldContainer">
                  <label htmlFor="email">Sähköposti</label>
                  <Field type="text" name="email" />
                  {errors.email && touched.email ? (
                    <div className="fieldError">{errors.email}</div>
                  ) : null}
                </div>
                <div className="fieldContainer">
                  <label htmlFor="password">Salasana</label>
                  <Field type="password" name="password" />
                  {errors.password && touched.password ? (
                    <div className="fieldError">{errors.password}</div>
                  ) : null}
                </div>
                <div className="fieldContainer">
                  <label htmlFor="passwordConfirmation">
                    Salasana uudestaan
                  </label>
                  <Field type="password" name="passwordConfirmation" />
                  {errors.passwordConfirmation &&
                  touched.passwordConfirmation ? (
                    <div className="fieldError">
                      {errors.passwordConfirmation}
                    </div>
                  ) : null}
                </div>
                {/* <div className="termsOfUseCheckboxContainer">
                  <label htmlFor="termsOfUse">
                    * Olen lukenut ja hyväksyn käyttöehdot
                  </label>
                  <Field type="checkbox" name="termsOfUse" />
                </div> */}
                <button type="submit">REKISTERÖIDY</button>
                <p className="formMainText">Onko sinulla jo tili?</p>
                <p className="formMainText">
                  Jos on, <Link to="/login">kirjaudu sisään</Link>.
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default RegisterForm
