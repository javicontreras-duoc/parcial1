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
    showToast("¡Manga añadido al carrito exitosamente!", "success");
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

// Ocultar pantalla de carga automáticamente al terminar de cargar las imágenes y scripts 
window.addEventListener("load", () => { 
    const preloader = document.getElementById("preloader"); 
    if (preloader) { preloader.classList.add("hidden"); 
    } 
});

function showToast(mensaje, tipo = "success") {
    let container = document.getElementById("toast-container");

    if (!container) {
        container = document.createElement("div");
        container.id = "toast-container";
        document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = `toast ${tipo}`;

    const icono = tipo === "success" ? "✅" : tipo === "error" ? "❌" : "⚠️";
    toast.innerHTML = `
        <span>${icono}</span> 
        <span>${mensaje}</span>
        `;

        container.appendChild(toast);

        setTimeout(() => {
            toast.remove();
        }, 3000);
}