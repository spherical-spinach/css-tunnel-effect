import { Link, useNavigate } from 'react-router-dom'
import '../css/Home.css'

const Home = () => {
  const navigate = useNavigate()
  //this is a cheap mock-login functionality!
  //be sure to delete this later when
  //implementing actual login functionality!
  const loggedIn = false
  const username = 'Amelia'

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
