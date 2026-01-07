import React, { useState } from "react";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  // Update form state
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit registration
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      // Call registration endpoint
      await api.post("auth/register/", formData);

      // After successful registration, automatically log in
      const loginRes = await api.post("auth/login/", {
        username: formData.username,
        password: formData.password,
      });

      // Save tokens and info in cookies
      Cookies.set("access", loginRes.data.access, { expires: 1 / 24 }); // 1 hour
      Cookies.set("refresh", loginRes.data.refresh, { expires: 7 }); // 7 days
      Cookies.set("username", loginRes.data.username);
      Cookies.set("is_staff", loginRes.data.is_staff);

      setSuccess("Registration successful! Redirecting to home...");
      setTimeout(() => navigate("/"), 1000); // redirect after 1 sec
    } catch (err) {
      console.log(err.response?.data);
      setError(err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
}
