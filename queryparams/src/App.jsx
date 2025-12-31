import React, { useEffect } from 'react';
import './App.css'
import Home from "./Components/Home";
import About from "./Components/About";
import Product from "./Components/Product";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import axios from 'axios'

function App() {


  useEffect(() => {
    fetchFunction()
  }, [])

  async function fetchFunction() {
    try {
     const data =await axios.get("https://dummyjson.com/products")
     console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product/:id' element={<Product />} />
      </Routes>
    </Router>
  )
}

export default App