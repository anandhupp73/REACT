import React, {useEffect,useState,useRef} from "react";

function App(){
  const [count,setCount] = useState(0);

  const renderCount = useRef(0);

  useEffect(()=>{
    document.title = `count: ${count}`;
  },[count]);

  useEffect(()=>{
    renderCount.current += 1;
  });

  return(
    <div style={{padding: "20px", fontFamily:"Arial"}}>
      <h1>React Hooks Example</h1>
      <p>Count : {count}</p>
      <p>Component rendered : {renderCount.current} times</p>

      <button onClick={()=> setCount(count + 1 )}>Increment</button>
      <button onClick={()=> setCount(count - 1 )}>Decerment</button>
      <button onClick={()=> setCount(0)}>Reset</button>
    </div>
  )
}

export default App