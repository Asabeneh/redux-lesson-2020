import React from 'react'
import ReactDOM from 'react-dom'

// it allows us to create a store
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import allReducer from './store/all-reducers'

import './index.css'
import App from './App'

const allEnhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension()
)

const store = createStore(allReducer, allEnhancers)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
