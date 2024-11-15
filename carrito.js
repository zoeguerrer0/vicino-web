document.querySelector('.dropdown-toogle').addEventListener('click', function() {
    document.querySelector('.dropdown-prod').classList.toggle('show');
});

// Cerrar el dropdown si el usuario hace clic fuera de él
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-toogle')) {
        var dropdowns = document.getElementsByClassName("dropdown-prod.show");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display == 'block') {
                openDropdown.style.display = 'none';
            }
        }
    }
};

// Lista de productos
let productos = [
    { id: 1, precio: 499.49, descripcion: "vestido negro" },
    { id: 2, precio: 499.49, descripcion: "vestido verde" },
    { id: 3, precio: 499.49, descripcion: "pantalon negro sastrero para hombres" },
    { id: 4, precio: 499.49, descripcion: "conjunto gris para hombres" },
    { id: 5, precio: 499.49, descripcion: "camisa para niños" },
    { id: 6, precio: 499.49, descripcion: "remera para niñas" },
    { id: 7, precio: 499.49, descripcion: "jujer" },
    { id: 8, precio: 499.49, descripcion: "prod mujerr" },
    { id: 9, precio: 499.49, descripcion: "Producto 9" },
    { id: 10, precio: 499.49, descripcion: "Producto 10" },
    { id: 11, precio: 499.49, descripcion: "Producto 11" },
    { id: 12, precio: 499.49, descripcion: "Producto 12" },
    { id: 13, precio: 499.49, descripcion: "Producto 13" },
    { id: 14, precio: 499.49, descripcion: "Producto 14" },
    { id: 15, precio: 499.49, descripcion: "Producto 15" },
    { id: 16, precio: 499.49, descripcion: "Producto 16" },
    { id: 17, precio: 499.49, descripcion: "Producto 17" },
    { id: 18, precio: 499.49, descripcion: "Producto 18" }
];


// Función para agregar un producto al carrito
function agregarAlCarrito(productoId) {
    const producto = productos.find(producto => producto.id === parseInt(productoId)); // Comparar ID correctamente
alert ('ssss');
    if (producto) {
        // Obtener el carrito del localStorage
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        alert('eee');
        // Verificar si el producto ya está en el carrito
        const productoEnCarrito = carrito.find(item => item.id === producto.id);
        if (!productoEnCarrito) {
            carrito.push(producto);
            localStorage.setItem('carrito', JSON.stringify(carrito)); // Guardar en localStorage
            alert("Producto agregado al carrito");
            renderizarCarrito(); // Llama a renderizarCarrito para actualizar la vista
        }
    } else {
        alert('Producto no encontrado');
    }
}

// Función para renderizar el carrito
function renderizarCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || []; // Obtener carrito de localStorage
    const tablaCarrito = document.querySelector('tbody');

    if (!tablaCarrito) {
        alert("No se encontró el elemento 'tbody' para mostrar el carrito");
        return;
    }

    tablaCarrito.innerHTML = ''; // Limpiar el contenido anterior

    carrito.forEach(producto => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td><div class="product-image"></div></td>
            <td>${producto.descripcion}</td>
            <td>$${producto.precio.toFixed(2)}</td>
            <td><span class="remove" data-id="${producto.id}"></span></td>
        `;
        tablaCarrito.appendChild(fila);
    });
};

// Inicializar carrito
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];


// Función para vaciar el carrito
function vaciarCarrito() {
    localStorage.removeItem('carrito'); // Eliminar el carrito del localStorage
    renderizarCarrito(); // Llama a renderizarCarrito para actualizar la vista
    alert("El carrito ha sido vaciado.");
};
document.getElementById('vaciar-carrito').addEventListener('click', vaciarCarrito);