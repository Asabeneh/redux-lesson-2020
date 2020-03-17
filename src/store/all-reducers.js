import { combineReducers } from 'redux'
import bookReducer from './book-reducer'
import operationReducer from './operation-reducer'

const allReducer = combineReducers({
  operations: operationReducer,
  books: bookReducer
})

export default allReducer
