import { Link } from 'react-router-dom'
import '../../css/Home.css'
import '../../css/HomeNew.css'

const Home = () => (
  <div className="homeViewContainer">
    <div className="homeContainer">
      <h2 className="header">List of Dark Patterns</h2>
      <div className="horizontalLine" />
      <div className="homeListItem">
        <div className="arrowRight" />
        <Link to="/">Trick wording</Link>{' '}
      </div>
    </div>
  </div>
)

export default Home
