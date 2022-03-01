import { useDispatch } from 'react-redux'
import { loginUser } from '../reducers/userReducer'

const LoginForm = (props) => {
  const dispatch = useDispatch()

  const addUser = async (event) => {
    event.preventDefault()
    const username = event.target.username.value
    event.target.username.value = ''
    const password = event.target.password.value
    event.target.password.value = ''
    dispatch(loginUser(username, password))
  }
  return (
    <div>
      <form onSubmit={addUser}>
        <div>
          username: <input name='username'>
          </input>
        </div>
        <div>
          password: <input name="password"t>
          </input>
        </div>

        <button type="submit">login</button>
      </form>
   </div>
 )
}

export default LoginForm