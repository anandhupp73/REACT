import React from 'react'
import './App.css'
import ProductList from "./Components/ProductList/ProductsList"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import AddProducts from './Components/AddProd/AddProducts'
import Home from './Components/Home/Home'
import Cart from './Components/Cart/Cart'

function App() {
  return(
      <Router>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="addprod/" element={<AddProducts/>}/>
            <Route path="cart/" element={<Cart/>}/>
          </Route>
        </Routes>
      </Router>
  )
}

export default App
