import {useNavigate} from "react-router-dom";
import "./OrderSuccess.css";

function OrderSuccess() {
    const navigate = useNavigate();
    return (
        <div className="success-container">
            <div className="success-card">
                <h2>Order Placed Successfully!</h2>
                <p>Thank you for shopping with shopkart. Your order has been placed successfully.</p>
                <button onClick={() => navigate("/")}>
                    Continue Shopping
                </button>
            </div>
        </div>
    );


}

export default OrderSuccess;