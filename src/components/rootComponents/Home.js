import { Link, useNavigate } from 'react-router-dom'
import '../../css/Home.css'
import '../../css/CourseSquare.css'
import { useSelector } from 'react-redux'
// import textLogo from '../../images/textLogo.png'
import { selectUser } from '../../reducers/userReducer'
import laaketiede from '../../images/laaketiede.png'

const Home = () => {
  const navigate = useNavigate()
  const user = useSelector(selectUser)

  return (
    <div>
      <div className="paasykoetreenitContainer">
        <h2 className="headerheader">PÄÄSYKOETREENIT</h2>
      </div>
      <div className="homeContainer">
        {/* <h2 className="header">PÄÄSYKOETREENIT</h2> */}
        {user ? (
          <h4 className="mainText">
            Olet kirjautunut sisään käyttäjänimellä {`'${user?.username}'`}
          </h4>
        ) : (
          <h4 className="mainText">
            <Link to="/login">Kirjaudu sisään</Link> tai aloita harjoittelu:
          </h4>
        )}
        <div
          className="middleButton"
          onClick={() => navigate('/practice')}
          onKeyPress={() => navigate('/practice')}
          role="button"
          tabIndex={0}
        >
          <h1 className="middleButtonText">ALOITA</h1>
        </div>
        {!user && (
          <p className="mainText">
            Eikö sinulla ole tunnusta? <Link to="/register">Rekisteröidy</Link>
          </p>
        )}
        {/* <div>
          <Link to="/addQuestions">Lisää kysymyksiä</Link>
        </div> */}
      </div>
      <div className="headerContainer">
        <h2 className="headerheader">KURSSIT</h2>
      </div>
      <div className="courseContainer">
        <h2 className="coursesHeader">LÄÄKETIEDE</h2>
        <img className="courseImage" src={laaketiede} alt="course" />
      </div>
    </div>
  )
}

export default Home
