// /* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import '../../css/App.css'
import { initializeCourses } from '../../reducers/courseReducer'
import Routes from './Routes'
import NavBar from './navigation/NavBar'
import SideDrawer from './navigation/SideDrawer'
import BackDrop from './navigation/BackDrop'
import Footer from './Footer'

const App = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)
  const dispatch = useDispatch()
  useEffect(async () => {
    await dispatch(initializeCourses())
  }, [dispatch])

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen)
  }

  const backDropClickHandler = () => {
    setSideDrawerOpen(false)
  }

  return (
    <Router>
      <div className="appContainer">
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
