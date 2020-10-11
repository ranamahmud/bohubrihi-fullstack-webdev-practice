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

  changeBookState = () => {
    this.setState({
      books: [
        { bookName: 'Nineteen Eighty-Four', writer: 'George Orwell' },
        { bookName: 'The vinci code', writer: 'Dan Brown' },
        { bookName: 'The Alchemist', writer: 'Paulo Coelho' },
      ],
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Book List</h1>
        <button onClick={this.changeBookState}>Change State</button>
        <Book bookName={this.state.books[0].bookName} writer={this.state.books[0].writer} />
        <Book bookName={this.state.books[1].bookName} writer={this.state.books[1].writer} />
        <Book bookName={this.state.books[2].bookName} writer={this.state.books[2].writer} />

      </div>
    )
  }
}

export default App;
