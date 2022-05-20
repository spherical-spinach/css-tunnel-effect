// /* eslint-disable no-unused-vars */

//commented parts are a reference for getting data
//from Redux-store

import { useEffect, useState } from 'react'
import {
  useDispatch,
  // useStore,
  // useSelector
} from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import './css/App.css'
import { initializeQuestions } from './reducers/questionReducer'
import { initializeCourses } from './reducers/courseReducer'
import { initializeParts } from './reducers/partReducer'
import Routes from './components/Routes'
import NavBar from './components/NavBar'
import SideDrawer from './components/SideDrawer'
import BackDrop from './components/BackDrop'

const App = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)
  // const store = useStore()
  const dispatch = useDispatch()
  useEffect(async () => {
    await dispatch(initializeCourses())
    // console.log('tässä store: ', store.getState())
  }, [dispatch])
  useEffect(async () => {
    await dispatch(initializeQuestions())
    // console.log('tässä store: ', store.getState())
  }, [dispatch])
  useEffect(async () => {
    await dispatch(initializeParts())
    // console.log('tässä store: ', store.getState())
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
          <i>paasykoetreenit.fi</i>
        </div>
      </div>
    </Router>
  )
}

export default App
