import React from 'react';
import './App.css'
import Home from "./Components/Home";
import About from "./Components/About";
import Product from "./Components/Product";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'

function App(){
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/product/:id' element={<Product/>} />
      </Routes>
    </Router>
  )
}

export default App