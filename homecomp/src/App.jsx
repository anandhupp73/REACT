import React from "react";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Contacts from "./Components/Contact/Contact"
import Layout from "./Components/Layout";



function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contacts/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App