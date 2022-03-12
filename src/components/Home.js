import { Link } from 'react-router-dom'

import logo from '../images/logopohja.jpg'
import Courses from './Courses'

const Home = () => {
  return (
    <div>
      <h2>Pääsykoetreenit</h2>
      <p>
        <Link to="/login">Kirjaudu sisään</Link> tai{' '}
        <Link to="/courses">aloita harjoittelu</Link> kirjautumatta.
      </p>
      <img src={logo} alt="logo" width="200" height="200"></img>
      <Courses></Courses>
    </div>
  )
}

export default Home
