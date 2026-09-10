
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const { state, dispatch } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="cart-container">

      <h1>Your Cart</h1>

      {state.cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          <div className="cart-products">
            {state.cart.map((item, index) => (
              <div key={index} className="cart-item">

                <img src={item.image} alt={item.title} />

                <h4>{item.title}</h4>

                <p>₹{item.price}</p>

                <button
                  className="remove-btn"
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      index: index,
                    })
                  }
                >
                  Remove
                </button>

              </div>
            ))}
          </div>

          <button
            className="payment-btn"
            onClick={() => navigate("/payment")}
          >
            Proceed to Payment
          </button>
        </>
      )}

    </div>
  );
}

export default Cart;