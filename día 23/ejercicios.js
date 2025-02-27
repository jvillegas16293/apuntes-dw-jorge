// Ejercicio 1: Creación y acceso a arrays //

// Crea un array llamado frutas que contenga las siguientes frutas: "Manzana", "Banana", "Naranja".
const frutas = ["manzana", "banana", "naranja"]

// Imprime en la consola el primer elemento del array frutas.
console.log(frutas[0]);
console.log(frutas[1]);

// Cambia el segundo elemento del array frutas a "Mango".
frutas[1] = "mango";

// Imprime en la consola el objeto persona completo para verificar el cambio.
console.log(frutas[2]);
console.log(frutas.lengt); // Imprime en consola 3

// Ejercicio 2: Creación y acceso a objetos //

// Crea un objeto llamado persona con las propiedades nombre (cadena), edad (número) y ciudad (cadena).
const persona = {

    nombre: "jorge",
    edad: 32,
    ciudad: "Rosario"

}

// mprime en la consola el valor de la propiedad nombre del objeto persona.
console.log persona.nombre = "jorge"

// Cambia el valor de la propiedad edad a 30.
persona.edad = 30;

// Imprime en la consola el objeto persona completo para verificar el cambio.
console.log(persona);

// Ejercicio 3: Arrays de objetos

// Crea un array llamado estudiantes que contenga tres objetos, cada uno representando a un estudiante con - las propiedades nombre y nota.

const listaestudiantes = [
    {
        nombre: "jorge",
        nota: 10
    },
    {
        nombre: "maria",
        nota: 10
    },
    {
        nombre: "jorge",
        nota: 10
    },
];

const listaestudiantes = [
    {nombre: "jorge",nota: 10},
    {nombre: "jorge",nota: 10},
    {nombre: "jorge",nota: 10},
];

// - Imprime en la consola el nombre del segundo estudiante.

console.log(listaestudiantes[1].nombre); // nombre: maria
console.log(listaestudiantes[1]); // maria

// - Cambia la nota del primer estudiante a 95.

listaestudiantes[0].nota = 95;

// Utiliza un bucle for para imprimir el nombre y la nota de cada estudiante en la consola.

for( const i=0 i<10 i=i+1){
    console.log(listaestudiantes[i].nombre);
    console.log(listaestudiantes[i].nota);
}

// Ejercicio 4: Métodos en objetos

// - Crea un objeto llamado calculadora con las propiedades a y b (números) y un método sumar que retorne la suma de a y b.

const calculadora = {
    a: 10,
    b: 20,
    sumar: function(){
        return this.a + this.b;
    }   
}

console.log(calculadora.a); // Imprime en consola 10
console.log(calculadora.b); // Imprime en consola 20
console.log(calculadora.sumar()); // Imprime en consola 30

//Le estoy diciendo que la calculadora a  y b ahora valen 30 y 40 respectivamente
calculadora.a = 30;
calculadora.b = 40;
calculadora.sumar(); // Imprime en consola 70

// Actividad 1: Variables y Tipos de Datos

let numero = 10;
let texto = "esto es una actividad";
let esVerdadero = true;
let esFalso = false;
let valorNulo = null;
let noDefinido = undefined;

const programa = {

    numero = 10;
    texto = "esto es una actividad";
    esVerdadero = true;
    esFalso = false;
    valorNulo = null;
    noDefinido = undefined;

}

console.log(programa.numero); // Imprime en consola 10
console.log(programa.texto); // Imprime en consola esto es una actividad
console.log(programa.esVerdadero); // Imprime en consola true
console.log(programa.esFalso); // Imprime en consola false
console.log(programa.valorNulo); // Imprime en consola null
console.log(programa.noDefinido); // Imprime en consola undefined


// Actividad 2: Operadores y Expresiones

// Definir dos variables numéricas
let num1 = 10;
let num2 = 5;

// Operaciones aritméticas
let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num1 / num2;
let incremento = num1++;
let decremento = num1--;

// Comparaciones
let esMayor = num1 > num2;
let esMenor = num1 < num2;
let esIgual = num1 === num2;
let esDiferente = num1 !== num2;

// Imprimir resultados en la consola
console.log("Suma:", suma); // Imprime en consola 15
console.log("Resta:", resta); // Imprime en consola 5
console.log("Multiplicación:", multiplicacion); // Imprime en consola 50
console.log("División:", division); // Imprime en consola 2
console.log("¿num1 es mayor que num2?:", esMayor); // Imprime en consola true
console.log("¿num1 es menor que num2?:", esMenor); // Imprime en consola false
console.log("¿num1 es igual a num2?:", esIgual); // Imprime en consola false   
console.log("¿num1 es diferente de num2?:", esDiferente); // Imprime en consola true    

// Actividad 3: Estructuras de Control

let edad = 18;

if (edad >= 18) {
  console.log("Eres mayor de edad.");
} else {
  console.log("Eres menor de edad.");
}

for (let i = 1; i <= 10; i++) {
  console.log(i);
}










