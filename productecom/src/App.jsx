import React from 'react';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from "./Components/Home/Home";
import Wishlist from "./Components/Wishlist/Wishlist";
import Cart from "./Components/Cart/Cart";
import Layout  from './Components/Layout';
import './App.css'

function App(){
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/home' element={<Home/>}/>
          <Route path='/wishlist' element={<Wishlist/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
