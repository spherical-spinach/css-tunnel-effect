import { Link, useNavigate } from 'react-router-dom'
import '../../css/Home.css'
import '../../css/HomeNew.css'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="homeViewContainer">
      <div className="homeContainer">
        <h2 className="header">List of dark patterns</h2>

        <div className="homeListItemContainer">
          <div className="arrow-right" />
          <Link to="/login">Trick wording</Link>{' '}
          <div
            className="startButton"
            onClick={() => navigate('/practice')}
            onKeyPress={() => navigate('/practice')}
            role="button"
            tabIndex={0}
          >
            <h1 className="startButtonText">button</h1>
          </div>
        </div>
        <div>
          <p className="highlightedText"> classname highlightedText</p>
        </div>
      </div>
    </div>
  )
}

export default Home
