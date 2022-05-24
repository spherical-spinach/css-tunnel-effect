import { Route, Routes as RouterRoutes } from 'react-router-dom'

import Questions from './Question'
import Courses from './Courses'
import Home from './Home'
import Login from './Login'
import Practice from './Practice'
import Revise from './Revise'
import RegisterUser from './RegisterUser'
import Practice2 from './Practice2'

const Routes = () => {
  return (
    <div className="contentContainer">
      <RouterRoutes>
        <Route path="/questions" element={<Questions />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/practice2" element={<Practice2 />} />
        <Route path="/revise" element={<Revise />} />
        <Route path="/register" element={<RegisterUser />} />
      </RouterRoutes>
    </div>
  )
}

export default Routes
