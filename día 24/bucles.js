// Bucle for: ejecuta el bloque mientras i sea menor que 10
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// Bucle while: ejecuta el bloque mientras j sea menor que 10
let j = 0;
while (j < 10) {
    console.log(j);
    j++;
}

// Bucle do-while: ejecuta el bloque al menos una vez antes de evaluar la condición
let k = 25; // k es mayor que 10, por lo que el bucle solo se ejecuta una vez
do {
    console.log(k);
    k++;
} while (k < 10);

// Función que imprime "Hola"
function saludar() {
    console.log("Hola");
}

// Llamadas a la función
saludar();
saludar();

// Bucle for que llama a la función dos veces
for (let i = 0; i < 2; i++) {
    saludar();
}
