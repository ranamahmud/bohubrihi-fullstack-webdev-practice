
import React from 'react'

// Functional Component
// function Person() {
//     return (
//       <div>I am a person component</div>
//     )
//     // return React.createElement('div',null, 'I am a person component')
//   }


// let Person = ()=> {
//   return(<div>I am a person component</div>)
// }
// let Person = (props) => {
//   return (
//     <div>Number : {Math.random()}</div>
//   )
// }
let Person = (props) => {
  return (
    <div>
      <h3>Name: {props.name} and Age: {props.age}</h3>
      <h4>Extra Info: {props.children}</h4>
    </div>
  )
}

export default Person;