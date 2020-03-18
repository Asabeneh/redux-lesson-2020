import { combineReducers } from 'redux'
import booksReducer from './book-reducer'
import operationReducer from './operation-reducer'
import countriesReducer from './countries-reducer'

const allReducer = combineReducers({
  operations: operationReducer,
  books: booksReducer,
  countries: countriesReducer
})

export default allReducer
