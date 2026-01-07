import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function PrivateRoute({ children, staffOnly = false }) {
  const token = Cookies.get("access"); // check if logged in
  const isStaff = Cookies.get("is_staff") === "true"; // check if staff

  if (!token) {
    // not logged in
    return <Navigate to="/login" replace />;
  }

  if (staffOnly && !isStaff) {
    // user is not staff but trying to access staff page
    return <Navigate to="/" replace />;
  }

  return children; // allow access
}
