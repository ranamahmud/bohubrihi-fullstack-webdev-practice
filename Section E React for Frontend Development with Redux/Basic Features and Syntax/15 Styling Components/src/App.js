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
    return (
      <div className="App">
        <h1 style={style}>Book List</h1>
        <button onClick={() => this.changeBookState('Nineteen Eighty Four')}>Change State</button>
        <input type="text" name="" onChange={this.changeWithInputState} id="" />
        <Book bookName={this.state.books[0].bookName} writer={this.state.books[0].writer}
          inputName={this.changeWithInputState}
        />
        <Book bookName={this.state.books[1].bookName} writer={this.state.books[1].writer} />
        <Book bookName={this.state.books[2].bookName} writer={this.state.books[2].writer} change={this.changeBookState.bind(this, 'Nineteen 84')} />

      </div>
    )
  }
}

export default App;
