// this reducer, which is just a function which takes to parameter: state and action
import {
  ADD_ONE,
  MINUS_ONE,
  CHANGE_COLOR,
  CHANGE_NAME,
  CHANGE_MODE,
  CHANGE_FONTSIZE
} from './types'

const initialState = {
  count: 0,
  name: 'Asabeneh',
  color: '#764abc',
  mode: 'day',
  currentMode: {
    backgroundColor: '#764abc'
  },
  fontSize: 16
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ONE:
      return { ...state, count: state.count + 1 }
    case MINUS_ONE:
      return { ...state, count: state.count - 1 }
    case CHANGE_NAME:
      const name = state.name === 'Asabeneh' ? 'David' : 'Asabeneh'
      return { ...state, name: name }
    case CHANGE_MODE:
      const night = {
        backgroundColor: '#181818',
        color: 'white'
      }
      const day = {
        backgroundColor: 'white',
        color: '#212121'
      }

      const mode = state.mode === 'day' ? 'night' : 'day'
      const currentMode = state.mode === 'day' ? night : day
      console.log({ ...state, mode, currentMode })
      return { ...state, mode, currentMode }
    case CHANGE_FONTSIZE:
      let fontSize
      if (state.fontSize < 32) {
        fontSize = state.fontSize + 1
      } else {
        fontSize = 16
      }
      return { ...state, fontSize }
    case CHANGE_COLOR:
      const colors = [
        'blue',
        '#fa383e',
        '#606770',
        'orange',
        '#00a400',
        'purple',
        '#54c7ec',
        'salmon',
        '#ffba00',
        '#ff8928',
        '#ffde22',
        '#ff414e',
        '#101357'
      ]
      const index = Math.floor(Math.random() * colors.length)
      const color = colors[index]
      return { ...state, color }

    default:
      return state
  }
}

export default reducer
