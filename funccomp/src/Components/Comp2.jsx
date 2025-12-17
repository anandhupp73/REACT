import Comp3 from "./Comp3"
export default function Comp2({count}){
    return(
        <>
        <h1>Component 2</h1>
        <Comp3 count={count}/>
        </>
    )
}