import { React, useEffect } from 'react'
// import LoginForm from './components/LoginForm'
import Cards from './components/Cards'
import Courses from './components/Courses'
import logo from './images/logopohja.jpg'


import { initializeCards } from './reducers/cardReducer'
import { useDispatch } from 'react-redux'


import { loginUser } from './reducers/userReducer'
import { Table, Form, Button } from 'react-bootstrap'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useParams,
  useNavigate,
} from "react-router-dom"

const Home = () => {
  return (
  <div> 
    <h2>Pääsykoetreenit</h2> 
    <p><Link to="/login">Kirjaudu sisään</Link> tai <Link to="/courses">aloita harjoittelu</Link> kirjautumatta.</p> 
    <img src={logo} alt="logo" width="200" height="200"></img>
    <Courses></Courses>

  </div>
  )
} 

const Practice = () => {
  return (
  <div> 
    <h2>Omat treenit</h2> 
    <p>Et ole kirjautuneena sisään. Jos haluat treenin jäävän muistiin, kirjaudu sisään. Jos sinulla ei vielä ole tiliä, rekisteröidy käyttäjäksi täällä. </p>
    <Courses></Courses>
  </div>
  )
} 

const Revise = () => {
  return (
  <div> 
    <h2>Omat treenit</h2> 
    <p>Et ole kirjautunut sisään. Kirjaudu sisään tai rekisteröidy saadaksesi kerrattavaa.</p>
  </div>
  )
} 

const LoginForm = (props) => {
  const dispatch = useDispatch()

  const addUser = async (event) => {
    event.preventDefault()
    const username = event.target.username.value
    event.target.username.value = ''
    const password = event.target.password.value
    event.target.password.value = ''
    dispatch(loginUser(username, password))
  }
  return (
    <div>
      <form onSubmit={addUser}>
        <Form.Group>
          <Form.Label>käyttäjätunnus tai sähköposti:</Form.Label>
            <Form.Control
              type="text"
              name="username"
            />
          <Form.Label>salasana:</Form.Label>
            <Form.Control
              type="password"
              name="password"
            />
          <Button type="submit">
              kirjaudu
            </Button>
        </Form.Group>

      </form>
   </div>
 )
}

const Login = (props) => {
  const navigate = useNavigate()

  const onSubmit = (event) => {
    event.preventDefault()
    props.onLogin('mluukkai')
    navigate('/')
  }

  return (
    <div>
      <h2>Kirjaudu</h2>
      <LoginForm />
    </div>
  )
}





const RegisterForm = (props) => {
  const dispatch = useDispatch()

  const addUser = async (event) => {
    event.preventDefault()
    const username = event.target.username.value
    event.target.username.value = ''
    const password = event.target.password.value
    event.target.password.value = ''
    dispatch(loginUser(username, password))
  }
  return (
    <div>
      <form onSubmit={addUser}>
        <Form.Group>
          <Form.Label>käyttäjätunnus:</Form.Label>
            <Form.Control
              type="text"
              name="username"
            />
          <Form.Label>sähköposti:</Form.Label>
            <Form.Control
              type="text"
              name="username"
            />
          <Form.Label>salasana:</Form.Label>
            <Form.Control
              type="password"
              name="password"
            />
          <Form.Label>anna salasana uudelleen:</Form.Label>
            <Form.Control
              type="password"
              name="password"
            />
          <Button type="submit">
              Rekisteröi käyttäjä
            </Button>
        </Form.Group>

      </form>
   </div>
 )
}

const RegisterUser = (props) => {
  const navigate = useNavigate()

  const onSubmit = (event) => {
    event.preventDefault()
    props.onLogin('mluukkai')
    navigate('/')
  }

  return (
    <div>

      <h2>Luo uusi käyttäjä</h2>
      <p>Jos sinulla on jo tili, <Link to="/login">kirjaudu sisään</Link>.</p>
      <RegisterForm />
    </div>
  )
}

const App = () => {
  const padding = {
    padding: 20
  }
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeCards()) 
  },[dispatch]) 

  return (
    <Router>
      <div>
        <Link style={padding} to="/">koti</Link>
        <Link style={padding} to="/practice">treenaa</Link>
        <Link style={padding} to="/Revise">kertaa</Link>
        <Link style={padding} to="/login">kirjautuminen</Link>
        <Link style={padding} to="/register">luo tili</Link>
        {/* <Link style={padding} to="/cards">cards</Link> */}
        {/* {user
          ? <em>{user} logged in</em>
          : <Link style={padding} to="/login">login</Link>
        } */}
      </div>

      <Routes>
        <Route path="/cards" element={<Cards />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/revise" element={<Revise />} />
        <Route path="/register" element={<RegisterUser />} />


      </Routes>

      <div>
        <i>Pääsykoetreenit.fi</i>
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