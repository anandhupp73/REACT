import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

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


class App extends React.Component{
  constructor(props){
    super(props)
      this.state = {
        name : 'vyshakh'
      }
      console.log('component is added')
  }
  ChangeName=()=>{
    this.setState({
      name : 'anandhu'
    })
  }
  componentWillMount(){
    console.log('component mounted success fuly')
  }
  render(){
    console.log('component is rendering')
    return(
      <>
      <h1>Hi ${this.state.name}</h1>
      <button onClick={this.ChangeName}>Click</button>
      </>
    )
  }
}

export default App
