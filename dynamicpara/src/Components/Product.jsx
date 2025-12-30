import { useParams } from "react-router-dom";

export default function Product(){
    const {id}= useParams()
    return(
        <>
            <p>Product id : {id} </p>
        </>
    )

}