import { Link, useNavigate } from 'react-router-dom'
import '../css/Home.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../reducers/userReducer'

const Home = () => {
  const navigate = useNavigate()
  const user = useSelector(selectUser)

  return (
    <div className="homeContainer">
      <h2 className="header">PÄÄSYKOETREENIT</h2>
      {user ? (
        <h4 className="subHeader">
          Olet kirjautunut sisään käyttäjänimellä
          {user.username}
        </h4>
      ) : (
        <h4 className="subHeader">
          <Link to="/login">Kirjaudu sisään</Link>
          tai aloita harjoittelu:
        </h4>
      )}
      <div
        className="middleButton"
        onClick={() => navigate('/practice')}
        onKeyPress={() => navigate('/practice')}
        role="button"
        tabIndex={0}
      >
        <h1 className="middleButtonText">Aloita harjoittelu</h1>
      </div>
      {!user && (
        <h4 className="bottomText">
          Eikö sinulla ole tunnusta?
          <Link to="/register">Rekisteröidy</Link>
        </h4>
      )}
    </div>
  )
}

export default Home
