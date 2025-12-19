import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Parent from './Components/Parent'

// function App() {
//   return(
//     <>
//       <Parent/>
//     </>
//   )
// }

// export default App

function ExpensiveComponent({items,filter}){
  const filtereditems = useMemo(()=>{
    console.log('filtered items..')
    return items.filter(
      item=>item.includes(filter))
    },[items,filter]);
  
    return (
    <div>
      <h3>Filtered items</h3>
      <ul>
        {filtereditems.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
function App(){
  const [filter,setfilter] = useState("");
  const items = ['apple','banana','cherry','date','elderberry']

  return(
    <div>
      <input type="text" value={filter} onChange={(e)=>setfilter(e.target.value)} placeholder='filter items'/>
      <ExpensiveComponent items={items} filter={filter}/>
    </div>
  )
}

export default App