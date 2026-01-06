import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [formData, setFormData] = useState({ username: "", password: "" })
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const res = await axios.post("http://127.0.0.1:8080/api/auth/login/", formData);
            // Save tokens in localStorage
            localStorage.setItem("access", res.data.access);
            localStorage.setItem("refresh", res.data.refresh);
            localStorage.setItem("username", res.data.username);
            localStorage.setItem("is_staff", res.data.is_staff);

            // Redirect after login
            navigate("/"); // or dashboard
        } catch (err) {
            setError(err.response?.data?.error || "Login failed");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="username"
                placeholder="Username"
                onChange={handleChange}
                required
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                required
            />
            <button type="submit">Login</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
    );
}