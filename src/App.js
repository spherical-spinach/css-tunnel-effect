import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import { initializeCards } from './reducers/cardReducer'
import Routes from './components/Routes'
import NavBar from './components/NavBar'
import './css/App.css'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeCards())
  }, [dispatch])

  return (
    <Router>
      <NavBar />
      <Routes />
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
