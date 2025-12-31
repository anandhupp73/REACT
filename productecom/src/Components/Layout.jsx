import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom"
import { useState } from "react";

export default function Layout() {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const exists = prevCart.find(item => item.id === product.id);
            if (exists) {
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
        alert(`${product.title} added to cart!`);
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => {
            const removedItem = prevCart.find(item => item.id === productId);
            if (removedItem) {
                alert(`${removedItem.title} removed from cart`);
            }
            return prevCart.filter(item => item.id !== productId);
        });
    };

    return (
        <>
            <Navbar />
            <main style={{ paddingTop: "60px" }}>
                <Outlet context={{ cart, addToCart, removeFromCart }} />
            </main>
        </>
    )
}