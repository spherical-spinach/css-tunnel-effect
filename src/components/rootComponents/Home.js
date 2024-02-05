import { Link } from 'react-router-dom'
import '../../css/Home.css'
import '../../css/HomeNew.css'

const Home = () => (
  <div className="homeViewContainer">
    <div className="homeContainer">
      <h2 className="header">List of dark patterns</h2>
      <Link to="/">Trick wording</Link>{' '}
    </div>
  </div>
)

export default Home
