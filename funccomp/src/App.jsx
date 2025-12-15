import Navbar from "./Components/Navbar"
import Card from "./Components/Card"
import Comp1 from "./Components/Comp1"
import { useState } from "react"
export default function App(){
  const [count,setCount] = useState(0)
  console.log(count)
  return (
    <>
      <h1>hello</h1>
      <Navbar count={count}/>
      <Card/>
      <Comp1 count={count}/>
      {/* <Navbar/> */}
      <button onClick={()=>setCount(count +1)}>+</button>
      <button onClick={()=>setCount(count -1)}>-</button>

    </>
  )
}