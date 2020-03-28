import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  addOne,
  minusOne,
  changeName,
  changeBackgroundColor,
  changeMode,
  changeFontSize,
  selectBook,
  fetchCountries
} from './store/actions'
import BookDetails from './components/BookDetails'

import './App.css'
import Country from './components/Country'

class App extends Component {
  componentDidMount() {
    this.props.fetchCountries()
  }
  render() {
    const { count, name, color, fontSize, mode } = this.props.operations
    const { books, selectedBook } = this.props.books
    const { countries } = this.props

    let styles
    if (mode === 'day') {
      styles = {
        backgroundColor: color,
        fontSize: fontSize
      }
    }

    const bookList = books.map((book, i) => (
      <li key={book.title} onClick={() => this.props.selectBook(i)}>
        {' '}
        {book.title}
      </li>
    ))
    const countriesList = countries.map(country => (
      <Country key={country.name} country={country} />
    ))

    return (
      <div className={'App ' + mode} style={styles}>
        <h1 className='title'>{this.props.title.toUpperCase()}</h1>
        <h2>{count}</h2>
        <h2>{name}</h2>
        <div className='buttons'>
          <button onClick={this.props.addOne}>Add One</button>
          <button onClick={this.props.minusOne}>Minus One</button>
          <button onClick={this.props.changeName}>Change Name</button>

          <button onClick={this.props.changeBackgroundColor}>
            Change background
          </button>
          <button onClick={this.props.changeFontSize}>A</button>
          <i onClick={this.props.changeMode} className='far fa-lightbulb'></i>
        </div>

        <ul>{bookList}</ul>

        <BookDetails book={selectedBook} />
        <h1>Number of countries: {this.props.countries.length}</h1>
        <ul>{countriesList}</ul>
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   console.log(state)
//   return {
//     operations: state.operations,
//     books: state.books,
//     countries: state.countries
//   }
// }

// In additon to the state, we can add own state parameter in the mapStateToProps function, using own state we can access the props of the app component, let us go to index and give props title

const mapStateToProps = (state, ownState) => {
  return {
    operations: state.operations,
    books: state.books,
    countries: state.countries,
    title: ownState.title + ' ' + 2020
  }
}

// const mapActionToProps = dispatch => {
//   return {
//     addOne: () => dispatch(addOne),
//     minusOne: () => dispatch(minusOne),
//     changeName: () => dispatch(changeName),
//     changeBackgroundColor: () => dispatch(changeBackgroundColor),
//     selectBook: index => dispatch(selectBook(index)),
//     fetchCountries: fetchCountries
//   }
// }

export default connect(mapStateToProps, {
  addOne,
  minusOne,
  changeName,
  selectBook,
  changeBackgroundColor,
  fetchCountries,
  changeMode,
  changeFontSize
})(App)

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const evens = numbers.filter(num => num % 2 === 0)
const odds = numbers.filter(num => num % 2 !== 0)

console.log(evens) // [0, 2, 4, 6, 8, 10]

console.log(odds) // [1, 3, 5, 7, 9]
