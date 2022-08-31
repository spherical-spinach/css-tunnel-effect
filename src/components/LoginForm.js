/* eslint-disable no-param-reassign */
import { useDispatch } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import { loginUser } from '../reducers/userReducer'

const LoginForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const addUser = async event => {
    event.preventDefault()
    const username = event.target.username.value
    event.target.username.value = ''
    const password = event.target.password.value
    event.target.password.value = ''
    dispatch(loginUser(username, password))
    navigate('/')
  }
  return (
    <div>
      <form onSubmit={addUser}>
        <Form.Group>
          <Form.Label>käyttäjätunnus tai sähköposti:</Form.Label>
          <Form.Control type="text" name="username" />
          <Form.Label>salasana:</Form.Label>
          <Form.Control type="password" name="password" />
          <Button type="submit">kirjaudu</Button>
        </Form.Group>
      </form>
    </div>
  )
}

export default LoginForm
