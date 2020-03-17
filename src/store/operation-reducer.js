// this reducer, which is just a function which takes to parameter: state and action

const initialState = {
  count: 0,
  name: 'Asabeneh',
  color: '#764abc'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ONE':
      return { ...state, count: state.count + 1 }
    case 'MINUS_ONE':
      return { ...state, count: state.count - 1 }
    case 'CHANGE_NAME':
      const name = state.name === 'Asabeneh' ? 'David' : 'Asabeneh'
      return { ...state, name: name }
    case 'CHANGE_COLOR':
      const colors = [
        'blue',
        '#fa383e',
        '#606770',
        'orange',
        '#00a400',
        'purple',
        '#54c7ec',
        'salmon',
        '#ffba00'
      ]
      const index = Math.floor(Math.random() * colors.length)
      const color = colors[index]
      return { ...state, color }

    default:
      return state
  }
}

export default reducer
