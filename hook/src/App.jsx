import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

// function App() {
//   const [count,setCount] = useState(0)
//   useEffect(()=>{
//     console.log(count)
//   },[count])

//   return(
//     <>
//       <h1>{count}</h1>
//       <button onClick={()=>setCount(count +1)}>change</button>
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

function App(){
  const inputRef = useRef(null)
  useEffect(()=>{
    inputRef.current.focus()
  },[])
  const handleSubmit=(event)=>{
    console.log(inputRef.current.value)
  }
  return(
    <>
      <input type="text" ref={inputRef} />
      <button onClick={handleSubmit}>submit</button>
    </>
  )

}
export default App