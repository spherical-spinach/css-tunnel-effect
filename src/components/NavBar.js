import { Link, useNavigate } from 'react-router-dom'
import Hamburger from 'hamburger-react'

import '../css/NavBar.css'
import logo from '../images/logopohja.jpg'

import { useSelector } from 'react-redux'
import { selectUser } from '../reducers/userReducer'

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
          koti
        </Link>
        <Link className="NavBarItem" to="/practice">
          treenaa
        </Link>
        {/* <Link className="NavBarItem" to="/Revise">
          kertaa
        </Link> */}

        <Link className="NavBarItem" to="/login">
          {user ? 'kirjaudu ulos' : 'kirjaudu sisään'}
        </Link>
        {user ? (
          <span className="NavBarItemUser">{user.username}</span>
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
