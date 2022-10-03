import { Route, Routes as RouterRoutes } from 'react-router-dom'

import Home from './Home'
import Login from '../login/Login'
import Practice from '../practice/Practice'
import RegisterUser from '../register/RegisterUser'
import Practice2 from '../practice/Practice2'
import UserView from '../login/UserView'
import Notification from '../general/Notification'
import AddQuestions from '../createCourse/AddQuestions'

const Routes = () => (
  <div className="contentContainer">
    <Notification />
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/practice" element={<Practice />} />
      <Route path="/practice2" element={<Practice2 />} />
      <Route path="/register" element={<RegisterUser />} />
      <Route path="/userView" element={<UserView />} />
      <Route path="/addQuestions" element={<AddQuestions />} />
    </RouterRoutes>
  </div>
)

export default Routes
