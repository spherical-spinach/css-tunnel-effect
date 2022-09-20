import { useDispatch } from 'react-redux'
import { Formik, Form, Field } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'

import { loginUser } from '../reducers/userReducer'
import '../css/Form.css'

const validationSchema = yup.object().shape({
  username: yup.string().required('Käyttäjänimi ei voi olla tyhjä'),
  password: yup.string().required('Salasana ei voi olla tyhjä'),
})

const LoginForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = ({ username, password }) => {
    dispatch(loginUser(username, password))
    navigate('/')
  }

  return (
    <div className="formViewContainer">
      <div className="formContainer">
        <div className="formHeader">
          <h2>Kirjaudu sisään</h2>
        </div>
        <div className="formBody">
          <Formik
            initialValues={{ username: '', password: '' }}
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
                  <label htmlFor="password">Käyttäjänimi</label>
                  <Field type="password" name="password" />
                  {errors.password && touched.password ? (
                    <div className="fieldError">{errors.password}</div>
                  ) : null}
                </div>
                <button type="submit">KIRJAUDU</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
