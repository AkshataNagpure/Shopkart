
// import React, { createContext, useReducer } from "react";

// export const CartContext = createContext();

// const initialState = {
//   cart: [],
// };

// function cartReducer(state, action) {
//   switch (action.type) {

//     case "ADD_TO_CART":
//       return {
//         ...state,
//         cart: [...state.cart, action.payload],
//       };

//     case "REMOVE_FROM_CART":
//       return {
//         ...state,
//         cart: state.cart.filter(
//           (_, index) => index !== action.index
//         ),
//       };

//     case "CLEAR_CART":
//       return {
//         ...state,
//         cart: [],
//       };

//     default:
//       return state;
//   }
// }

// export function CartProvider({ children }) {
//   const [state, dispatch] = useReducer(
//     cartReducer,
//     initialState
//   );

//   return (
//     <CartContext.Provider value={{ state, dispatch }}>
//       {children}
//     </CartContext.Provider>
//   );
// }
import React, {
  createContext,
  useReducer,
} from "react";

export const CartContext = createContext();

const initialState = {
  cart: [],
};

function cartReducer(state, action) {
  switch (action.type) {

    case "ADD_TO_CART": {
      const existingProduct = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingProduct) {
        return {
          ...state,

          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item
          ),
        };
      }

      return {
        ...state,

        cart: [
          ...state.cart,
          {
            ...action.payload,
            quantity: 1,
          },
        ],
      };
    }

    case "INCREASE_QUANTITY":
      return {
        ...state,

        cart: state.cart.map((item) =>
          item.id === action.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        ),
      };

    case "DECREASE_QUANTITY":
      return {
        ...state,

        cart: state.cart
          .map((item) =>
            item.id === action.id
              ? {
                  ...item,
                  quantity: item.quantity - 1,
                }
              : item
          )
          .filter((item) => item.quantity > 0),
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,

        cart: state.cart.filter(
          (_, index) => index !== action.index
        ),
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(
    cartReducer,
    initialState
  );

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}