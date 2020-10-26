import React, { Component } from 'react';
import './App.css';
import Book from './components/Book';


class App extends Component {

  state = {
    books: [
      { id: 1, bookName: '1984', writer: 'George Orwell' },
      { id: 2, bookName: 'The vinci code', writer: 'Dan Brown' },
      { id: 3, bookName: 'The Alchemist', writer: 'Paulo Coelho' },
    ],
  }

  render() {
    const style = {
      border: '1px solid red',
      borderRadius: '5px',
      backgroundColor: 'black',
      color: "white"
    }
    const deleteBookState = index => {
      const books = this.state.books;
      books.splice(index, 1)
      this.setState({ books: books })
    };
    const
      changeWithInputState = (e, index) => {
        const book = { ...this.state.books[index] }
        book.bookName = e.target.value
        const books = [...this.state.books]
        books[index] = book
        this.setState({ books: books })
      }

    const books = this.state.books
      .map(function (book, index) {
        return (
          <Book key={book.id}
            inputName={(event) => changeWithInputState(event, index)}
            bookName={book.bookName}
            writer={book.writer}
            delete={() => deleteBookState(index)}
          />
        )

      })
    return (
      <div className="App" >
        <h1 style={style}>Book List</h1>

        {
          books
        }

      </div >
    )
  }
}

export default App;
