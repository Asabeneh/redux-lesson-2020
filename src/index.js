import React from 'react'
import ReactDOM from 'react-dom'

// it allows us to create a store
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import allReducer from './store/all-reducers'
import App from './App'

const allEnhancers = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(allReducer, allEnhancers)

ReactDOM.render(
  <Provider store={store}>
    <App title='Redux Lesson' />
  </Provider>,
  document.getElementById('root')
)
