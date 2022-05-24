/* eslint-disable react/jsx-one-expression-per-line */

import { Link } from 'react-router-dom'

import RegisterForm from './RegisterForm'

const RegisterUser = () => (
  <div>
    <h2>Luo uusi käyttäjä</h2>
    <p>
      Jos sinulla on jo tili, <Link to="/login">kirjaudu sisään</Link>.
    </p>
    <RegisterForm />
  </div>
)

export default RegisterUser
