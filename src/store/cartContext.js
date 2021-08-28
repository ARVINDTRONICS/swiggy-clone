import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addToCart: () => {},
  removefromCart: () => {}
});

export default CartContext;
