import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../Cart management/Cart-management";

function Buy() {
  const { cart } = useContext(CartContext);

  return (
    <div className="main-buy-div">
      <div className="pay-div">pay</div>
      <div className="cart-div">
        <p className="Your-cart">Your cart</p>
  
        {cart.map((product) => {
          const [number, setNumber] = useState(1);
                function increasenumber (){
       setNumber(number + 1)
          }
          function  decreasenumber(){
             if (number > 1) {
               setNumber(number - 1)
             }
          }
          return (
            <div className="item-cart" >
              <FontAwesomeIcon icon={faXmark} className="delete" />

              <div className="add-div">
                <p onClick={decreasenumber} className="p-add select">-</p>
                <p className="p-add red">{number}</p>
                <p onClick={increasenumber} className="p-add select">+</p>
              </div>
              <div className="name-price-cart">
                <p className="name-cart">{product.name}</p>
                <p className="price-cart">{product.price}</p>
                <p className="last-price">{number} x {product.price} = {product.price * number}</p>
              </div>

              <img
                className="img-cart"
                src="/src/picture/products/1.jpg"
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Buy;
