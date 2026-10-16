import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <div>
      <div className="header-main">
        <div className="header-left">
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div className="headaer-center">
          <h1 className="header-text">Welcome</h1>
          <input className="search-bar" placeholder="Serach..." type="text" />
        </div>
        <div className="header-right">
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
      </div>
      <div className="body-content-div">
        <div className="body-div">learning</div>
        <div className="body-div">
          <p>Products</p>

          <div className="product-slider">
            <div className="product-card">Product 1</div>
            <div className="product-card">Product 2</div>
            <div className="product-card">Product 3</div>
            <div className="product-card">Product 4</div>
            <div className="product-card">Product 5</div>
          </div>
        </div>
        <div className="body-div">Stores</div>
      </div>
      <div>About </div>
    </div>
  );
}

export default App;
