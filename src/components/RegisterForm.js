import { useDispatch } from 'react-redux'
import { Form, Button } from 'react-bootstrap'

import { registerUser } from '../reducers/userReducer'


const RegisterForm = () => {
  const dispatch = useDispatch()

  const addUser = async event => {
    event.preventDefault()
    const username = event.target.username.value
    event.target.username.value = ''
    const email = event.target.email.value
    event.target.email.value = ''
    const password = event.target.password.value
    event.target.password.value = ''
    dispatch(registerUser(username, email, password))
  }
  return (
    <div>
      <form onSubmit={addUser}>
        <Form.Group>
          <Form.Label>käyttäjätunnus:</Form.Label>
          <Form.Control type="text" name="username" />
          <Form.Label>sähköposti:</Form.Label>
          <Form.Control type="text" name="email" />
          <Form.Label>salasana:</Form.Label>
          <Form.Control type="password" name="password" />
          <Button type="submit">Rekisteröi käyttäjä</Button>
        </Form.Group>
      </form>
    </div>
  )
}

export default RegisterForm
