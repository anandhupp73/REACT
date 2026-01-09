import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

// function App() {
//   const [count,setCount] = useState(0)
//   const [count2,setCount2] = useState(1)
//   useEffect(()=>{
//     console.log('component rendered')
//   },[count2])

//   return(
//     <>
//       <h1>+1 increment {count}</h1>
//       <h1>+2 increment {count2}</h1>
//       <button onClick={()=>setCount(count +1)}>change</button>
//       <br />
//       <br />
//       <button onClick={()=>setCount2(count2 +2)}>+2 increment</button>
//     </>
//   )
// }

// export default App

// function App(){
//   const inputRef = useRef(null)
//   useEffect(()=>{
//     inputRef.current.focus()
//   })
//   const handleSubmit=(event)=>{
//     inputRef.current = event.target.value
//     console.log(inputRef.current)
//   }
//   return(
//     <>
//       <input type="text" ref={inputRef} onChange={handleSubmit}/>
//     </>
//   )
// }

// export default App

// function App(){
//   const inputRef = useRef(null)
//   useEffect(()=>{
//     inputRef.current.focus()
//   },[])
//   const handleSubmit=(event)=>{
//     console.log(inputRef.current.value)
//   }
//   return(
//     <>
//       <input type="text" ref={inputRef} />
//       <button onClick={handleSubmit}>submit</button>
//     </>
//   )

// }
// export default App

function App(){
  const myRef = useRef()

  useEffect(()=>{
    console.log(myRef.current)
  },[])

  const handleSubmit = (event) =>{
    event.preventDefault()
    console.log(myRef.current.value)
  }

  return(
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" ref={myRef} />
      <button type='submit' >Submit</button>
    </form>
    </>
  )
}

export default App