// export default function Child({value}){
//     console.log("child rerendered")
//     return(
//         <div>
//             <h3>Child Component</h3>
//             <p>Doubled Count:{value}</p>
//         </div>
//     );
// }


// import React, { useState } from "react";

// const Child=React.memo(
//     function Child({onincrement}){
//     console.log('child re-rendered');

//     const [count,setCount] = useState(0)

//     const increamenttwo=(()=>{
//         console.log("increament function rememnbered")
//         setCount(count+1)
//     })

//     return(
//         <div>
//             <h3>Child compnent</h3>
//             <button onClick={onincrement}>increse from child</button>
//             <button onClick={increamenttwo}>child</button>
//             <p>{count}</p>
//         </div>
//     )
    
// }
// )
// export default Child

