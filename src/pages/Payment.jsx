import {useContext} from "react";
import { CartContext } from "../context/CartContext";
import {useNavigate} from "react-router-dom";
import "./Payment.css";

function Payment(){
    const { state, dispatch } = useContext(CartContext);
    const navigate = useNavigate();

    const total= state.cart.reduce((acc, item) => acc + item.price, 0);

    const handlePayment = () => {
        alert("Payment Successful!");
        dispatch({ type: "CLEAR_CART" });
        navigate("/success");
    };

    return(
        <div className="payment-container">
            <div className="payment-card">
                <h2>Payment</h2>
                <p>Total Amount: ₹{total.toFixed(2)}</p>

                <input placeholder="Card Number" />
                <input placeholder="Card Holder Name" />
                <input placeholder="Expiry Date" />
                <input placeholder="CVV" />

                <button onClick={handlePayment}>Pay Now</button>
            </div>
        </div>
    )
}

export default Payment;