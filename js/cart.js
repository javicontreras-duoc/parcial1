// Obtener carrito inicializar uno vacío
function getCart() {
    return JSON.parse(localStorage.getItem("shopping_cart")) || [];
}

// Guardar carrito en LocalStorage
function saveCart() {
    localStorage.setItem("shopping_cart", JSON.stringify(cart));
    updateCartCounter;
}

// Añadir ítem al carrito
function addToCart(productId) {
    let cart = getCart();
    const existingIndex = cart.findIndex(item => item.id === productId);

    if (existingIndex > -1) {
        cart[existingIndex].cantidad += 1;
    }
}