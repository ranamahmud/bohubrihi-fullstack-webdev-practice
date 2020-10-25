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
  deleteBookState = index => {
    const books = this.state.books;
    books.splice(index, 1)
    this.setState({ books: books })
  }
  render() {
    const style = {
      border: '1px solid red',
      borderRadius: '5px',
      backgroundColor: 'black',
      color: "white"
    }
    const books = this.state.books
      .map(function (book, index) {
        return (
          <Book key={index} bookName={book.bookName}
            writer={book.writer}
            delete={() => this.deleteBookState(index)}
          />
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
