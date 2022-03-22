import { Link, useNavigate } from 'react-router-dom'
import Hamburger from 'hamburger-react'

import '../css/NavBar.css'
import logo from '../images/logopohja.jpg'

const NavBar = ({ hamburgerIsOpen, drawerToggleClickHandler }) => {
  const navigate = useNavigate()

  return (
    <div className="NavBar">
      <div className="HamburgerMenu" onClick={drawerToggleClickHandler}>
        <Hamburger toggled={hamburgerIsOpen} />
      </div>
      <div className="NavBarItemsContainer">
        <Link className="NavBarItem" to="/">
          koti
        </Link>
        <Link className="NavBarItem" to="/practice">
          treenaa
        </Link>
        <Link className="NavBarItem" to="/Revise">
          kertaa
        </Link>
        <Link className="NavBarItem" to="/login">
          kirjautuminen
        </Link>
        <Link className="NavBarItem" to="/register">
          luo tili
        </Link>
        {/* <Link className="NavBarItem" to="/cards">cards</Link> */}
        {/* {user
          ? <em>{user} logged in</em>
          : <Link className="NavBarItem" to="/login">login</Link>
        } */}
      </div>
      <div className="logoContainer" onClick={() => navigate('/')}>
        <img className="logo" src={logo} alt="logo" />
      </div>
    </div>
  )
}

export default NavBar
