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
            koti
          </Link>
        </li>
        <li>
          <Link to="/practice" onClick={drawerToggleClickHandler}>
            treenaa
          </Link>
        </li>
        <li>
          <Link to="/Revise" onClick={drawerToggleClickHandler}>
            kertaa
          </Link>
        </li>
        <li>
          <Link to="/login" onClick={drawerToggleClickHandler}>
            kirjautuminen
          </Link>
        </li>
        <li>
          <Link to="/register" onClick={drawerToggleClickHandler}>
            luo tili
          </Link>
        </li>
        <li>
          <Link to="/practice" onClick={drawerToggleClickHandler}>
            treenaa
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default SideDrawer
