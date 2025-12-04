// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

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

import React from 'react'

// class App extends React.Component{
//   render(){
//     return(
//       <>
//         <h1>Hello Good morning</h1>
//       </>
//     )
//   }
// }

// export default App

// class App extends React.PureComponent{
//   constructor(props){
//     super(props)
//       this.state = {
//         name : 'vyshakh'
//       }
//   }
//   ChangeName=()=>{
//     this.setState({
//       name : 'manu'
//     })
//   }
//   render(){
//     console.log('rendered')
//     return(
//       <>
//         <h1>hi {this.state.name}</h1>
//         <button onClick={this.ChangeName}>changename</button>
//       </>
//     )
//   }
// }

// export default App

class App extends React.Component{
  constructor(props){
    super(props)
      this.state = {
        count : 0
      }
  }
  ChangeCount=()=>{
    this.setState({
      count : this.state.count +1
    })
  }
  render(){
    console.log('rendered')
    return(
      <>
        <h1>counter{this.state.count}</h1>
        <button onClick={this.ChangeCount}>changecount</button>
      </>
    )
  }
}

export default App