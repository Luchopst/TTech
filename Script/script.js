// Obtener todos los botones de ver descripción
const botonesDescripcion = document.querySelectorAll(".ver-descripcion");

// Agregar un evento 'click' a cada uno de los botones
botonesDescripcion.forEach((boton) => {
  boton.addEventListener("click", function () {
    // Obtener el contenedor del producto que fue clickeado
    const producto = boton.closest(".producto");

    // Obtener la descripción
    const descripcion = producto.querySelector(".descripcion");

    // Alternar la visibilidad de la descripción
    if (descripcion.style.display === "none") {
      descripcion.style.display = "block"; // Mostrar descripción
      boton.textContent = "Ocultar descripción"; // Cambiar el texto del botón
    } else {
      descripcion.style.display = "none"; // Ocultar descripción
      boton.textContent = "Ver descripción"; // Restablecer el texto del botón
    }
  });
});
 var listaProductos=["prod-1","prod-2