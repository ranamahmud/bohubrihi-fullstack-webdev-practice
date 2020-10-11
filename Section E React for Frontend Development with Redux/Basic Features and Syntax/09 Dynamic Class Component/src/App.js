import React, { Component } from 'react';
import './App.css';
import Person from './components/Person';


class App extends Component {
  render() {
    let obj = new Component();
    console.log(obj)
    return (
      <div className="App">
        <h1>Hello World</h1>
        <Person name="Rahim" age="30">I am some information</Person>
        <Person name="Karim" age="30" />
        <Person name="Jalil" age="30" />
        <Person name="Bakul" age="30" />
        <Person name="Nokul" age="30" />
      </div>
    )
  }
}

export default App;
