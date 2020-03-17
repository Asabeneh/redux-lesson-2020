import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  addOne,
  minusOne,
  changeName,
  changeBackgroundColor,
  selectBook
} from './store/actions'
import BookDetails from './components/BookDetails'

import './App.css'

class App extends Component {
  render() {
    console.log(this.props)
    const { count, name, color } = this.props.operations
    const { books, selectedBook } = this.props.books
    console.log(selectedBook)

    const bookList = books.map((book, i) => (
      <li onClick={() => this.props.selectBook(i)}> {book.title}</li>
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
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    operations: state.operations,
    books: state.books
  }
}

const mapActionToProps = dispatch => {
  return {
    addOne: () => dispatch(addOne),
    minusOne: () => dispatch(minusOne),
    changeName: () => dispatch(changeName),
    changeBackgroundColor: () => dispatch(changeBackgroundColor),
    selectBook: index => dispatch(selectBook(index))
  }
}

export default connect(mapStateToProps, mapActionToProps)(App)
