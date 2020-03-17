import React, { Component } from 'react'

import { connect } from 'react-redux'
import {
  addOne,
  minusOne,
  changeName,
  changeBackgroundColor
} from './store/actions'

import './App.css'

class App extends Component {
  render() {
    console.log('lets see the props', this.props)

    return (
      <div className='App' style={{ background: this.props.color }}>
        <h1>Redux Lesson</h1>
        <h2>{this.props.count}</h2>
        <h2>{this.props.name}</h2>
        <button onClick={this.props.addOne}>Add One</button>
        <button onClick={this.props.minusOne}>Minus One</button>
        <button onClick={() => this.props.changeName('David')}>
          Change Name
        </button>
        <button onClick={() => this.props.changeBackgroundColor()}>
          Change background
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  count: state.count,
  name: state.name,
  color: state.color
})
// const mapActionToProps = dispatch => ({
//   addOne: () => dispatch(addOne),
//   minusOne: () => dispatch(minusOne),
//   changeName: () => dispatch(changeName('John'))
// })

export default connect(mapStateToProps, {
  addOne,
  minusOne,
  changeName,
  changeBackgroundColor
})(App)
// Action
export const addOne = () => ({
  type: 'ADD_ONE'
})
export const minusOne = () => ({
  type: 'MINUS_ONE'
})

export const changeName = newName => {
  return {
    type: 'CHANGE_NAME',
    payload: {
      name: newName
    }
  }
}

export const changeBackgroundColor = () => ({
  type: 'CHANGE_COLOR'
})

const initialState = {
  count: 0,
  name: 'Asabeneh',
  color: '#764abc'
}
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ONE':
      return { ...state, count: state.count + 1 }
    case 'MINUS_ONE':
      return { ...state, count: state.count - 1 }

    case 'CHANGE_NAME':
      const name = state.name === 'Asabeneh' ? action.payload.name : 'Asabeneh'
      return { ...state, name }
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
// To get started redux we need the following packages
// redux
// react-redux

// creating store
const store = createStore(reducer)