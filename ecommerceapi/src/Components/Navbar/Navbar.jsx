import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const isStaff = Cookies.get("is_staff") === "true";
  const token = Cookies.get("access");

  return (
    <nav className={styles.navbar}>
      <ul className={styles['nav-list']}>
        <li><Link to="/home">Home</Link></li>
        {isStaff && <li><Link to="/addprod">Add Prod</Link></li>}
        <li><Link to="/cart">Cart</Link></li>

        {/* Show login/logout depending on auth */}
        {token ? (
          <li><Link to="/logout">Logout</Link></li>
        ) : (
          <li><Link to="/">Login</Link></li>
        )}
      </ul>
    </nav>
  );
}
