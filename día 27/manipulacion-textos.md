## Manipulacion de textos

1. Concatenación

```js

const  nombre="lucia";
const apellido="perez";

const nombreCompleto = nombra+" "+pellido // Lucia Perez

cons mensaje = edad + 1; // 26
const mensaje = edad + 1 + " años"; // 251 años
const mensaje = (edad + 1) + " años";

// Concatenar usando +=

let saludo= "hola, ";
saludo += "¿Cómo estas?";
console.log(saludo); // guarda Hola ¿Como estas? AGgrrga nuevos elementos a los elementos ya existentes 

```

2. Interpolación

Cuando usamos plantillas literales (template literals / template Strings), se pueden insertar "variables" o "expresiones" dentro de una cadena de texto usando "&{}"

```js
let nombre ="Ana"
let edad ="25"

// interpolación

let mensaje=`Hola, mi nombre es ${nombre} y tengo ${edad} años`;

// insertar expresión

const total=50;
const iva=0.21;
console.log (`el total con imuesto es ${total + (total*ina)}`);

const FullName= `${nombre}, ${apellido}`;


const hobbies = ["futbl", "basket", "baloncesto"]

const texto="el total como impuestos"; // esto no deja de ser una lista de letras

```

3. Métodos o funciones que podemos aplicar a las strings o listas

JS nos ofrece multiples métodos/funciones para manipular cadenas de texto

- `toUpperCase()` y `toLowerCase()`

- `split()`

- `slice()` // porcion

- `replace()` / `replaceAll()`

- `trim` // Elimina todos los espacios en blanco al inicio y al fin de la cadena

- `includes()`

- `sartsWidth()` y `endsWidth()` // Verifica su una cadena comienza o termina con una seb cadena especíofica

- `repeat()` // repite una cadena un número específico de veces.

```js

let texto = "me encanta js"

console.log(texto.tolowerCase()); // me encanta js
console.log(texto.toUpperCase()); // ME ENCANTA JS

const palabras= texto.split(" ")
console.log(palabras); // "me" "encanta" "js"

const palabras= texto.split("a") // para cuendo en la frase encuentra una a y vs diguiendo hasta la siguiente letra a
console.log(palabras); // "me enc" "nt"
console.log(palabras[1]); // se imprime nt

const palabras2 = texto.split(" encanta ");
console.log(palabras2);  // "me" "js"

const email="maria@alumnos.cei.es"
const separacion = email.split("@")
console.log(separacion); // "maria", "alumnos.cer.es


let frase= "aprender js es dvertido"
console.log("parte de la frase; ", frase.slide(9,19)); // me quedo lo que hay dento de esas dos posciones de letras
console.log(frase.slide(9)); // desde la poscion 9 hacia delante
console.log("primeras 10 letras", frase.slide(0, 10)); // primeras 10 letras

// Esto se utiliza mucho para en el fee de post listados del blog solo se ve un determinado número de palabras


let frase = "hola mundo. hola hola hola hola universo"
console.log("remplazar hola por Hola", frase.replace("hola", "Hola")) // la primera que encuentre la reempleza por h mayuscula. cambia 1º que encuentre.



let frase="             hola nombre                 "
console.log(frase.trim()); // hola nombre

// Saca los espaciones extra del inicio y del final. Se utiliza mucho en los formularios etiqueta <textareas> y form

let frase="el sol brilla en el cilo"
console.log(frase.includes("sol")) // true
console.log(frase.includes("luna")) // false

// starsWidth y endsWidth

let frase="javascript es genial"

console.log("¿Empieza coin java" frase.starsWidth("java")); // true
console.log( frese.starsWidth("java")): // False
console.log(frase.endsWidth("genial")); // True

//------------------RRECORRER UNA LISTA----------------------------------//

// Declaración de un array llamado 'hobbies' que almacena tres cadenas de texto
const hobbies = ["futbol", "programar", "leer"];

// Propiedad 'length': Devuelve la cantidad de elementos en el array
const cant = hobbies.length;
console.log("Cantidad de hobbies:", cant);

// Acceso a un elemento específico del array por su índice (el primer elemento está en la posición 0)
console.log("Primer hobby:", hobbies[0]);

// Bucle 'for': Se usa para recorrer el array elemento por elemento
for (let i = 0; i < hobbies.length; i++) {  
    // 'i' es la variable de control que representa el índice actual del array
    console.log("Índice i:", i); 

    // Acceso al elemento actual del array usando 'hobbies[i]'
    console.log("Hobby en la posición " + i + ":", hobbies[i]); 
}
