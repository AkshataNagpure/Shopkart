import { useEffect, useState, useMemo, useCallback } from "react";
import ProductCard from "../components/ProductCard";
import React from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  // Memoized product list
  const filteredProducts = useMemo(() => {
    return products.filter(p => p.price < 150);
  }, [products]);

  // Memoized handler
  const handleClick = useCallback((title) => {
    console.log("Clicked:", title);
  }, []);

    return (
        <>
            <h2 style={{textAlign:"left"}}>Products</h2>

            <div style={{ display: "flex", flexWrap: "wrap", gap:"20px", justifyContent:"center" }}>
                {products.map((item) => (
                    <ProductCard
                        key={item.id}
                        title={item.title}
                        price={item.price}
                        image={item.image}
                    />
                ))}
            </div>
        </>
    );
}

export default Products;