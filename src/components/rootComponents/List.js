import { Link } from 'react-router-dom'
import '../../css/Home.css'

const List = () => (
  <div className="content-container">
    <h2 className="header">List of Dark Patterns</h2>
    <div className="horizontal-line" />
    <div className="home-list-item">
      <div className="arrow-right" />
      <Link to="/trickWording">Trick wording</Link>{' '}
    </div>
  </div>
)

export default List
