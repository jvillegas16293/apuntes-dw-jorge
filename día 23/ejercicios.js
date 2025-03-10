// Ejercicio 1: Creación y acceso a arrays

// Crea un array llamado frutas que contenga las siguientes frutas: "Manzana", "Banana", "Naranja".
const frutas = ["Manzana", "Banana", "Naranja"];

// Imprime en la consola el primer y segundo elemento del array frutas.
console.log(frutas[0]); // Imprime "Manzana"
console.log(frutas[1]); // Imprime "Banana"

// Cambia el segundo elemento del array frutas a "Mango".
frutas[1] = "Mango";

// Imprime en la consola el tercer elemento del array frutas.
console.log(frutas[2]); // Imprime "Naranja"

// Imprime en la consola la longitud del array.
console.log(frutas.length); // Imprime 3

// ---------------------------------------------------

// Ejercicio 2: Creación y acceso a objetos

// Crea un objeto llamado persona con las propiedades nombre, edad y ciudad.
const persona = {
    nombre: "Jorge",
    edad: 32,
    ciudad: "Rosario"
};

// Imprime en la consola el valor de la propiedad nombre del objeto persona.
console.log(persona.nombre); // Imprime "Jorge"

// Cambia el valor de la propiedad edad a 30.
persona.edad = 30;

// Imprime en la consola el objeto persona completo para verificar el cambio.
console.log(persona);

// ---------------------------------------------------

// Ejercicio 3: Arrays de objetos

// Crea un array llamado listaEstudiantes con tres objetos, cada uno representando a un estudiante.
const listaEstudiantes = [
    { nombre: "Jorge", nota: 10 },
    { nombre: "Maria", nota: 10 },
    { nombre: "Pedro", nota: 10 }
];

// Imprime en la consola el nombre del segundo estudiante.
console.log(listaEstudiantes[1].nombre); // Imprime "Maria"
console.log(listaEstudiantes[1]); // Imprime el objeto de Maria

// Cambia la nota del primer estudiante a 95.
listaEstudiantes[0].nota = 95;

// Utiliza un bucle for para imprimir el nombre y la nota de cada estudiante en la consola.
for (let i = 0; i < listaEstudiantes.length; i++) {
    console.log(listaEstudiantes[i].nombre, ":", listaEstudiantes[i].nota);
}

// ---------------------------------------------------

// Ejercicio 4: Métodos en objetos

// Crea un objeto llamado calculadora con las propiedades a y b, y un método sumar.
const calculadora = {
    a: 10,
    b: 20,
    sumar: function () {
        return this.a + this.b;
    }
};

// Imprime los valores de a y b, y la suma.
console.log(calculadora.a); // Imprime 10
console.log(calculadora.b); // Imprime 20
console.log(calculadora.sumar()); // Imprime 30

// Cambia los valores de a y b.
calculadora.a = 30;
calculadora.b = 40;

// Imprime la nueva suma.
console.log(calculadora.sumar()); // Imprime 70

// ---------------------------------------------------

// Actividad 1: Variables y Tipos de Datos

let numero = 10;
let texto = "Esto es una actividad";
let esVerdadero = true;
let esFalso = false;
let valorNulo = null;
let noDefinido = undefined;

// Crea un objeto programa con las mismas propiedades.
const programa = {
    numero: 10,
    texto: "Esto es una actividad",
    esVerdadero: true,
    esFalso: false,
    valorNulo: null,
    noDefinido: undefined
};

// Imprime las propiedades del objeto programa.
console.log(programa.numero); // Imprime 10
console.log(programa.texto); // Imprime "Esto es una actividad"
console.log(programa.esVerdadero); // Imprime true
console.log(programa.esFalso); // Imprime false
console.log(programa.valorNulo); // Imprime null
console.log(programa.noDefinido); // Imprime undefined

// ---------------------------------------------------

// Actividad 2: Operadores y Expresiones

// Definir dos variables numéricas
let num1 = 10;
let num2 = 5;

// Operaciones aritméticas
let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num1 / num2;
let incremento = ++num1;
let decremento = --num1;

// Comparaciones
let esMayor = num1 > num2;
let esMenor = num1 < num2;
let esIgual = num1 === num2;
let esDiferente = num1 !== num2;

// Imprimir resultados en la consola
console.log("Suma:", suma); // 15
console.log("Resta:", resta); // 5
console.log("Multiplicación:", multiplicacion); // 50
console.log("División:", division); // 2
console.log("¿num1 es mayor que num2?:", esMayor); // true
console.log("¿num1 es menor que num2?:", esMenor); // false
console.log("¿num1 es igual a num2?:", esIgual); // false
console.log("¿num1 es diferente de num2?:", esDiferente); // true

// ---------------------------------------------------

// Actividad 3: Estructuras de Control

// Sentencia if
let edad = 18;

if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}

// Bucle for que imprime los números del 1 al 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
