import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logoutUser, selectUser } from '../reducers/userReducer'

const Logout = () => {
  const user = useSelector(selectUser)
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const handleLogout = event => {
    event.preventDefault()
    dispatch(logoutUser())
    navigate('/')
  }
  return (
    <div className="logout">
      <h1>
        Olet kirjautunut sisään nimellä:
        <span>{user?.username}</span>{' '}
      </h1>
      <button
        type="button"
        onClick={handleLogout}
        onKeyPress={handleLogout}
        tabIndex={0}
      >
        Logout
      </button>
    </div>
  )
}

export default Logout
