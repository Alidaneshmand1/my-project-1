import { faDove } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import "./Car";
import { useContext } from "react";
import { CartContext } from "../Cart management/Cart-management";
function ProductsCar(props) {
  const { addToCart } = useContext(CartContext);
  fetch("http://localhost:3000/products")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
  const [products, setproducts] = useState([]);
  function loadProducts() {
    fetch("http://localhost:3000/products")
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
  const filteredProducts = products.filter((product) => {
    return product.name
      .toLowerCase()
      .includes(props.searchipmort.toLowerCase());
  });
  console.log("Search:", props.searchipmort);
console.log("Products:", products); 
  return (
    <div className="div-all-card">
      {filteredProducts.map((product) => {
        return (
          <div key={product.id} className="style-products-card">
            <img
              src="/src/picture/products/1.jpg"
              className="img-products-card"
              alt="..."
            />
            <div className="card-body">
              <h1 className="card-text-top">{product.name}</h1>
              <p className="filter">food</p>
              <p href="#" className="price-text">
                {product.price}
              </p>
              <button  onClick={() => addToCart(product)} className="Add-to-cart">Add to cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductsCar;
