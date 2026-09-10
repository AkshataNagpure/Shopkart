import React, { useContext } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const { state: themeState, dispatch: themeDispatch } =
    useContext(ThemeContext);

  const { state: cartState } = useContext(CartContext);

  return (
    <nav className={themeState.theme === "light" ? "light" : "dark"}>

      <div className="nav-logo">
        ShopKart
      </div>

      <div className="nav-links">

        <NavLink to="/">Home</NavLink>

        <NavLink to="/products">Products</NavLink>

        <NavLink to="/cart">
          Cart ({cartState.cart.length})
        </NavLink>

        <NavLink to="/login">Login</NavLink>

        <button
          className="theme-btn"
          onClick={() =>
            themeDispatch({ type: "TOGGLE_THEME" })
          }
        >
          {themeState.theme === "light" ? "Toggle" : "Toggle"}
        </button>

      </div>

    </nav>
  );
}