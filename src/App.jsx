// import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home1";
import Log from "./login/Login";
import Car from './products/Car'
function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Log/>}></Route>
        <Route path="/Car" element={<Car/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
