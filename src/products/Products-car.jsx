import { useState, useEffect } from "react";

function ProductsCar() {
  fetch("http://localhost/shop-api/products.php")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
  const [products, setproducts] = useState([]);
  function loadProducts() {
    fetch("http://localhost/shop-api/products.php")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setproducts(data.products);
      });
  }
  useEffect(() => {
    loadProducts();
  }, []);
  return products.map((product) => {
    return (
      <div className="div-all-card">
        <div className="style-products-card">
          <img
            src="/src/picture/products/1.jpg"
            className="img-products-card"
            alt="..."
          />
          <div className="card-body">
            <h1 className="card-text-top">{product.name}</h1>
            <p className="card-text-descirption">{product.description}</p>
            <p href="#" className="buy-text-card">
              {product.price}
            </p>
          </div>
        </div>
      </div>
    );
  });
}

export default ProductsCar;
