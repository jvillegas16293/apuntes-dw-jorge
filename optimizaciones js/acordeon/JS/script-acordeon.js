const bloque = document.querySelectorAll(".bloque");
const h2 = document.querySelectorAll(".h2");

// Cuando hago clic en cada una de las etiquetas h2
// Quitar la clase activo de todos los bloques
// Después vamos a añadir la clase activo al bloque con la posición del h2

// Recorres todos los h2
h2.forEach((cadaH2, i) => {
    // Asignando un click a cada h2
    h2[i].addEventListener("click", () => {
        // Recorremos todos los bloque
        bloque.forEach((cadaBloque, i) => {
            // Quitamos la clase activo de todos los bloques
            bloque[i].classList.remove("activo");
        });
        // Añadimos la clase activo al bloque cuya posicion se igual a la del <h2>.
        // (línea número 12) 
        bloque[i].classList.add("activo");
    });
});