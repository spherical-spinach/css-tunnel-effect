import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../../../css/SideDrawer.css'
import { selectUser } from '../../../reducers/userReducer'

const SideDrawer = ({ show, drawerToggleClickHandler }) => {
  const user = useSelector(selectUser)

  let drawerClasses = 'sideDrawer'
  if (show) {
    drawerClasses = 'sideDrawer open'
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <Link to="/" onClick={drawerToggleClickHandler}>
            koti
          </Link>
        </li>
        <li>
          <Link to="/practice" onClick={drawerToggleClickHandler}>
            treenaa
          </Link>
        </li>
        <li>
          <Link to="/login" onClick={drawerToggleClickHandler}>
            {user ? 'kirjaudu ulos' : 'kirjaudu sisään'}
          </Link>
        </li>
        <li>
          {user ? (
            <Link to="/userView" onClick={drawerToggleClickHandler}>
              {user?.username}
            </Link>
          ) : (
            <Link to="/register" onClick={drawerToggleClickHandler}>
              luo tili
            </Link>
          )}
        </li>
      </ul>
    </nav>
  )
}

export default SideDrawer
