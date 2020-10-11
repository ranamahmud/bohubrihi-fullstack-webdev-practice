import React, { Component } from 'react';
import './App.css';
import Book from './components/Book';
import Person from './components/Person';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Book List</h1>
        <Book bookName="1984" writer="George Orwell" />
        <Book bookName="The Da Vinci Code" writer="Dan Brown" />
        <Book bookName="The Alchemist" writer="Paulo Coelho" />
      </div>
    )
  }
}

export default App;
