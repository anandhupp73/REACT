import styles from "./Login.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login(){
    const navigate = useNavigate();
    const fixemail = "anandhu@gmail.com";
    const fixpassword = "anandhu"
    const [email,setEmail] = useState(fixemail)
    const [password,setPassword] = useState(fixpassword)

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === fixemail && password === fixpassword) {
            alert("Login successful!");
            navigate("/home")
        } else {
            alert("Invalid email or password.");
        }
    }

    return(
        <>
        <div className={styles.login}>
            <form action="" onSubmit={handleSubmit} className={styles.loginform}>
                <input type="text" placeholder="email" value={email} className={styles.email}/>
                <input type="password" placeholder="password" value={password} className={styles.password}/>

                <button type="submit" className={styles.loginbtn}>Login</button>
            </form>
        </div>
        </>
    )
}