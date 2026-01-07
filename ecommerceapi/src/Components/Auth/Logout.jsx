import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Remove all auth cookies
    Cookies.remove("access");
    Cookies.remove("refresh");
    Cookies.remove("username");
    Cookies.remove("is_staff");

    // Redirect to login
    navigate("/login", { replace: true });
  }, [navigate]);

  return null; // nothing to render
}
