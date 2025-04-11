// script.js
let cart = [];

function addToCart(product, price) {
    cart.push({ product, price });
    updateCart();
}

function updateCart() {
    const cartCount = document.getElementById("cart-count");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    cartCount.textContent = cart.length;
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.product} - $${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });
    cartTotal.textContent = total;
}
  
function showCart() {
    document.getElementById("cart-section").classList.toggle("hidden");
}

function showLogin() {
    document.getElementById("auth-modal").classList.toggle("hidden");
}

function login() {
    alert("Login functionality will be implemented later.");
}

function register() {
    alert("Register functionality will be implemented later.");
}

function checkout() {
    alert("Checkout process will be implemented later.");
}
function changeGalleryImage(newImage) {
    document.getElementById("smartwatch-main").src = newImage;
}
function swapImage(thumbnail) {
    document.getElementById('main-image').src = thumbnail.src;
  }

  function scrollThumbnails(distance) {
    const container = document.getElementById('thumbnail-scroll');
    container.scrollBy({ left: distance, behavior: 'smooth' });
  }
