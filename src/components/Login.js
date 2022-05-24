import { useNavigate } from 'react-router-dom'
import LoginForm from './LoginForm'
import Logout from './Logout'
import { useSelector } from 'react-redux'
import { selectUser } from '../reducers/userReducer'

const Login = props => {
  const navigate = useNavigate()
  const user = useSelector(selectUser)

  // eslint-disable-next-line no-unused-vars
  const onSubmit = event => {
    event.preventDefault()
    props.onLogin('mluukkai')
    navigate('/')
  }

  return <div>{user ? <Logout /> : <LoginForm />}</div>
}

export default Login
