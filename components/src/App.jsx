import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react"

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// -----------------------------------controlled component--------------------------------------------------

// class App extends React.Component{
//   constructor(){
//     super()
//     this.state = {
//       text : ''
//     }
//   }
//   handleChange=(event)=>{
//     this.setState({text:event.target.value})
//   }
//   render(){
//     return(
//       <>
//         <input type="text" value={this.state.text} onChange={this.handleChange} />
//         <p>{this.state.text}</p>
//       </>
//     )
//   }
// }

// export default App

// ---------------------------------------------------uncontrolled component---------------------------------------------

// class App extends React.Component{
//   constructor(){
//     super()
//     this.inputRef = React.createRef()
//   }
//   handleSubmit=(event)=>{
//     event.preventDefault()
//     alert('input value'+this.inputRef.current.value)
//   }
//   render(){
//     return(
//       <>
//         <form action="" onSubmit={this.handleSubmit}>
//           <input type="text" ref={this.inputRef} />
//           <button type='submit'>submit</button>
//         </form>
//       </>
//     )
//   }
// }

// export default App
// -------------------------------------------------------------------------------------------------------------
