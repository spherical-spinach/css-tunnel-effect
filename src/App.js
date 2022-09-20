// /* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import './css/App.css'
import { initializeQuestions } from './reducers/questionReducer'
import { initializeCourses } from './reducers/courseReducer'
import { initializeParts } from './reducers/partReducer'
import Routes from './components/Routes'
import NavBar from './components/NavBar'
import SideDrawer from './components/SideDrawer'
import BackDrop from './components/BackDrop'
import Footer from './components/Footer'

const App = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)
  const dispatch = useDispatch()
  useEffect(async () => {
    await dispatch(initializeCourses())
  }, [dispatch])
  useEffect(async () => {
    await dispatch(initializeQuestions())
  }, [dispatch])
  useEffect(async () => {
    await dispatch(initializeParts())
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
