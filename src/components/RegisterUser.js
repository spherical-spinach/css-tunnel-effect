/* eslint-disable react/jsx-one-expression-per-line */

import { Link } from 'react-router-dom'

import RegisterForm from './RegisterForm'
import '../css/Form.css'

const RegisterUser = () => (
  <div className="formViewContainer">
    <RegisterForm />
    <h2>Onko sinulla jo tili?</h2>
    <p>
      Jos on, <Link to="/login">kirjaudu sisään</Link>.
    </p>
  </div>
)

export default RegisterUser
