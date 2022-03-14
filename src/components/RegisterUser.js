import { useNavigate, Link } from 'react-router-dom'

import RegisterForm from './RegisterForm'

const RegisterUser = props => {
  const navigate = useNavigate()

  // eslint-disable-next-line no-unused-vars
  const onSubmit = event => {
    event.preventDefault()
    props.onLogin('mluukkai')
    navigate('/')
  }

  return (
    <div>
      <h2>Luo uusi käyttäjä</h2>
      <p>
        Jos sinulla on jo tili, <Link to="/login">kirjaudu sisään</Link>.
      </p>
      <RegisterForm />
    </div>
  )
}

export default RegisterUser
