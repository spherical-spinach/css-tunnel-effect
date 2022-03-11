import React from 'react'
import { Route, Routes as RouterRoutes } from 'react-router-dom'

import Cards from './Cards'
import Courses from './Courses'
import Home from './Home'
import Login from './Login'
import Practice from './Practice'
import Revise from './Revise'
import RegisterUser from './RegisterUser'

const Routes = () => {
  return (
    <div>
      <RouterRoutes>
        <Route path="/cards" element={<Cards />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/revise" element={<Revise />} />
        <Route path="/register" element={<RegisterUser />} />
      </RouterRoutes>
    </div>
  )
}

export default Routes
