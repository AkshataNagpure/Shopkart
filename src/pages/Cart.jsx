
// import React, { useContext } from "react";
// import { CartContext } from "../context/CartContext";
// import { useNavigate } from "react-router-dom";
// import "./Cart.css";

// function Cart() {
//   const { state, dispatch } = useContext(CartContext);
//   const navigate = useNavigate();

//   return (
//     <div className="cart-container">

//       <h1>Your Cart</h1>

//       {state.cart.length === 0 ? (
//         <p>No items in cart</p>
//       ) : (
//         <>
//           <div className="cart-products">
//             {state.cart.map((item, index) => (
//               <div key={index} className="cart-item">

//                 <img src={item.image} alt={item.title} />

//                 <h4>{item.title}</h4>

//                 <p>₹{item.price}</p>

//                 <button
//                   className="remove-btn"
//                   onClick={() =>
//                     dispatch({
//                       type: "REMOVE_FROM_CART",
//                       index: index,
//                     })
//                   }
//                 >
//                   Remove
//                 </button>

//               </div>
//             ))}
//           </div>

//           <button
//             className="payment-btn"
//             onClick={() => navigate("/payment")}
//           >
//             Proceed to Payment
//           </button>
//         </>
//       )}

//     </div>
//   );
// }

// export default Cart;
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const { state, dispatch } = useContext(CartContext);

  const navigate = useNavigate();

  const total = state.cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">

      <h1>Your Cart</h1>

      {state.cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          <div className="cart-products">

            {state.cart.map((item, index) => (
              <div
                key={item.id}
                className="cart-item"
              >

                <img
                  src={item.image}
                  alt={item.title}
                />

                <h4>{item.title}</h4>

                <p>₹{item.price}</p>

                <div className="quantity-control">

                  <button
                    className="quantity-btn"
                    onClick={() =>
                      dispatch({
                        type: "DECREASE_QUANTITY",
                        id: item.id,
                      })
                    }
                  >
                    −
                  </button>

                  <span className="quantity">
                    {item.quantity}
                  </span>

                  <button
                    className="quantity-btn"
                    onClick={() =>
                      dispatch({
                        type: "INCREASE_QUANTITY",
                        id: item.id,
                      })
                    }
                  >
                    +
                  </button>

                </div>

                <p className="subtotal">
                  Subtotal: ₹
                  {(item.price * item.quantity).toFixed(2)}
                </p>

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

          <div className="cart-bottom">

            <h2>
              Total: ₹{total.toFixed(2)}
            </h2>

            <button
              className="payment-btn"
              onClick={() =>
                navigate("/payment")
              }
            >
              Proceed to Payment
            </button>

          </div>
        </>
      )}

    </div>
  );
}

export default Cart;