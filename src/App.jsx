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
        <div className="body-div-left">
          <p className="p-learning">learning</p>
          <div className="learning-items">
            <p className="learning-item">Html</p>
            <p className="learning-item">Css</p>
            <p className="learning-item">Html</p>
            <p className="learning-item">Html</p>
            <p className="learning-item">Css</p>
            <p className="learning-item">javascrip</p>
            <p className="learning-item">Html</p>
            <p className="learning-item">Css</p>
            <p className="learning-item">javascripas</p>
          </div>
        </div>
        <div className="body-div-center">
          <p className="pruduct-p">Products</p>
          <br />

          <div className="product-slider">
            <div className="product-card-div">
              <img className="product-card" src="src/picture/products/3.jpg" />
            </div>
          </div>
          <p className="products-card-p">Car</p>
          <br />

          <div className="product-slider">
            <div >
              <img className="product-card" src="src/picture/products/2.jpg" />
            </div>
          </div>
          <p className="products-card-p">Electronic</p>
          <br />

          <div className="product-slider">
            <div>
              <img className="product-card" src="src/picture/products/1.jpg" />
            </div>
          </div>
          <p className="products-card-p">Food</p>
        </div>
        <div className="body-div-right">
          <p className="stores-p">Stores</p>
          <div className="stores-card-div">
            <div className="store-item">
              <img className="stores-card" src="src/picture/stores/1.jpg" />
              <p className="store-card-text">Shiraz</p>
            </div>

            <div className="store-item">
              <img className="stores-card" src="src/picture/stores/2.jpg" />
              <p className="store-card-text">Tehran</p>
            </div>
          </div>
          <div className="stores-card-div">
            <div className="store-item">
              <img className="stores-card" src="src/picture/stores/3.jpg" />
              <p className="store-card-text">Isfahan</p>
            </div>

            <div className="store-item">
              <img className="stores-card" src="src/picture/1.png" />
              <p className="store-card-text">Store</p>
            </div>
          </div>
          <div className="stores-card-div">
            <div className="store-item">
              <img className="stores-card" src="src/picture/1.png" />
              <p className="store-card-text">Store</p>
            </div>

            <div className="store-item">
              <img className="stores-card" src="src/picture/1.png" />
              <p className="store-card-text">Store</p>
            </div>
          </div>{" "}
          <div className="stores-card-div">
            <div className="store-item">
              <img className="stores-card" src="src/picture/1.png" />
              <p className="store-card-text">Store</p>
            </div>

            <div className="store-item">
              <img className="stores-card" src="src/picture/1.png" />
              <p className="store-card-text">Store</p>
            </div>
          </div>
        </div>
      </div>
      <div className="down-page">
        <p>About</p>
        <div className="down-content">
          <div className="down">text</div>
          <div className="down">picture</div>
          <div className="down">number</div>
        </div>
      </div>
    </div>
  );
}

export default App;
