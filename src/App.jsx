// /* eslint-disable no-unused-vars */

import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import './css/App.css'
import Routes from './Routes'
import NavBar from './navigation/NavBar'
import SideDrawer from './navigation/SideDrawer'
import BackDrop from './navigation/BackDrop'
import Footer from './Footer'

const App = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen)
  }

  const backDropClickHandler = () => {
    setSideDrawerOpen(false)
  }

  return (
    <Router>
      <div className="app-container">
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
        <Routes />
        <Footer />
      </div>
    </Router>
  )
}

export default App
