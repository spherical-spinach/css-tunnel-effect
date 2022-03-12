import { Link } from 'react-router-dom'

const NavBar = () => {
  const padding = {
    padding: 20,
  }
  return (
    <div>
      <Link style={padding} to="/">
        koti
      </Link>
      <Link style={padding} to="/practice">
        treenaa
      </Link>
      <Link style={padding} to="/Revise">
        kertaa
      </Link>
      <Link style={padding} to="/login">
        kirjautuminen
      </Link>
      <Link style={padding} to="/register">
        luo tili
      </Link>
      {/* <Link style={padding} to="/cards">cards</Link> */}
      {/* {user
          ? <em>{user} logged in</em>
          : <Link style={padding} to="/login">login</Link>
        } */}
    </div>
  )
}

export default NavBar
