import React from 'react'
import { useNavigate } from 'react-router-dom'
import LoginForm from './LoginForm'

const Login = props => {
  const navigate = useNavigate()

  const onSubmit = event => {
    event.preventDefault()
    props.onLogin('mluukkai')
    navigate('/')
  }

  return (
    <div>
      <h2>Kirjaudu</h2>
      <LoginForm />
    </div>
  )
}

export default Login
