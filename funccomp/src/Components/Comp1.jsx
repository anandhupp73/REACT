import Comp2 from "./Comp2"
export default function Comp1({count}){
    return(
        <>
        <h1>Component 1</h1>
        <Comp2 count={count}/>
        </>
    )
}