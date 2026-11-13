// import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
// import { faUser } from "@fortawesome/free-solid-svg-icons";

import CartManagement from "./Cart management/Cart-management";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home1";
import Log from "./login/Login";
import Car from "./products/Car";
import Buy from "./buy/Buy";
import Signin from "./signin/Sign in";
import { useState } from "react";
function App() {
 return(
    <CartManagement>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Log />} />
          <Route path="/Car" element={<Car />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </CartManagement>
  );
}

export default App;
