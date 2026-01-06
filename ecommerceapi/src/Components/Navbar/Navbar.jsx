import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"

export default function Navbar() {

    const isStaff = localStorage.getItem("is_staff") === "true";

    return (
        <nav className={styles.navbar}>
            <ul className={styles['nav-list']}>
                <li><Link to="/">Home</Link></li>
                { isStaff &&
                    <li><Link to="/addprod">Add Prod</Link></li>
                }
                <li><Link to="/cart">Cart</Link></li>
            </ul>
        </nav>
    )
}