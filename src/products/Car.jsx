import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";


import Products from "./Products-car";
function Car() {
  return (
    <div>
      <div className="nav">
        <div className="left-nav">
         
            <FontAwesomeIcon className="icons-nav" icon={faUser} />

         
            <FontAwesomeIcon className="icons-nav" icon={faCartShopping} />
     
        </div>
    <div className="center-nav"> <div className="headaer-center">
          <input className="search-bar-products" placeholder="Serach..." type="text" />
        </div></div>
        <div className="right-nav">
    
            <FontAwesomeIcon className="icons-nav" icon={faBars} />

        </div>
      </div>
      <div
        id="carouselExampleCaptions"
        className="slider-header carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>

          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>

          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/src/picture/products/1.jpg"
              className="img-header-slider d-block"
              alt="Car 1"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5></h5>
              <p></p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="/src/picture/products/2.jpg"
              className="img-header-slider d-block"
              alt="Car 2"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5></h5>
              <p></p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="/src/picture/products/3.jpg"
              className="img-header-slider d-block"
              alt="Car 3"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5></h5>
              <p></p>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Products></Products>
    </div>
  );
}

export default Car;
