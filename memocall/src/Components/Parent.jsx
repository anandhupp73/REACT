// import React,{useState,useMemo, use, useCallback} from "react";
// import Child from "./Child"

// export default function Parent(){
//     const [count,setCount] = useState(0);
//     const [text,setText] = useState("");
    
//     const doubleCount=useMemo(()=>{
//         console.log("calculating doubled count ...")
//         return count*2;
//     },[count])
//     return(
//         <div>
//             <h2>Parent component</h2>
//             <button onClick={()=>setCount(count+1)}>Increase count</button>

//             <input type="text" placeholder="type something" value={text} onChange={(e)=>setText(e.target.value)} />

//             <Child value={doubleCount}/>
//         </div>
        
//     )
// }

// export default function Parent(){
//     const [count,setCount] = useState(0)
//     const [text,setText] = useState("")

//     const increment = useCallback(()=>{
//         console.log("increament function rememnbered")
//         setCount((prev)=>prev+1)
//     },[])

//     return(
//         <div>
//             <h2>Parent Component</h2>
//             <button onClick={increment}>Increase</button>
//             <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />

//             <Child onincrement={increment}/>
            
//         </div>
//     )

// }