
import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return (
        <div className="home-container">

            <section className="hero-section">
                <div className="hero-content">
                    <h1>Welcome to ShopKart</h1>

                    <h2>EVERYTHING YOU NEED, DELIVERED TO YOUR DOOR</h2>

                    <p>
                        Shop electronics, fashion, home essentials, and more from the comfort of your home.
                        Enjoy fast shipping and great deals on a wide range of products.
                    </p>

                    <button onClick={() => navigate("/products")}>
                        Shop Now
                    </button>
                </div>
            </section>

            <section className="deals">

                <h1>Why Choose ShopKart?</h1>

                <div className="product-section">

                    <div className="product-box">
                        <img
                            src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&q=80"
                            alt="Smart Watch"
                        />

                        <h3>Smart Watches</h3>

                        <p>Starting at ₹199</p>

                        <button onClick={() => navigate("/products")}>
                            Buy Now
                        </button>
                    </div>


                    <div className="product-box">
                        <img
                            src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&q=80"
                            alt="Latest Mobile"
                        />

                        <h3>Latest Mobiles</h3>

                        <p>Upto 50% OFF</p>

                        <button onClick={() => navigate("/products")}>
                            Buy Now
                        </button>
                    </div>


                    <div className="product-box">
                        <img
                            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80"
                            alt="Fashion Shoes"
                        />

                        <h3>Fashion Shoes</h3>

                        <p>Flat 40% OFF</p>

                        <button onClick={() => navigate("/products")}>
                            Buy Now
                        </button>
                    </div>

                </div>
            </section>


            <section className="services">

                <h1>Why Shop with Us?</h1>

                <div className="service-container">
                    <h3>Fast Shipping</h3>
                    <p>Get your products delivered quickly and safely.</p>
                </div>

                <div className="service-container">
                    <h3>Best Prices</h3>
                    <p>Enjoy the lowest prices on all your favorite products.</p>
                </div>

                <div className="service-container">
                    <h3>24/7 Support</h3>
                    <p>Our customer support team is always ready to help you.</p>
                </div>

                <div className="service-container">
                    <h3>Easy Returns</h3>
                    <p>Not satisfied with your purchase? No problem! We offer easy returns.</p>
                </div>

                <div className="service-container">
                    <h3>Secure Payments</h3>
                    <p>Shop with confidence knowing your payment information is safe and secure.</p>
                </div>

            </section>

        </div>
    );
}

export default Home;
