import { BOOKS } from '../data/books'

const initialState = {
  books: BOOKS,
  selectedBook: null
}

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_BOOKS':
      return [...state]
    case 'SELECT_BOOK':
      return { ...state, selectedBook: state.books[action.payload.index] }
    default:
      return state
  }
}

export default bookReducer
