import { Link } from 'react-router-dom'
import '../css/SideDrawer.css'

const SideDrawer = ({ show, drawerToggleClickHandler }) => {
  let drawerClasses = 'sideDrawer'
  if (show) {
    drawerClasses = 'sideDrawer open'
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <Link to="/" onClick={drawerToggleClickHandler}>
            LIST
          </Link>
        </li>
        <li>
          <Link to="/" onClick={drawerToggleClickHandler}>
            ABOUT
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default SideDrawer
