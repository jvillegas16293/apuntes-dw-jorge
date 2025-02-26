 = let numero = 1;
console.log("paso 1 y numero vale:", numero);   // Imprime en cosola el texto paso 1 y numero vale: 1
let = numero + 2;
console.log("paso 2 y numero vale:", numero);   // Imprime en cosola el texto paso 2 y numero vale: 3 

// SE LEE AL REVÉS DE DERECHA A IZQUIERDA

// Ejemplo de propiedades y métodos //
const alumno = {
    nombre: "jorge",
    edad: 32, // valores numéricos no "" para decir es número y puedes operar 
    hobbies: ["futbol", "cine", "leer"], // valores de tipo array
    saludar: function () {
        console.log("Hola, mi nombre es jorge");
    }
}
// Para imprimir el nombre del alumno usamos algo como esto:
console.log(alumno.nombre); // Imprime en consola jorge nombre objeto y propiedad del objeto
console.log("me llamo jorge", alumno.nombre, "y tengo", alumno.edad, "años"); // Imprime en consola me llamo jorge jorge y tengo 32 años
// para ejecutar un método/funcion, tenemos que usar () al final -> Imprime en consola Hola, mi nombre es jorge
alumno.saludar();


// Tipos de datos que podemos guardar en una variable //

// 2  tipos de valores -> primitivos y diferenciales

//--------------------------- Primitivos---------------------------//

let texto = "hola"; // string
let textoConComillas = 'hola estoy muy "bien"'; // string
let textoConComillasDobles = "hola estoy muy 'bien'"; // string 
let texto = 'quiero comillas 'simples' y "dobles"'; //  template string (plantilla)
texto = "Hola ${nombre}"; // template string (plantilla)

let numero = 123; // number
let numero2 = "123";
numero2 = number{ numero2 };
numero2 = number{ 123 };

let enter = 25;
let decimal = 25.5;
let negativo = -25;
const PI = 3.1416; // constante

let booleano = true; // boolean
let estaEncendido = false; // boolean
let esPrimary = true; // boolean

//--------------------------- Referenciales---------------------------//

// Objeto
const alumno = {
    nombre: "jorge",
    edad: 32,
    isRecibido: false
    presentarProyecto: = function () {
        this.isRecibido = true; // This hace referencia al objeto en el que se encuentra la propiedad
        this.edad = 34;
    },
    irseDeVacaciones: = function () {
        this.isRecibido = false;
    }

}

// Como cambiar el valor edad de un objeto
alumno.edad = 33; // Cambia la edad a 33
console.log(alumno.edad); // Imprime en consola 33

// Array  o lista
const alumnosDeDW = ["jorge", "maria", "pedro", "laura"];
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const edades = [23, 34, 45, 56, 67, 78, 89, 90];
const booleanos = [true, false, true, true, false];
const listaMista = ["jorge", 23, true, "maria", 34, false];

// Como leer un calor específico como "jorge"
console.log(alumnosDeDW[0]); // Imprime en consola jorge, usamos [] ya que es y array, y el número 0 para indicar la posición
console.log(alumnosDeDW[1]);
console.log(alumnosDeDW[2]);

// Para escribir un valor en un array
alumnosDeDW[0] = "jorge luis"; // Cambia el valor de la posición 0 por jorge luis
console.log(alumnosDeDW[0]); // Imprime en consola jorge luis

// Para agregar un valor al final de un array   -> push
alumnosDeDW.push("laura"); // Agrega laura al final del array










