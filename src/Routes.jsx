import { Route, Routes as RouterRoutes } from 'react-router-dom'

import Home from './Home'
import TrickWordingMain from './TrickWordingMain'

const Routes = () => (
  <div className="routes-container">
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/css-tunnel-effect" element={<Home />} />
      <Route path="/trickWording" element={<TrickWordingMain />} />
    </RouterRoutes>
  </div>
)

export default Routes
