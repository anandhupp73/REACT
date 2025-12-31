import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from "./Home.module.css"
import {useOutletContext} from "react-router-dom"

export default function Home() {

    useEffect(() => {
        fetchFunction()
    }, [])

    const [products, setProducts] = useState([])
    const [searchTerm, setSearchTerm] = useState("");
    const { addToCart } = useOutletContext();

    async function fetchFunction() {
        try {
            const res = await axios.get("https://dummyjson.com/products")
            setProducts(res.data.products)
            console.log(res)
        }
        catch (error) {
            console.log(error)
        }
    }

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );


    return (
        <>
            <div className={styles['home-container']}>
                <h1>Home</h1>
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={styles['search-input']}
                />
                <div className={styles['product-list']}>
                    {filteredProducts.map((product) => (
                        <div className={styles['product-card']} key={product.id}>
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                                className={styles['product-image']}
                            />

                            <h3 className={styles['product-title']}>{product.title}</h3>
                            <p className={styles['product-price']}>₹ {product.price}</p>

                            <button
                                className={styles['add-to-cart-btn']}
                                onClick={() => addToCart(product)} 
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}