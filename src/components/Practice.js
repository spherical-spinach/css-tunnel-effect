import { useNavigate } from 'react-router-dom'

// import Courses from './Courses'
import Accordion from './Accordion'
import '../css/Practice.css'

const Practice = () => {
  const navigate = useNavigate()

  return (
    <div className="practiceContainer">
      <Accordion title="KURSSI" />
      <Accordion title="OSA-ALUE" />
      <Accordion title="KYSYMYSTEN MÄÄRÄ" />
      {/* <Accordion title="KYSYMYKSET" /> */}
      <div
        className="practice2Button"
        onClick={() => navigate('/practice2')}
        onKeyPress={() => navigate('/practice2')}
        role="button"
        tabIndex={0}
      >
        <p>Treenaa 2 -näkymä</p>
      </div>
    </div>
  )
}

export default Practice
