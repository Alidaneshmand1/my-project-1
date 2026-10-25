import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Products from "./Products-car";
function Car() {
  return (
    <div>
      <div className="nav-bar">
        <ul className="nav nav-pills">
  <li className="nav-item">
    <a className="nav-link" aria-current="page" href="#"></a>
  </li>
  <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false"><FontAwesomeIcon icon={faBars} /></a>
    <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="#">Action</a></li>
      <li><a className="dropdown-item" href="#">Another action</a></li>
      <li><a className="dropdown-item" href="#">Something else here</a></li>
      <li><hr className="dropdown-divider"/></li>
      <li><a className="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>
</ul>
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
              className="img-header-slider d-block w-100"
              alt="Car 1"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide</h5>
              <p>First car image</p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="/src/picture/products/2.jpg"
              className="img-header-slider d-block w-100"
              alt="Car 2"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide</h5>
              <p>Second car image</p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="/src/picture/products/3.jpg"
              className="img-header-slider d-block w-100"
              alt="Car 3"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide</h5>
              <p>Third car image</p>
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
