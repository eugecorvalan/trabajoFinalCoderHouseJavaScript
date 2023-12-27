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
    
    
]

const contenedorLoft = document.querySelector("#contenedor-loft");
let loftAgregar = document.querySelectorAll(".loftAgregar");









function cargarLoft() {
    loft.forEach(loft => {
        const div = document.createElement("div");
        div.classList.add("loft");
        div.innerHTML = `
            <img class="loftImagen" src=${loft.imagen} alt="${loft.titulo}">
             <div class="loftDetalles">
            <h3 class="loftTitulo">${loft.titulo}</h3>
           <p class="loftPrecio" >${loft.precio}</p>
             <button class="loftAgregar" id="${loft.id}" >Agregar</button>
         </div>
        `;

        contenedorLoft.append(div);

    })

   // actualizoLoftAgregar();
}

cargarLoft();

//function actualizoLoftAgregar() {
  //  loftAgregar = document.querySelectorAll(".loftAgregar");

    //loftAgregar.forEach(loft => {
    //    loft.addEventListener("click",agregarAlCarrito);
   // })
//}


//function actualizoLoftAgregar() {
    // Using event delegation to handle dynamically added elements
 //   contenedorLoft.addEventListener("click", function (e) {
 //       if (e.target.classList.contains("loftAgregar")) {
   //         agregarAlCarrito(e);
     //   }
  //  });
//}

//const loftEnCarrito = [];

//function agregarAlCarrito(e) {
  //  const idLoft = e.currentTarget.id;
    //const loftAgregado = loft.find(loft => loft.id === idLoft);

   // if(loftEnCarrito.some(loft=> loft.id === loftAgregar)) {
    //    const index = loftEnCarrito.findIndex(loft => loft.id === idLoft);
      //  loftEnCarrito[index].cantidad++;

   // } else{
  //      loftAgregado.cantidad = 1;
    //    loftEnCarrito.push(loftAgregado);
    //}

    //localStorage.setItem("loftEnCarrito", JSON.stringify(loftEnCarrito));

 //}

 //function agregarAlCarrito(e) {
   // const idLoft = e.target.id;  // Use e.target.id instead of e.currentTarget.id
   // const loftAgregado = loft.find(loft => loft.id === idLoft);

   // if (loftEnCarrito.some(item => item.id === idLoft)) {
     //   const index = loftEnCarrito.findIndex(item => item.id === idLoft);
       // loftEnCarrito[index].cantidad++;
   // } else {
     //   const newLoftAgregado ={ ... loftAgregado, cantidad: 1 };
       // loftEnCarrito.push(newLoftAgregado);
    //}

   // localStorage.setItem("loftEnCarrito", JSON.stringify(loftEnCarrito));
//}



document.addEventListener('DOMContentLoaded', function () {
    var botonesAgregar = document.querySelectorAll('.loftAgregar');
    var listaCarrito = document.getElementById('listaCarrito');
    var vaciarCarritoBtn = document.getElementById('vaciarCarrito');

    var carrito = [];

    botonesAgregar.forEach(function (boton) {
        boton.addEventListener('click', function () {
            var nombre = boton.getAttribute('data-nombre');
            var precio = boton.getAttribute('data-precio');
            agregarAlCarrito(nombre, precio);
            actualizarTabla();
        });
    });


    function agregarAlCarrito(nombre, precio) {
        carrito.push({ nombre: nombre, precio: precio });
    }

    function actualizarTabla() {
        var tbody = listaCarrito.querySelector('tbody');
        tbody.innerHTML = '';

        carrito.forEach(function (producto) {
            var fila = tbody.insertRow();
            fila.innerHTML = '<td>imagen</td><td>' + producto.nombre + '</td><td>' + producto.precio + '</td><td><a href="#" class="btn-eliminar">Eliminar</a></td>';

            var btnEliminar = fila.querySelector('.btn-eliminar');
            btnEliminar.addEventListener('click', function () {
                carrito = carrito.filter(function (item) {
                    return item.nombre !== producto.nombre;
                });
                actualizarTabla();
            });
        });
    }

    vaciarCarritoBtn.addEventListener('click', function () {
        carrito = [];
        actualizarTabla();
    });
});
   