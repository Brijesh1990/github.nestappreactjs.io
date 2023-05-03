import React from "react";
import  ReactDOM  from "react-dom/client";
// Router : Router is one type of a mechanism i.e used to load user desired appropriate page url
// diffrence b/w html, xhtml =><cite> <strong>  <!DOCTYPE html> and xml
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Cart from "./components/Cart";
import Slider from "./components/Slider";
import NoFound from "./components/NoFound";
function App() {
  return (
    <React.Fragment>
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" exact element={<Home/>} >
          <Route path="/" element={<Slider/>} />
          <Route path="aboutus" element={<About/>} />
           <Route path="cart" element={<Cart/>} />
           <Route path="*" element={<NoFound/>} />
         </Route>
      </Routes>
      </BrowserRouter>
 
    </div>
    </React.Fragment>
  );
}

export default App;
