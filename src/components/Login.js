import { useSelector } from 'react-redux'
import { selectUser } from '../reducers/userReducer'

import LoginForm from './LoginForm'
import Logout from './Logout'

const Login = () => {
  const user = useSelector(selectUser)
  return <div>{user ? <Logout /> : <LoginForm />}</div>
}

export default Login
