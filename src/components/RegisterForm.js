import { useDispatch } from 'react-redux'
import { Formik, Form, Field } from 'formik'
import { useNavigate } from 'react-router-dom'

import { registerUser } from '../reducers/userReducer'

const RegisterForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = ({ username, email, password }) => {
    dispatch(registerUser(username, email, password))
    navigate('/')
  }

  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor="username">Käyttäjätunnus:</label>
        <br />
        <Field type="text" name="username" />
        <br />
        <label htmlFor="email">Sähköposti:</label>
        <br />
        <Field type="text" name="email" />
        <br />
        <label htmlFor="password">Salasana:</label>
        <br />
        <Field type="password" name="password" />
        <br />
        <button type="submit">REKISTERÖIDY</button>
      </Form>
    </Formik>
  )
}

export default RegisterForm
