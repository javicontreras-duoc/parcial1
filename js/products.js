// Simulación de Inventario de Productos

const productosIniciales = [
    {
    id: 1,
    codigo: "MNG-001",
    nombre: "One Piece - Tomo 101",
    categoria: "Shonen",
    precio: 9990,
    stock: 12,
    stockCritico: 3,
    imagen: "https://static.wikia.nocookie.net/onepiece/images/b/b3/Volume_101.png/revision/latest?cb=20211122095619"
  },
  {
    id: 2,
    codigo: "MNG-002",
    nombre: "Berserk - Edición Deluxe Vol. 1",
    categoria: "Seinen",
    precio: 24990,
    stock: 5,
    stockCritico: 2,
    imagen: "https://images.cdn1.buscalibre.com/fit-in/660x660/24/e9/24e94a2bf598461343415bd45a5e188b.jpg"
  },
  {
    id: 3,
    codigo: "MNG-003",
    nombre: "Spy x Family - Tomo 1",
    categoria: "Shonen",
    precio: 8990,
    stock: 2, // Activa alerta de stock crítico
    stockCritico: 3,
    imagen: "https://cdnx.jumpseller.com/shazam-online/image/16527040/spyxfamily01_arg.jpg?1651594617"
  }
]

// Carga de productos destacados en la vista Home
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("featured-mangas-container");
    if (!container) return;

    container.innerHTML = productosIniciales.map(prod =>`
        <article class="product-card">
        <img src="${prod.imagen}" alt="${prod.nombre}">
        <h3>${prod.nombre}</h3>
        <p class="price">$${prod.precio.toLocaleString('es-CL')}</p>
        <button onclick="addToCart(${prod.id})" class="btn-secondary">Añadir al carrito</button>
        </article>
    `).join('');
});