import React from 'react'
import './App.css'
import ProductList from "./Components/Product/ProductsList"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateLayout from './Components/Layout/Layout'
import AddProducts from './Components/Product/AddProduct'
import Home from './Components/Home/Home'
import Cart from './Components/Cart/Cart'
import Login from './Components/Auth/Login'
import Register from './Components/Auth/Register'
import PrivateRoute from './Components/Auth/PrivateRoute'

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes (no navbar) */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected routes (with navbar) */}
        <Route element={<PrivateLayout />}>
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }
          />
          <Route
            path="/addprod"
            element={
              <PrivateRoute staffOnly={true}>
                <AddProducts />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
