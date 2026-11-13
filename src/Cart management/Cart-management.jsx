import { createContext, useState } from "react";

export const CartContext = createContext();

function Cartmanagemet({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default Cartmanagemet;