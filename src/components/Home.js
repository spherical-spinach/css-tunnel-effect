import { Link, useNavigate } from 'react-router-dom'
import '../css/Home.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../reducers/userReducer'

const Home = () => {
  const navigate = useNavigate()
  const user = useSelector(selectUser)
  console.log(user)

  const loggedIn = 
    user !== null
      ? true
      : false

  const username =
    loggedIn === true
      ? user.username
      : 'joku muu'


  return (
    <div className="homeContainer">
      <h2 className="header">PÄÄSYKOETREENIT</h2>
      {loggedIn ? (
        <h4 className="subHeader">
          Olet kirjautunut sisään käyttäjänimellä {username}
        </h4>
      ) : (
        <h4 className="subHeader">
          <Link to="/login">Kirjaudu sisään</Link> tai{' '}
          <Link to="/courses">aloita harjoittelu</Link> kirjautumatta.
        </h4>
      )}
      <div className="middleButton" onClick={() => navigate('/practice')}>
        <h1 className="middleButtonText">Aloita harjoittelu</h1>
      </div>
      {!loggedIn && (
        <h4 className="bottomText">
          Eikö sinulla ole tunnusta? <Link to="/register">Rekisteröidy</Link>
        </h4>
      )}
    </div>
  )
}

export default Home
