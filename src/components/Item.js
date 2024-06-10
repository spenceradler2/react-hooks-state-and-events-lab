import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [cart,setCart] = useState(false)
  
  function handleLiClick(){
    
    setCart((cart) => !cart)
}
  const currentCart = cart ? "in-cart" : ""
  const className = cart ? "remove" : "add" 

  return (
    <li className = {currentCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={className} onClick={handleLiClick}>{cart ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
