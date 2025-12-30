import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar"
import { useEffect } from "react";

export default function Home(){
    const navigate = useNavigate()
    const prodNavigate = useNavigate()
    const getProduct = (id) => {
        prodNavigate(`/product/${id}`)
    }
    return(
        <>
            <Navbar/>
            <h1>Home Page</h1>
            <button onClick={ ()=>navigate('/about')}>Click me to go to about</button>
            <button onClick={ ()=>getProduct(103)}>Product</button>
        </>
    )
}
