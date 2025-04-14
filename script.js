let cart = JSON.parse(localStorage.getItem("cart")) || [];
let total = parseInt(localStorage.getItem("total")) || 0;

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  total += price;
  saveCart();
  updateCart();
}

function removeFromCart(home) {
  total -= cart[home].price;
  cart.splice(home, 1);
  saveCart();
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart");
  const totalDisplay = document.getElementById("total");

  if (!cartList || !totalDisplay) return;

  cartList.innerHTML = "";

  cart.forEach((item, home) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - ${item.price} ريال
      <button onclick="removeFromCart(${home})" class="remove-btn">❌</button>
    `;
    cartList.appendChild(li);
  });

  totalDisplay.textContent = `الإجمالي: ${total} ريال`;
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("total", total);
}
function clearCart() {
  cart = [];
  total = 0;
  saveCart();
  updateCart();
}
