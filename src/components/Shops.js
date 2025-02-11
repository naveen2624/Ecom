import React, { useState } from "react";
import "./Shop.css";
import Cart from "./Cart";

const Shop = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (productId, productName, price, quantity) => {
    const item = {
      productId,
      productName,
      price,
      quantity: parseInt(quantity),
    };

    const existingItem = cart.find((item) => item.productId === productId);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart([...cart, item]);
    }
  };

  return (
    <section className="shop">
      <div className="product-card">
        <img src="/assets/apple.jpg" alt="Apple" />
        <h3>Apple</h3>
        <p>₹20</p>
        <input type="number" id="apple-qty" min="1" value="1" />
        <button
          onClick={() =>
            addToCart(
              "apple",
              "Apple",
              20,
              document.getElementById("apple-qty").value
            )
          }
        >
          Add to Cart
        </button>
      </div>

      <div className="product-card">
        <img src="/assets/banana.jpg" alt="Banana" />
        <h3>Banana</h3>
        <p>₹15</p>
        <input type="number" id="banana-qty" min="1" value="1" />
        <button
          onClick={() =>
            addToCart(
              "banana",
              "Banana",
              15,
              document.getElementById("banana-qty").value
            )
          }
        >
          Add to Cart
        </button>
      </div>

      <div className="product-card">
        <img src="/assets/orange.jpg" alt="Orange" />
        <h3>Orange</h3>
        <p>₹20</p>
        <input type="number" id="orange-qty" min="1" value="1" />
        <button
          onClick={() =>
            addToCart(
              "orange",
              "Orange",
              20,
              document.getElementById("orange-qty").value
            )
          }
        >
          Add to Cart
        </button>
      </div>

      <div className="product-card">
        <img src="/assets/grapes.jpg" alt="Grapes" />
        <h3>Grapes</h3>
        <p>₹30</p>
        <input type="number" id="grapes-qty" min="1" value="1" />
        <button
          onClick={() =>
            addToCart(
              "grapes",
              "Grapes",
              30,
              document.getElementById("grapes-qty").value
            )
          }
        >
          Add to Cart
        </button>
      </div>

      <div className="product-card">
        <img src="/assets/mango.jpg" alt="Mango" />
        <h3>Mango</h3>
        <p>₹50</p>
        <input type="number" id="mango-qty" min="1" value="1" />
        <button
          onClick={() =>
            addToCart(
              "mango",
              "Mango",
              50,
              document.getElementById("mango-qty").value
            )
          }
        >
          Add to Cart
        </button>
      </div>

      <div className="product-card">
        <img src="/assets/peach.jpg" alt="Peach" />
        <h3>Peach</h3>
        <p>₹80</p>
        <input type="number" id="peach-qty" min="1" value="1" />
        <button
          onClick={() =>
            addToCart(
              "peach",
              "Peach",
              80,
              document.getElementById("peach-qty").value
            )
          }
        >
          Add to Cart
        </button>
      </div>

      <Cart cart={cart} />
    </section>
  );
};

export default Shop;
