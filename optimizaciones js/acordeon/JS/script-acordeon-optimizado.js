const bloque = document.querySelectorAll(".bloque");
const h2 = document.querySelectorAll(".h2");

h2.forEach((cadaH2, i) => 
    cadaH2.addEventListener("click", () => {
        bloque.forEach(cadaBloque => cadaBloque.classList.remove("activo"));
        bloque[i].classList.add("activo");
    })
);

// OPTIMIZACIONES REALIZADAS:

// 1. Uso de funciones flecha:
//    Eliminar las llaves "{}" y el "return" cuando se tiene una única expresión.
//    Esto se aplica tanto a la función dentro del primer "forEach" como en el "addEventListener".


// 2.  En el código original, había un segundo índice "i" en el segundo "forEach", que no era necesario para recorrer los bloques.
//    Usando el índice "i" del primer "forEach" directamente, eliminamos la necesidad de usar otro "i" para el segundo "forEach".


// 3. Eliminar el paréntesis alrededor de `cadaBloque` porque estamos usando un solo parámetro.


