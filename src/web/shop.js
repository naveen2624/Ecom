let cart = [];

// Function to add item to cart
function addToCart(productId, productName, price, quantity) {
  let item = {
    productId: productId,
    productName: productName,
    price: price,
    quantity: parseInt(quantity),
  };

  // Check if item already exists in the cart
  let existingItem = cart.find((item) => item.productId === productId);
  if (existingItem) {
    existingItem.quantity += item.quantity;
  } else {
    cart.push(item);
  }

  displayCart();
}

// Function to display cart contents
function displayCart() {
  let cartItemsContainer = document.getElementById("cart-items");
  cartItemsContainer.innerHTML = "";

  let totalAmount = 0;

  cart.forEach((item) => {
    let cartItem = document.createElement("div");
    cartItem.innerHTML = `${item.productName} (x${item.quantity}) - ₹${
      item.price * item.quantity
    }`;
    cartItemsContainer.appendChild(cartItem);
    totalAmount += item.price * item.quantity;
  });

  document.getElementById("total-amount").innerText = totalAmount.toFixed(2);
}

// Function to handle checkout and send a WhatsApp message
function checkout() {
  let totalAmount = 0;
  let orderDetails = "";

  cart.forEach((item) => {
    totalAmount += item.price * item.quantity;
    orderDetails += `Product ID: ${item.productId}, Name: ${
      item.productName
    }, Quantity: ${item.quantity}, Price: ₹${item.price * item.quantity}\n`;
  });

  let invoice = `Invoice:\n\n${orderDetails}\nTotal Amount: ₹${totalAmount.toFixed(
    2
  )}\n\nPlease send your address details.`;

  let phoneNumber = "9842041297"; // Replace with your WhatsApp number
  let url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(invoice)}`;

  window.open(url, "_blank");
}
