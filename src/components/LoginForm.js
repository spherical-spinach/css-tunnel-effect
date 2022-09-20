import { useDispatch } from 'react-redux'
import { Formik, Form, Field } from 'formik'
import { useNavigate } from 'react-router-dom'

import { loginUser } from '../reducers/userReducer'
import '../css/Form.css'

const LoginForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = ({ username, password }) => {
    dispatch(loginUser(username, password))
    navigate('/')
  }

  return (
    <div className="formContainer">
      <div className="formHeader">
        <h2>Kirjaudu sisään</h2>
      </div>
      <div className="formBody">
        <Formik
          initialValues={{ username: '', password: '' }}
          onSubmit={handleSubmit}
        >
          <Form>
            <label htmlFor="username">Käyttäjätunnus tai sähköposti:</label>
            <br />
            <Field type="text" name="username" />
            <br />
            <label htmlFor="password">Salasana:</label>
            <br />
            <Field type="password" name="password" />
            <br />
            <br />
            <button type="submit">KIRJAUDU</button>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default LoginForm
