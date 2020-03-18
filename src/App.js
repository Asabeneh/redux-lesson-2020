import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  addOne,
  minusOne,
  changeName,
  changeBackgroundColor,
  selectBook,
  fetchCountries
} from './store/actions'
import BookDetails from './components/BookDetails'

import './App.css'

class App extends Component {
  componentDidMount() {
    this.props.fetchCountries()
  }
  render() {
    const { count, name, color } = this.props.operations
    const { books, selectedBook } = this.props.books
    const { countries } = this.props

    const bookList = books.map((book, i) => (
      <li onClick={() => this.props.selectBook(i)}> {book.title}</li>
    ))
    const countriesList = countries.map(country => (
            <li>{country.name}</li>
          ))

    return (
      <div className='App' style={{ backgroundColor: color }}>
        <h1 className='title'>Redux Lesson</h1>
        <h2>{count}</h2>
        <h2>{name}</h2>
        <button onClick={this.props.addOne}>Add One</button>
        <button onClick={this.props.minusOne}>Minus One</button>
        <button onClick={this.props.changeName}>Change Name</button>
        <button onClick={this.props.changeBackgroundColor}>
          Change background
        </button>
        <ul>{bookList}</ul>

        <BookDetails book={selectedBook} />
        <h1>Number of countries: {this.props.countries.length}</h1>
        <ul>
          { countriesList}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    operations: state.operations,
    books: state.books,
    countries: state.countries
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
  fetchCountries
})(App)
