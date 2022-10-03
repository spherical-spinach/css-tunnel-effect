import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './components/rootComponents/App'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
