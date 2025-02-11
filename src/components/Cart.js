import React from "react";

const Cart = ({ cart }) => {
  const checkout = () => {
    let orderDetails = cart
      .map(
        (item) =>
          `Product: ${item.productName}, Quantity: ${item.quantity}, Price: ₹${
            item.price * item.quantity
          }`
      )
      .join("\n");

    let totalAmount = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    let invoice = `Invoice:\n\n${orderDetails}\nTotal Amount: ₹${totalAmount.toFixed(
      2
    )}\n\nPlease send your address details.`;
    let phoneNumber = "9842041297";
    let url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      invoice
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section className="cart">
      <h2>Cart</h2>
      <div id="cart-items">
        {cart.map((item, index) => (
          <div key={index}>
            {item.productName} (x{item.quantity}) - ₹
            {item.price * item.quantity}
          </div>
        ))}
      </div>
      <p>
        Total Amount: ₹
        {cart
          .reduce((acc, item) => acc + item.price * item.quantity, 0)
          .toFixed(2)}
      </p>
      <button onClick={checkout}>Buy Now</button>
    </section>
  );
};

export default Cart;
