document.addEventListener("DOMContentLoaded", () => {
  // Mostrar/Ocultar Descripción
  const botonesDescripcion = document.querySelectorAll(".ver-descripcion");

  botonesDescripcion.forEach((boton) => {
    boton.addEventListener("click", () => {
      const descripcionId = boton.dataset.id;
      const descripcionElemento = document.getElementById(
        `desc-${descripcionId}`
      );

      if (descripcionElemento.style.display === "none") {
        descripcionElemento.style.display = "block";
        boton.textContent = "Ocultar Descripción";
      } else {
        descripcionElemento.style.display = "none";
        boton.textContent = "Ver Descripción";
      }
    });
  });

  // Agregar al carrito
  const botonesAgregarCarrito = document.querySelectorAll(".agregar-carrito");
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  botonesAgregarCarrito.forEach((boton) => {
    boton.addEventListener("click", () => {
      const productoId = boton.dataset.id;
      const productoNombre = boton.dataset.nombre;
      const productoPrecio = parseFloat(boton.dataset.precio);

      // Verificar si el producto ya está en el carrito
      const productoExistente = carrito.find(
        (producto) => producto.id === productoId
      );

      if (productoExistente) {
        // Si ya existe, aumentar la cantidad
        productoExistente.cantidad++;
      } else {
        // Si no existe, agregar el producto al carrito
        carrito.push({
          id: productoId,
          nombre: productoNombre,
          precio: productoPrecio,
          cantidad: 1,
        });
      }

      // Guardar el carrito en localStorage
      localStorage.setItem("carrito", JSON.stringify(carrito));
      alert(`${productoNombre} se agregó al carrito`);
    });
  });
});
//------------------------------------------------------//
document.addEventListener("DOMContentLoaded", () => {
  // Array de productos
  const productos = [
    {
      id: 1,
      nombre: "Producto 1",
      descripcion: "Fresco y delicioso.",
      precio: 10,
      imagen: "./img/sushi 01.jpeg",
    },
    {
      id: 2,
      nombre: "Producto 2",
      descripcion: "Ideal para compartir.",
      precio: 15,
      imagen: "./img/sushi 02.jpeg",
    },
    {
      id: 3,
      nombre: "Producto 3",
      descripcion: "Una experiencia única.",
      precio: 20,
      imagen: "./img/sushi 03.jpeg",
    },
    {
      id: 4,
      nombre: "Producto 4",
      descripcion: "Una experiencia única.",
      precio: 30,
      imagen: "./img/sushi 04.jpeg",
    },
  ];

  // Contenedor para los productos
  const contenedorProductos = document.getElementById("productos");

  // Crear las tarjetas dinámicamente
  productos.forEach((producto) => {
    const card = document.createElement("div");
    card.classList.add("producto");

    card.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}" />
      <h3>${producto.nombre}</h3>
      <button class="ver-descripcion" data-id="${producto.id}">Ver Descripción</button>
      <div class="descripcion" id="desc-${producto.id}" style="display: none;">
        <p>${producto.descripcion}</p>
        <p>Precio: $${producto.precio}</p>
        <button class="agregar-carrito" data-id="${producto.id}" data-nombre="${producto.nombre}" data-precio="${producto.precio}">
          Agregar al carrito
        </button>
      </div>
    `;

    contenedorProductos.appendChild(card);
  });

  // Mostrar/Ocultar descripción
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("ver-descripcion")) {
      const descripcionId = e.target.dataset.id;
      const descripcionElemento = document.getElementById(
        `desc-${descripcionId}`
      );

      if (descripcionElemento.style.display === "none") {
        descripcionElemento.style.display = "block";
        e.target.textContent = "Ocultar Descripción";
      } else {
        descripcionElemento.style.display = "none";
        e.target.textContent = "Ver Descripción";
      }
    }
  });

  // Carrito
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("agregar-carrito")) {
      const productoId = e.target.dataset.id;
      const productoNombre = e.target.dataset.nombre;
      const productoPrecio = parseFloat(e.target.dataset.precio);

      const productoExistente = carrito.find(
        (producto) => producto.id === productoId
      );

      if (productoExistente) {
        productoExistente.cantidad++;
      } else {
        carrito.push({
          id: productoId,
          nombre: productoNombre,
          precio: productoPrecio,
          cantidad: 1,
        });
      }

      localStorage.setItem("carrito", JSON.stringify(carrito));
      alert(`${productoNombre} se agregó al carrito`);
    }
  });
});
//-----------------------------------------------------//
document.addEventListener("DOMContentLoaded", () => {
  const listaCarrito = document.getElementById("lista-carrito");
  const totalCarrito = document.getElementById("total-carrito");
  const vaciarCarritoBtn = document.getElementById("vaciar-carrito");

  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  // Función para renderizar el carrito
  const renderizarCarrito = () => {
    listaCarrito.innerHTML = ""; // Limpiar contenido previo
    let total = 0;

    carrito.forEach((producto, index) => {
      const productoDiv = document.createElement("div");
      productoDiv.classList.add("producto-carrito");

      productoDiv.innerHTML = `
        <img src="./img/producto${producto.id}.jpg" alt="${producto.nombre}" />
        <div class="info">
          <p>${producto.nombre}</p>
          <p>Precio: $${producto.precio}</p>
        </div>
        <input
          type="number"
          class="cantidad"
          value="${producto.cantidad}"
          min="1"
          data-index="${index}"
        />
        <button class="boton-eliminar" data-index="${index}">Eliminar</button>
      `;

      listaCarrito.appendChild(productoDiv);

      total += producto.precio * producto.cantidad;
    });

    totalCarrito.textContent = `Total: $${total.toFixed(2)}`;
  };

  // Actualizar la cantidad de un producto
  listaCarrito.addEventListener("input", (e) => {
    if (e.target.classList.contains("cantidad")) {
      const index = e.target.dataset.index;
      const nuevaCantidad = parseInt(e.target.value);

      if (nuevaCantidad > 0) {
        carrito[index].cantidad = nuevaCantidad;
        localStorage.setItem("carrito", JSON.stringify(carrito));
        renderizarCarrito();
      }
    }
  });

  // Eliminar un producto
  listaCarrito.addEventListener("click", (e) => {
    if (e.target.classList.contains("boton-eliminar")) {
      const index = e.target.dataset.index;
      carrito.splice(index, 1); // Eliminar del array
      localStorage.setItem("carrito", JSON.stringify(carrito));
      renderizarCarrito();
    }
  });

  // Vaciar todo el carrito
  vaciarCarritoBtn.addEventListener("click", () => {
    carrito = [];
    localStorage.setItem("carrito", JSON.stringify(carrito));
    renderizarCarrito();
  });

  // Renderizar al cargar la página
  renderizarCarrito();
});
//---------------------------------------------------//
// Actualizar contador del carrito en la página
function actualizarCarrito() {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const cantidad = carrito.reduce(
    (total, producto) => total + producto.cantidad,
    0
  );
  document.getElementById("cantidad-productos").textContent = cantidad;
}

// Agregar producto al carrito
function agregarAlCarrito(producto) {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  // Verificar si el producto ya está en el carrito
  const productoExistente = carrito.find((item) => item.id === producto.id);

  if (productoExistente) {
    productoExistente.cantidad += 1; // Incrementar cantidad
  } else {
    carrito.push({ ...producto, cantidad: 1 }); // Agregar nuevo producto
  }

  // Guardar en localStorage y actualizar contador
  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarCarrito();
}

// Al cargar la página, actualizar el carrito
document.addEventListener("DOMContentLoaded", () => {
  actualizarCarrito();
});

// Vincular botón "Agregar al carrito" con la función agregarAlCarrito
document.querySelectorAll(".agregar-carrito").forEach((boton) => {
  boton.addEventListener("click", (e) => {
    const idProducto = parseInt(e.target.dataset.id); // ID del producto
    const producto = productos.find((item) => item.id === idProducto); // Buscar producto por ID
    agregarAlCarrito(producto);
  });
});
