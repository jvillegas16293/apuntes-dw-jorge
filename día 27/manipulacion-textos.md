## Manipulacion de textos

1. Concatenación

```js

const  nombre="lucia";
const apellido="perez";

const nombreCompleto = nombra+" "+pellido // Lucia Perez

// Concatenar usando +=

let saludo= "hola, ";
saludo += "¿Cómo estas?";
console.log(saludo); // guarda Hola ¿Como estas?

```

2. Interpolación

Cuando usamos plantillas litrales (template literals / template Strings), se pueden insertar "variables" o "expresiones" dentro de una cadena de texto usando "&{}"

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

const palabras2 = texto.split(" encanta ");
console.log(palabras2);  // "me" "js"

const email="maria@alumnos.cei.es"
const separacion = email.split("@")
console.log(separacion); // "maria", "alumnos.cer.es


let frase= "aprender js es dvertido"
console.log("parte de la frase; ", frase.slide(9,19)); // me quedo lo que hay dento de esas dos posciones de letras
console.log(frase.slide(9)); // desde la poscion 9 hacia delante

// Esto se utiliza mucho para en el fee de post listados del blog solo se ve un determinado número de palabras


let frase = "hola mundo. hola hola hola hola universo"
console.log("remplazar hola por Hola", frase.replace("hola", "Hola")) // la primera que encuentre la reempleza por h mayuscula. cambia 1º que encuentre.

let frase="             hola nombre                 "
console.log(frase.trim()); // hola nombre

let frase="el sol brilla en el cilo"
console.log(frase.includes("sol")) // true
console.log(frase.includes("luna")) // false


