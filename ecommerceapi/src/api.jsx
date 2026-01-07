import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  withCredentials: true, // send cookies with requests
});

// Add JWT token from cookie to Authorization header
api.interceptors.request.use((config) => {
  const token = Cookies.get("access");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
