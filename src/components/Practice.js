import { useNavigate } from 'react-router-dom'

// import Courses from './Courses'
import Accordion from './Accordion'
import '../css/Practice.css'

const Practice = () => {
  const navigate = useNavigate()

  return (
    <div className="practiceContainer">
      {/* <h2>Omat treenit</h2>
      <p>
        Et ole kirjautuneena sisään. Jos haluat treenin jäävän muistiin,
        kirjaudu sisään. Jos sinulla ei vielä ole tiliä, rekisteröidy
        käyttäjäksi täällä.{' '}
      </p> */}
      {/* <Courses /> */}
      <Accordion title="KURSSI" />
      <Accordion title="OSA-ALUE" />
      <Accordion title="KYSYMYSTEN MÄÄRÄ" />
      {/* <Accordion title="KYSYMYKSET" /> */}
      <div className="practice2Button" onClick={() => navigate('/practice2')}>
        <p>Treenaa 2 -näkymä</p>
      </div>
    </div>
  )
}

export default Practice
