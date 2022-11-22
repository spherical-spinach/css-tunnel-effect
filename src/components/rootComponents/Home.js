import { Link, useNavigate } from 'react-router-dom'
import '../../css/Home.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../../reducers/userReducer'
import varjovalmennuslogo from '../../images/varjovalmennuslogo.png'

const Home = () => {
  const navigate = useNavigate()
  const user = useSelector(selectUser)
  const courses = useSelector(state => state.courses)

  return (
    <div className="homeViewContainer">
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
          className="startButton"
          onClick={() => navigate('/practice')}
          onKeyPress={() => navigate('/practice')}
          role="button"
          tabIndex={0}
        >
          <h1 className="startButtonText">TREENAA</h1>
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
      <div className="coursesContainer">
        {courses.map(course => (
          <div
            className="courseButton"
            key={course.id}
            role="button"
            tabIndex={0}
          >
            <h2 className="courseButtonText">{course.name}</h2>
          </div>
        ))}
      </div>
      <div className="coursesContainer">
        <h2 className="subHeader">YHTEISTYÖSSÄ VARJOVALMENNUS</h2>
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
