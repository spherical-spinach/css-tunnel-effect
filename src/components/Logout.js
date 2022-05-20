import { logoutUser, selectUser } from '../reducers/userReducer'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'



const Logout = () => {
  const user = useSelector(selectUser)

  const dispatch = useDispatch()
  const handleLogout = event => {
    event.preventDefault()
    dispatch(logoutUser())
  }
  
  return (
    <div className='logout'>
      <h1>Tervetuloa <span>{user.username}</span> </h1>
      <button onClick= {handleLogout}>Logout</button>
    </div>
  )
}

export default Logout