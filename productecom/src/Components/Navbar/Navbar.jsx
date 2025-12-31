import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navList}>
                <li className={styles.left}>
                    <Link to="/home">Home</Link>
                </li>

                <div className={styles.right}>
                    <li><Link to="/wishlist">Wishlist</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                </div>
            </ul>
        </nav>
    );
}