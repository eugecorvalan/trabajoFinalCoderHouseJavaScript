// LOFTS

const loft = [
    
    {
        id:"loft-01",
        titulo:"Loft 01",
        imagen:"./images/loft4.webp",
        categoria:{
            nombre: "loft",
            id: "loft"
        },
        precio: 20000
    },
    {
        id:"loft-02",
        titulo:"Loft 02",
        imagen:"./images/loft5.webp",
        categoria:{
            nombre: "loft",
            id: "loft"
        },
        precio: 20000
    },
    
    {
        id:"loft-03",
        titulo:"Loft 03",
        imagen:"./images/loft6.webp",
        categoria:{
            nombre: "loft",
            id: "loft"
        },
        precio: 20000
    },
    
    {
        id:"loft-04",
        titulo:"Loft 04",
        imagen:"./images/loft7.webp",
        categoria:{
            nombre: "loft",
            id: "loft"
        },
        precio: 20000
    },
    
    {
        id:"loft-05",
        titulo:"Loft 05",
        imagen:"./images/loft8.webp",
        categoria:{
            nombre: "loft",
            id: "loft"
        },
        precio: 20000
    },
    
    {
        id:"loft-06",
        titulo:"Loft 06",
        imagen:"./images/loft9.webp",
        categoria:{
            nombre: "loft",
            id: "loft"
        },
        precio: 20000
    },
    
    {
        id:"loft-07",
        titulo:"Loft 7",
        imagen:"./images/loft10.webp",
        categoria:{
            nombre: "loft",
            id: "loft"
        },
        precio: 20000
    },
    
    {
        id:"loft-08",
        titulo:"Loft 8",
        imagen:"./images/loft11.webp",
        categoria:{
            nombre: "loft",
            id: "loft"
        },
        precio: 20000
    },
    
    {
        id:"loft-09",
        titulo:"Loft 09",
        imagen:"./images/loft12.webp",
        categoria:{
            nombre: "loft",
            id: "loft"
        },
        precio: 20000
    },
    
    {
        id:"loft-10",
        titulo:"Loft 10",
        imagen:"./images/loft13.jpg",
        categoria:{
            nombre: "loft",
            id: "loft"
        },
        precio: 20000
    },
    
    {
        id:"loft-11",
        titulo:"Loft 11",
        imagen:"./images/loft12.webp",
        categoria:{
            nombre: "loft",
            id: "loft"
        },
        precio: 20000
    },
    
    {
        id:"loft-12",
        titulo:"Loft 12",
        imagen:"./images/loft15.webp",
        categoria:{
            nombre: "loft",
            id: "loft"
        },
        precio: 20000
    }
    
    
];

const contenedorLoft = document.querySelector("#contenedor-loft");
//let loftAgregar = document.querySelectorAll(".loftAgregar");


let carrito = JSON.parse(localStorage.getItem('loftEnCarrito')) || [];
const listaCarrito = document.getElementById('listaCarrito');
const vaciarCarritoBtn = document.getElementById('vaciarCarrito');

function cargarLoft() {
    loft.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("loft");
        div.innerHTML = `
            <img class="loftImagen" src=${item.imagen} alt="${item.titulo}">
            <div class="loftDetalles">
                <h3 class="loftTitulo">${item.titulo}</h3>
                <p class="loftPrecio">${item.precio.toLocaleString('es-AR', { style: 'currency', currency: 'USD' })}</p>
                <button class="loftAgregar" data-nombre="${item.titulo}" data-precio="${item.precio}" data-imagen="${item.imagen}">Agregar</button>
            </div>
        `;

        contenedorLoft.append(div);
    });
}

function agregarAlCarrito(nombre, precio, imagen) {
    // Verificar si el producto ya está en el carrito
    const productoExistente = carrito.find(item => item.nombre === nombre);
    
    if (productoExistente) {
        // Si existe, incrementar la cantidad
        productoExistente.cantidad = (productoExistente.cantidad || 1) + 1;
    } else {
        // Si no existe, agregarlo al carrito
        carrito.push({ nombre: nombre, precio: precio, imagen: imagen, cantidad: 1 });
    }

    // Actualizar el carrito en localStorage
    localStorage.setItem('loftEnCarrito', JSON.stringify(carrito));

    Swal.fire(
        {
            icon: 'success',
            title: 'Agregado al carrito',
            text: `${nombre} se ha agregado al carrito`,

        }
    );
    actualizarTabla();
}

function actualizarTabla() {
    var tbody = listaCarrito.querySelector('tbody');
    tbody.innerHTML = '';

    carrito.forEach(function (producto) {
        var fila = tbody.insertRow();
        fila.innerHTML = `<td><img src="${producto.imagen}" alt="${producto.nombre}"></td><td>${producto.nombre}</td><td>${producto.precio}</td><td>${producto.cantidad}</td><td><a href="#" class="btn-eliminar">Eliminar</a></td>`;

        var btnEliminar = fila.querySelector('.btn-eliminar');
        btnEliminar.addEventListener('click', function () {
            // Decrementar la cantidad o eliminar el producto si la cantidad es 1
            if (producto.cantidad && producto.cantidad > 1) {
                producto.cantidad--;
            } else {
                carrito = carrito.filter(function (item) {
                    return item.nombre !== producto.nombre;
                });
            }

            // Actualizar el carrito en localStorage
            localStorage.setItem('loftEnCarrito', JSON.stringify(carrito));
            Swal.fire({
                icon: 'success',
                title: 'Eliminado del carrito',
                text: `${producto.nombre} se ha eliminado del carrito.`,
            });

           
            actualizarTabla();
        });
    });
}

vaciarCarritoBtn.addEventListener('click', function () {
    carrito = [];
    localStorage.removeItem('loftEnCarrito');
    actualizarTabla();
});

// Cargar el loft y actualizar los botonesAgregar después de que el DOM está completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    cargarLoft();
    
    // Agregar eventos de clic a los botones de agregar solo una vez
    contenedorLoft.addEventListener('click', function (event) {
        if (event.target.classList.contains('loftAgregar')) {
            var nombre = event.target.getAttribute('data-nombre');
            var precio = event.target.getAttribute('data-precio');
            var imagen = event.target.getAttribute('data-imagen');
            agregarAlCarrito(nombre, precio, imagen);
            actualizarTabla();
        }
    });
    
    actualizarTabla();
});


