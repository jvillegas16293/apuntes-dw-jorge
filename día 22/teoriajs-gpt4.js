// Ejemplo de declaración y uso de variables
let numero = 1; // Declaramos una variable 'numero' con el valor 1
console.log("Paso 1: El valor de numero es:", numero);   // Imprime en consola: "Paso 1: El valor de numero es: 1"

// Actualizamos el valor de la variable
numero = numero + 2; // Ahora 'numero' se incrementa en 2
console.log("Paso 2: El valor de numero es:", numero);   // Imprime en consola: "Paso 2: El valor de numero es: 3"

// Explicación: Los operadores en JavaScript se leen de derecha a izquierda (para asignación y operaciones como suma)

// Ejemplo de un objeto con propiedades y métodos
const alumno = {
    nombre: "Jorge",  // Propiedad de texto (string)
    edad: 32,         // Propiedad numérica
    hobbies: ["futbol", "cine", "leer"], // Propiedad que es un array
    saludar: function () {  // Método que imprime un saludo en consola
        console.log("Hola, mi nombre es", this.nombre); // 'this' hace referencia al objeto actual
    }
};

// Imprimir propiedades del objeto
console.log(alumno.nombre); // Imprime "Jorge"
console.log("Me llamo", alumno.nombre, "y tengo", alumno.edad, "años"); // Imprime: "Me llamo Jorge y tengo 32 años"

// Ejecutar el método del objeto
alumno.saludar(); // Imprime en consola: "Hola, mi nombre es Jorge"

// Ejemplo de tipos de datos: Primitivos y Referenciales

// Tipos de datos primitivos
let texto = "Hola";  // string
let numero = 123;    // number
let decimal = 25.5;  // number
let booleano = true; // boolean
const PI = 3.1416;   // constante

// Comparación de tipos primitivos
let numero2 = "123"; // Es un string, no un número
numero2 = Number(numero2);  // Convertimos 'numero2' a un número
console.log(numero2); // Imprime 123 como número

// Tipos de datos referenciales (objetos y arrays)
const alumno = {
    nombre: "Jorge",
    edad: 32,
    isRecibido: false,
    presentarProyecto: function () {
        this.isRecibido = true; // Cambia la propiedad 'isRecibido' del objeto
        this.edad = 34; // Cambia la propiedad 'edad'
    },
    irseDeVacaciones: function () {
        this.isRecibido = false;
    }
};

// Modificar propiedades de un objeto
alumno.edad = 33; // Cambia la edad a 33
console.log(alumno.edad); // Imprime 33

// Ejemplo de arrays
const alumnosDeDW = ["Jorge", "Maria", "Pedro", "Laura"];
const edades = [23, 34, 45, 56, 67];

// Acceder a elementos en un array
console.log(alumnosDeDW[0]); // Imprime "Jorge"
console.log(edades[2]); // Imprime 45

// Modificar elementos en un array
alumnosDeDW[0] = "Jorge Luis"; // Cambia el primer elemento del array
console.log(alumnosDeDW[0]); // Imprime "Jorge Luis"

// Agregar un nuevo valor a un array
alumnosDeDW.push("Laura"); // Agrega "Laura" al final del array

// Variables referenciales vs. primitivas
const num = 25;
// num = 30; // Error: No se puede cambiar el valor de una constante

const alumnos = ["Jorge", "Maria", "Pedro"];
alumnos[0] = "Jorge Luis"; // OK, podemos cambiar el contenido de un array

// Comentarios en JavaScript

// Comentario de una sola línea

/**
 * Esta es una función que suma dos números.
 * @param {number} num1 - El primer número a sumar
 * @param {number} num2 - El segundo número a sumar
 * @returns {number} - La suma de los dos números
 */
function suma(num1, num2) {
    return num1 + num2; // Se corregió el error en la función anterior, sumando correctamente los dos números
}

// Operadores aritméticos
let a = 1;
let b = 2;

let suma = a + b; // 3
let resta = a - b; // -1
let multiplicacion = a * b; // 2
let division = a / b; // 0.5
let modulo = a % b; // 1
let incremento = a++; // 2
let decremento = a--; // 0

// Condicionales
if (a > b) {
    console.log("a es mayor que b");
} else {
    console.log("a no es mayor que b");
}

// Operadores de comparación
console.log(1 === 1); // true: Son iguales estrictamente
console.log(1 == "1"); // true: Son iguales (sin considerar el tipo)
console.log(1 !== "1"); // true: Son diferentes
console.log(3 < 4); // true: 3 es menor que 4
console.log(5 >= 5); // true: 5 es mayor o igual que 5
