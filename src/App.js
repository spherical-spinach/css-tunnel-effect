// /* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import './css/App.css'
import { initializeCards } from './reducers/cardReducer'
import Routes from './components/Routes'
import NavBar from './components/NavBar'
import SideDrawer from './components/SideDrawer'
import BackDrop from './components/BackDrop'

const App = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeCards())
  }, [dispatch])

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen)
  }

  const backDropClickHandler = () => {
    setSideDrawerOpen(false)
  }

  return (
    <Router>
      <NavBar
        hamburgerIsOpen={sideDrawerOpen}
        drawerToggleClickHandler={drawerToggleClickHandler}
      />
      <SideDrawer
        show={sideDrawerOpen}
        drawerToggleClickHandler={drawerToggleClickHandler}
      />
      {sideDrawerOpen && (
        <BackDrop backDropClickHandler={backDropClickHandler} />
      )}
      <div className="appContainer">
        <Routes />
        <div className="footer">
          <i>Pääsykoetreenit.fi</i>
        </div>
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
