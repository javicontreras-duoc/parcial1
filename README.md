# 📖 The One Page - Tienda de Mangas & Sistema de Gestión

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

Plataforma e-commerce para la venta de mangas, cómics y tomos de colección en Chile, acompañada de un sistema de gestión administrativo. Este proyecto fue desarrollado como parte de la **Evaluación Parcial 1 (DSY1104 - Desarrollo Web Frontend)** en **Duoc UC**.

---

## 📋 Tabla de Contenidos

1. [Descripción del Proyecto](#-descripción-del-proyecto)
2. [Características Principales](#-características-principales)
3. [Estructura del Proyecto](#-estructura-del-proyecto)
4. [Tecnologías Utilizadas](#-tecnologías-utilizadas)
5. [Reglas de Negocio y Validaciones](#-reglas-de-negocio-y-validaciones)
6. [Instrucciones de Instalación y Uso](#-instrucciones-de-instalación-y-uso)
7. [Desarrolladores](#-desarrolladores)

---

## 📑 Descripción del Proyecto

**The One Page** es una aplicación web responsiva construida exclusivamente con tecnologías frontend nativas (**HTML5, CSS3 y JavaScript ES6+**), sin frameworks externos. La solución se divide en dos entornos principales:

* **Storefront Público:** Catálogo dinámico de mangas, ficha técnica de productos, carrito de compras persistente, blog informativo, formulario de contacto y módulo de autenticación (Login/Registro) con geografía chilena dinámica.
* **Panel de Administración (`admin/`):** Dashboard con indicadores clave (métricas de ventas, total de productos y monitor de stock crítico) junto con mantenedores CRUD completos para la gestión de inventario y usuarios.

---

## 🚀 Características Principales

### 🛒 Tienda Pública
* **Home:** Banner de bienvenida, pantalla de carga (*preloader*) con animación del logo corporativo y grilla de productos destacados en formato 3x2.
* **Catálogo de Productos (`productos.html`):** Grilla adaptativa en filas de 3 columnas estilo *Banana Manga Store* con filtro interactivo por categorías (*Shonen, Seinen, Shojo, Josei*).
* **Ficha de Producto (`detalle-producto.html`):** Vista detallada con selector de cantidad, control de stock disponible y desglose de precio en CLP.
* **Carrito de Compras (`carrito.html`):**
  * Persistencia de datos en `LocalStorage`.
  * Modificación de cantidades y cálculo automático de subtotal e IVA (19%).
  * Modal personalizado de confirmación antes de eliminar productos.
  * Alertas dinámicas flotantes (tipo *Toast*) en la esquina inferior derecha.
* **Registro de Usuario con Geografía Dinámica:** Desplegable encadenado de Regiones y Comunas de Chile generado dinámicamente mediante arreglos en JS.

### ⚙️ Panel de Administración
* **Dashboard (`admin/dashboard.html`):** Monitor KPI con tarjetas de métricas y alerta visual para productos en estado de stock crítico.
* **Mantenedor de Productos (`admin/productos.html`):** Altas, bajas, modificaciones y consultas (CRUD) de mangas con control de umbral crítico.
* **Mantenedor de Usuarios (`admin/usuarios.html`):** Gestión de roles (*Administrador, Vendedor, Cliente*) y datos personales.

---

## 📁 Estructura del Proyecto

```text
the-one-page/
├── css/
│   └── styles.css          # Hoja de estilos global (Variables, Grid, Responsive, Toast, Preloader)
├── js/
│   ├── products.js        # Base de datos simulada del catálogo inicial
│   ├── cart.js            # Lógica del carrito de compras, LocalStorage y notificaciones Toast
│   └── validations.js     # Módulo de validaciones en tiempo real (RUN, Email, Contraseñas, Stock)
├── img/
│   └── logo.png           # Logo corporativo de la marca
├── admin/
│   ├── dashboard.html     # Panel principal con métricas y stock crítico
│   ├── productos.html     # Mantenedor CRUD de mangas e inventario
│   └── usuarios.html      # Mantenedor CRUD de usuarios del sistema
├── index.html             # Página de inicio / Home
├── productos.html         # Catálogo completo
├── detalle-producto.html  # Ficha técnica individual
├── nosotros.html          # Información institucional y créditos de desarrollo
├── blogs.html             # Listado de artículos y noticias
├── detalle-blog.html      # Artículo de blog individual
├── contacto.html          # Formulario de contacto con contador de caracteres
├── registro.html          # Formulario de registro con geografía dinámica
├── login.html             # Formulario de inicio de sesión
├── carrito.html           # Carrito de compras con modal personalizado
└── README.md              # Documentación del proyecto
```

---

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Estructuración semántica pura (`<header>`, `<main>`, `<nav>`, `<article>`, `<section>`, `<footer>`).
* **CSS3:** Estilos personalizados basados en variables CSS (`:root`), Flexbox, CSS Grid Responsivo, animaciones `@keyframes` y componentes reutilizables (sin Bootstrap ni Tailwind).
* **JavaScript (Vanilla ES6+):** Manipulación del DOM, eventos en tiempo real, asincronía y manejo de eventos.
* **Web Storage API (`LocalStorage`):** Persistencia local para el carrito de compras y la sincronización de inventario entre la tienda y el admin.
* **Git & GitHub:** Control de versiones colaborativo.

---

## 📐 Reglas de Negocio y Validaciones

Las validaciones del lado del cliente son procesadas en tiempo real con mensajes destacados en **rojo y negrita** (`.error-msg`):

1. **Validación de RUN Chileno:** Algoritmo **Módulo 11** para la verificación del dígito verificador (Formatos permitidos: 7 a 9 dígitos sin puntos ni guion).
2. **Restricción de Correo Electrónico:** Validación mediante expresiones regulares strictly permitiendo dominios `@gmail.com`.
3. **Contraseñas:** Longitud obligatoria entre 4 y 10 caracteres.
4. **Campos Numéricos (Precio / Stock):** Verificación de valores positivos superiores a $0 y números enteros en inventario.
5. **Alerta de Stock Crítico:** Disparo automático de advertencia cuando el stock actual es menor o igual al umbral crítico definido.

---

## 💻 Instrucciones de Instalación y Uso

1. **Clonar el Repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/the-one-page.git
   cd the-one-page
   ```

2. **Ejecutar el Proyecto:**
   No se requiere instalación de dependencias ni servidores Node.js. Simplemente abre `index.html` en cualquier navegador web moderno (Chrome, Edge, Firefox, Safari).

3. **Acceso al Panel de Administración:**
   * Haz clic en el botón **⚙️ Admin** ubicado en la esquina superior derecha del encabezado en `index.html`.
   * O navega directamente a la ruta `admin/dashboard.html`.

---

## 👩‍💻 Desarrolladores

* **Javiera Contreras** — *Desarrolladora Principal / Full-Stack Frontend*
  * Arquitectura web y maquetación semántica responsiva (HTML5 / CSS3).
  * Lógica de negocio y persistencia en `LocalStorage` para el Carrito de Compras.
  * Módulo de validaciones en tiempo real (RUN Módulo 11, Emails, Contraseñas).
  * Componentes interactivos: Notificaciones Toast, Modal personalizado y Preloader.
  * Panel Administrativo y Mantenedores CRUD de Productos y Usuarios.