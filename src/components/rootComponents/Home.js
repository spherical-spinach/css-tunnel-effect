import { Link, useNavigate } from 'react-router-dom'
import '../../css/Home.css'
import '../../css/CourseSquare.css'
import { useSelector } from 'react-redux'
// import textLogo from '../../images/textLogo.png'
import { selectUser } from '../../reducers/userReducer'
import laaketiede from '../../images/laaketiede.png'
import psykologia from '../../images/psykologia.png'
import varjovalmennuslogo from '../../images/varjovalmennuslogo.png'

const Home = () => {
  const navigate = useNavigate()
  const user = useSelector(selectUser)

  return (
    <div className="homeViewContainer">
      {/* <div className="topContainer">
        <h2 className="header">PÄÄSYKOETREENIT</h2>
      </div> */}
      <div className="homeContainer">
        <h2 className="header">PÄÄSYKOETREENIT</h2>
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
          <h1 className="middleButtonText">TREENAA</h1>
        </div>
        {user ? (
          <p className="mainText">Katso tilastot omista treeneistäsi.</p>
        ) : (
          <div>
            <p className="highlightedText">Eikö sinulla ole tunnusta? </p>
            <p className="mainText">
              <Link to="/register">Rekisteröidy</Link>, jos haluat treenisi
              jäävän talteen ja saada kerrattavaa.
            </p>
            <p className="infoText">
              Pääsykoetreenit tarjoaa ilmaisia kysymyksiä ja vastauksia
              pääsykoemateriaaleista. Lue lisää
            </p>
          </div>
        )}
        {/* <div>
          <Link to="/addQuestions">Lisää kysymyksiä</Link>
        </div> */}
        {/* <h4 className="mainText">
          Pääsykoetreenit-sivustolla saat ilmaiseksi harjoiteltavaksi kysymyksiä
          eri alojen pääsykoemateriaaleista. Lue lisää
        </h4> */}
      </div>
      <div>
        <h2 className="courses">KURSSIT</h2>
      </div>
      {/* <div>
        <img className="courseImage" src={laaketiede} alt="course" />
      </div> */}
      <div className="coursesContainer">
        <h2 className="subHeader">Lääketiede</h2>
        <img className="courseImage" src={laaketiede} alt="course" />
      </div>
      <div className="coursesContainer">
        <h2 className="subHeader">Psykologia</h2>
        <img className="courseImage" src={psykologia} alt="course" />
      </div>
      <div className="boxContainer">
        <h2 className="header">YHTEISTYÖSSÄ VARJOVALMENNUS</h2>
        <img
          className="logoImage"
          src={varjovalmennuslogo}
          alt="Varjovalmennus logo"
        />
      </div>
    </div>
  )
}

export default Home
