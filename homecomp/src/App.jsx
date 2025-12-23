import React from "react";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Contacts from "./Components/Contact/Contact"
import Layout from "./Components/Layout";
import Login from "./Components/Login/Login"



function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
          <Route element={<Layout/>}>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contacts/>}/>
          </Route>
      </Routes>
    </Router>
  )
}

export default App