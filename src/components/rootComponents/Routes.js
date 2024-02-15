import { Route, Routes as RouterRoutes } from 'react-router-dom'

import List from './List'
import TrickWordingMain from '../trickWording/TrickWordingMain'
import Notification from '../general/Notification'

const Routes = () => (
  <div className="routes-container">
    <Notification />
    <RouterRoutes>
      <Route path="/" element={<List />} />
      <Route path="/trickWording" element={<TrickWordingMain />} />
    </RouterRoutes>
  </div>
)

export default Routes
