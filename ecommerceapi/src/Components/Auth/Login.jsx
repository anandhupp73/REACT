import React, { useState } from "react";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("auth/login/", formData);
      Cookies.set("access", res.data.access, { expires: 1 / 24 });
      Cookies.set("refresh", res.data.refresh, { expires: 7 });
      Cookies.set("username", res.data.username);
      Cookies.set("is_staff", res.data.is_staff);

      navigate("/");
    } catch (err) {
      setError(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input name="username" placeholder="Username" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Login</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>

    <p><Link to="/register">Register</Link></p>
    
    </>
    
  );
}
