import React, { Component } from 'react';
import './App.css';
import Book from './components/Book';


class App extends Component {
  state = {
    books: [
      { bookName: '1984', writer: 'George Orwell' },
      { bookName: 'The vinci code', writer: 'Dan Brown' },
      { bookName: 'The Alchemist', writer: 'Paulo Coelho' },
    ],
    otherProps: "I am some other Prop"
  }

  changeBookState = newBookName => {
    this.setState({
      books: [
        { bookName: newBookName, writer: 'George Orwell' },
        { bookName: 'The vinci code', writer: 'Dan Brown' },
        { bookName: 'The Alchemist', writer: 'Paulo Coelho' },
      ],
    })
  }
  changeWithInputState = e => {
    this.setState({
      books: [
        { bookName: e.target.value, writer: 'George Orwell' },
        { bookName: 'The vinci code', writer: 'Dan Brown' },
        { bookName: 'The Alchemist', writer: 'Paulo Coelho' },
      ],
    })
  }
  render() {
    const style = {
      border: '1px solid red',
      borderRadius: '5px',
      backgroundColor: 'black',
      color: "white"
    }
    const books = this.state.books
      .map(function (book) {
        return (
          <Book bookName={book.bookName} writer={book.writer} />
        )

      })
    return (
      <div className="App" >
        <h1 style={style}>Book List</h1>
        <button onClick={() => this.changeBookState('Nineteen Eighty Four')}>Change State</button>
        <input type="text" name="" onChange={this.changeWithInputState} id="" />
        {
          books
        }

      </div >
    )
  }
}

export default App;
