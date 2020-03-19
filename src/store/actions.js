// Action
// Action is just an object of two keys type and payload
import axios from 'axios'
import {
  ADD_ONE,
  MINUS_ONE,
  CHANGE_COLOR,
  CHANGE_NAME,
  CHANGE_MODE,
  SELECT_BOOK,
  FETCH_COUNTRIES,
  CHANGE_FONTSIZE
} from './types'

export const addOne = () => ({
  type: ADD_ONE
})

export const minusOne = () => ({
  type: MINUS_ONE
})

export const changeName = () => ({
  type: CHANGE_NAME
})

export const changeBackgroundColor = () => ({
  type: CHANGE_COLOR
})

export const selectBook = index => ({
  type: SELECT_BOOK,
  payload: {
    index: index
  }
})

// export const fetchCountries = () => {
//   return dispatch => {
//     const url = 'https://restcountries.eu/rest/v2/all'
//     fetch(url)
//       .then(response => response.json())
//       .then(data => {
//         console.log(data)
//         dispatch({
//           type: FETCH_COUNTRIES,
//           payload: {
//             countries: data
//           }
//         })
//       })
//   }
// }

// export const fetchCountries = () => {
//   return dispatch => {
//     const url = 'https://restcountries.eu/rest/v2/all'
//     const response = axios.get(url).then(response => {
//       dispatch({
//         type: FETCH_COUNTRIES,
//         payload: {
//           countries: response.data
//         }
//       })
//     })
//   }
// }

export const fetchCountries = () => {
  return async dispatch => {
    const url = 'https://restcountries.eu/rest/v2/all'
    const response = await axios.get(url)
    const data = await response.data
    dispatch({
      type: FETCH_COUNTRIES,
      payload: {
        countries: data
      }
    })
  }
}



export const changeFontSize = () => ({
  type: CHANGE_FONTSIZE
})
export const changeMode = () => ({
  type: CHANGE_MODE
})
