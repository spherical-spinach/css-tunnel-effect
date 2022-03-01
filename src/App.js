import { React, useEffect } from 'react'
import NewCard from './components/NewCard'
import LoginForm from './components/LoginForm'
import Togglable from './components/Togglable'
import Cards from './components/Cards'
import Courses from './components/Courses'
import Footer from './components/Footer'
import logo from './images/logopohja.jpg'


import { initializeCards } from './reducers/cardReducer'
import { useDispatch } from 'react-redux'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useParams,
  useNavigate,
} from "react-router-dom"

const Home = () => (
  <div> 
    <h2>Pääsykoetreenit</h2> 
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> 
    <img src={logo} alt="logo" width="200" height="200"></img>
  </div>

)



const App = () => {
  const padding = {
    padding: 5
  }
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeCards()) 
  },[dispatch]) 
  return (
    <Router>
      <div>
        <Link style={padding} to="/">home</Link>
        <Link style={padding} to="/cards">cards</Link>
        <Link style={padding} to="/courses">courses</Link>
      </div>

      <Routes>
        <Route path="/cards" element={<Cards />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/" element={<Home />} />
      </Routes>

      <div>
        <i>Note app, Department of Computer Science 2022</i>
      </div>
    </Router>
  )
}

export default App


// return (
//   <div>
//     <h2>Login</h2>
//     <LoginForm />
//     <h1>Kysymykset</h1> 
//     <Cards  />
//     <h3>Lisää uusi kysymys</h3>
//     <NewCard />
//     <Footer></Footer>
//  </div>
// )