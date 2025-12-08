import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";
import ParentComponent from "./Components/ParentComponent";
import ChildComponent from "./Components/ChildComponent";

class App extends React.Component {
  render() {
    return (
      <div>
        <ParentComponent ComponentProp={ChildComponent} />
      </div>
    );
  }
}

export default App;
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


// class App extends React.Component{
//   constructor(props){
//     super(props)
//       this.state = {
//         count : 0
//       }
//       console.log('component have been created')
//   }
//   ChangeCount=()=>{
//     this.setState({
//       count : this.state.count +1
//     })
//   }
//   componentDidUpdate(prevProps,prevState){
// 	console.log(`changes from ${prevState.count} to ${this.state.count}`)
//   }
//   render(){
//     console.log('rendered')
//     return(
//       <>
//         <h1>count = {this.state.count}</h1>
//         <button onClick={this.ChangeCount}>+</button>
//       </>
//     )
//   }
// }

// export default App