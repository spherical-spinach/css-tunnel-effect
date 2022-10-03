import { useSelector } from 'react-redux'
import { selectUser } from '../../reducers/userReducer'

import LoginForm from './LoginForm'
import Logout from './Logout'

const Login = () => {
  const user = useSelector(selectUser)
  if (user) {
    return <Logout />
  }
  return <LoginForm />
}

export default Login
