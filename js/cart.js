// Obtener carrito o inicializar uno vacío
function getCart() {
    return JSON.parse(localStorage.getItem("shopping_cart")) || [];
}

// Guardar carrito en LocalStorage
function saveCart(cart) {
    localStorage.setItem("shopping_cart", JSON.stringify(cart));
    updateCartCounter();
}

// Añadir ítem al carrito
function addToCart(productId) {
    let cart = getCart();
    const existingIndex = cart.findIndex(item => item.id === productId);

    if (existingIndex > -1) {
        cart[existingIndex].cantidad += 1;
    } else {
        const product = productosIniciales.find(p => p.id === productId);
        if (product){
            cart.push({...product, cantidad: 1});
        }
    }

    saveCart(cart)
    alert("Producto añadido al carrito correctamente.");
}

function updateCartCounter(){
    const cart = getCart();
    const totalCount = cart.reduce((sum, item) => sum + item.cantidad, 0);
    const cartBadge = document.getElementById("cart-count");
    if(cartBadge){
        cartBadge.textContent = totalCount;
    }
}

document.addEventListener("DOMContentLoaded", updateCartCounter);