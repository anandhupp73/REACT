import { useOutletContext } from "react-router-dom";
import styles from "./Cart.module.css";

export default function Cart() {
    const { cart, removeFromCart} = useOutletContext();

    return (
         <div className={styles.cartContainer}>
            <h1 className={styles.cartTitle}>Your Cart</h1>

            {cart.length === 0 ? (
                <p className={styles.emptyMessage}>Your cart is empty</p>
            ) : (
                <div className={styles.cartGrid}>
                    {cart.map(item => (
                        <div className={styles.cartCard} key={item.id}>
                            <img
                                src={item.thumbnail} 
                                alt={item.title} 
                                className={styles.cartImage}
                            />
                            <div className={styles.cartInfo}>
                                <h3 className={styles.cartProductTitle}>{item.title}</h3>
                                <p className={styles.cartProductPrice}>₹ {item.price}</p>
                                <p className={styles.cartProductQuantity}>Quantity: {item.quantity}</p>
                            </div>
                            <div className={styles.remove}>
                                <button className={styles.rmbtn} onClick={()=>removeFromCart(item.id)}>Remove from cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
