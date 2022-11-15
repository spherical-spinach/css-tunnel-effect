import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Hamburger from 'hamburger-react'
import { selectUser } from '../../../reducers/userReducer'

import '../../../css/NavBar.css'
import logo from '../../../images/pkt-logo.png'

const NavBar = ({ hamburgerIsOpen, drawerToggleClickHandler }) => {
  const navigate = useNavigate()
  const user = useSelector(selectUser)

  return (
    <div className="NavBar">
      <div
        className="HamburgerMenu"
        onClick={drawerToggleClickHandler}
        onKeyPress={drawerToggleClickHandler}
        role="button"
        tabIndex={0}
      >
        <Hamburger toggled={hamburgerIsOpen} />
      </div>
      <div className="NavBarItemsContainer">
        <Link className="NavBarItem" to="/">
          aloita
        </Link>
        <Link className="NavBarItem" to="/practice">
          treenaa
        </Link>
        <Link className="NavBarItem" to="/practiceSelection">
          treenaa-uusi
        </Link>
        <Link className="NavBarItem" to="/login">
          {user ? 'kirjaudu ulos' : 'kirjaudu sisään'}
        </Link>
        {user ? (
          <Link className="NavBarItem" to="/userView">
            {user?.username}
          </Link>
        ) : (
          <Link className="NavBarItem" to="/register">
            luo tili
          </Link>
        )}
      </div>
      <div
        className="logoContainer"
        onClick={() => navigate('/')}
        onKeyPress={() => navigate('/')}
        role="button"
        tabIndex={0}
      >
        <img className="logo" src={logo} alt="logo" />
      </div>
    </div>
  )
}

export default NavBar
