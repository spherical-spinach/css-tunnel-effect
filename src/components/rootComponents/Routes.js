import { Route, Routes as RouterRoutes } from 'react-router-dom'

import Main from './Main'
import TrickWordingMain from '../trickWording/TrickWordingMain'
import Notification from '../general/Notification'

const Routes = () => (
  <div className="routes-container">
    <Notification />
    <RouterRoutes>
      <Route path="/" element={<Main />} />
      <Route path="/dark-patterns-demo" element={<Main />} />
      <Route path="/trickWording" element={<TrickWordingMain />} />
    </RouterRoutes>
  </div>
)

export default Routes
