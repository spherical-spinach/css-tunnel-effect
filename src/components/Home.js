import { Link } from 'react-router-dom'

import '../css/Home.css'

const Home = () => {
  return (
    <div className="homeContainer">
      <h2 className="header">PÄÄSYKOETREENIT</h2>
      <h4 className="subHeader">
        <Link to="/login">Kirjaudu sisään</Link> tai{' '}
        <Link to="/courses">aloita harjoittelu</Link> kirjautumatta.
      </h4>
      <div className="middleButton" onClick={() => console.log('moro!')}>
        <h1 className="middleButtonText">Aloita harjoittelu</h1>
      </div>
      <h4 className="bottomText">
        Eikö sinulla ole tunnusta? <Link to="/register">Rekisteröidy</Link>
      </h4>
    </div>
  )
}

export default Home
