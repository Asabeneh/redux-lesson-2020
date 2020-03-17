// Action
// Action is just an object of two keys type and payload

export const addOne = {
  type: 'ADD_ONE'
}

export const minusOne = {
  type: 'MINUS_ONE'
}

export const changeName = {
  type: 'CHANGE_NAME'
  // payload: {
  //   name: newName
  // }
}
export const changeBackgroundColor = {
  type: 'CHANGE_COLOR'
}

export const getBooks = {
  type: 'GET_BOOKS'
}

export const selectBook = index => ({
  type: 'SELECT_BOOK',
  payload: {
    index: index
  }
})
