import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./ProductCard.css";

function ProductCard({ title, price, image }) {
  const { dispatch } = useContext(CartContext);

  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>₹{price}</p>

      <button
        onClick={() =>
          dispatch({
            type: "ADD_TO_CART",
            payload: { title, price, image },
          })
        }
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;