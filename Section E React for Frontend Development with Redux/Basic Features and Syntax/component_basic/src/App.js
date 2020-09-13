import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './components/Person';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//       <Person/>
//     </div>
//   )
//   // return React.createElement('div', { className: 'App' },
//   //   React.createElement('h1', null, 'Hello World', <Person />)
//   // );
// }

// function Person() {
//   return (
//     <div>I am a person component</div>
//   )
//   // return React.createElement('div',null, 'I am a person component')
// }

// Class Component

class App extends Component{
  render(){
   return (
    <div className="App">
    <h1>Hello World</h1>
    <Person />
    <Person/>
    <Person/>
    <Person/>
  </div>
   )
  }
}

export default App;
