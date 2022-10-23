import { render } from 'preact'
import { Provider } from 'react-redux'
import { App } from './app'
import './index.scss'
import store from './store'

render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app'))
