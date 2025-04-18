# Manipulación de textos en JavaScript

## 1. Concatenación

```js
const nombre = "Lucia";
const apellido = "Perez";

// Concatenación con el operador +
const nombreCompleto = nombre + " " + apellido; // "Lucia Perez"
console.log(nombreCompleto);

// Error corregido en la variable 'mensaje'
const edad = 25;
const mensaje = (edad + 1) + " años"; // "26 años"
console.log(mensaje);

// Concatenación usando +=
let saludo = "Hola, ";
saludo += "¿Cómo estás?";
console.log(saludo); // "Hola, ¿Cómo estás?"
```

## 2. Interpolación (Template Literals)

```js
let nombre2 = "Ana";
let edad2 = 25;

// Uso de template literals
let mensaje2 = `Hola, mi nombre es ${nombre2} y tengo ${edad2} años`;
console.log(mensaje2);

// Inserción de expresiones dentro de template literals
const total = 50;
const iva = 0.21;
console.log(`El total con impuestos es ${total + (total * iva)}`);

const fullName = `${nombre2} ${apellido}`;
console.log(fullName);
```

## 3. Métodos para manipular strings

```js
let texto = "Me encanta JavaScript";

// Convertir a minúsculas y mayúsculas
console.log(texto.toLowerCase()); // "me encanta javascript"
console.log(texto.toUpperCase()); // "ME ENCANTA JAVASCRIPT"
```

- `toUpperCase()` - Convierte toda la cadena a mayúsculas.
- `toLowerCase()` - Convierte toda la cadena a minúsculas.

```js
// Dividir una cadena en un array
const palabras = texto.split(" "); // Divide por espacios
console.log(palabras); // ["Me", "encanta", "JavaScript"]
```

- `split(separador)` - Divide una cadena en un array de subcadenas, usando el separador especificado.

```js
// Uso de slice para extraer partes de una cadena
let frase = "Aprender JavaScript es divertido";
console.log("Parte de la frase: ", frase.slice(9, 19)); // "JavaScript"
console.log(frase.slice(9)); // Desde la posición 9 hasta el final
console.log("Primeras 10 letras: ", frase.slice(0, 10));
```

- `slice(inicio, fin)` - Extrae una porción de la cadena desde el índice de inicio hasta el índice de fin.

```js
// Reemplazo de palabras en strings
let frase2 = "Hola mundo. Hola universo.";
console.log(frase2.replace("Hola", "hola")); // Reemplaza solo la primera ocurrencia
console.log(frase2.replaceAll("Hola", "hola")); // Reemplaza todas las ocurrencias
```

- `replace(valor, nuevoValor)` - Reemplaza la primera aparición de 'valor' por 'nuevoValor'.
- `replaceAll(valor, nuevoValor)` - Reemplaza todas las apariciones de 'valor' por 'nuevoValor'.

```js
// Eliminar espacios en blanco al inicio y al final
let frase3 = "    Hola nombre    ";
console.log(frase3.trim()); // "Hola nombre"
```

- `trim()` - Elimina los espacios en blanco al inicio y al final de una cadena.

```js
// Verificar si una cadena contiene otra
let frase4 = "El sol brilla en el cielo";
console.log(frase4.includes("sol")); // true
console.log(frase4.includes("luna")); // false
```

- `includes(valor)` - Devuelve true si la cadena contiene 'valor', de lo contrario, false.

```js
// Verificar si una cadena empieza o termina con otra cadena
let frase5 = "JavaScript es genial";
console.log(frase5.startsWith("Java")); // true
console.log(frase5.endsWith("genial")); // true
```

- `startsWith(valor)` - Devuelve true si la cadena comienza con 'valor'.
- `endsWith(valor)` - Devuelve true si la cadena termina con 'valor'.

```js
// Repetir una cadena un número de veces
let palabra = "Hola ";
console.log(palabra.repeat(3)); // "Hola Hola Hola "
```

- `repeat(n)` - Repite la cadena 'n' veces.

## 4. Recorrer una lista (array)

```js
const hobbiesArray = ["fútbol", "programar", "leer"];

// Obtener la cantidad de elementos en el array
const cantidad = hobbiesArray.length;
console.log("Cantidad de hobbies:", cantidad);

// Acceder a elementos específicos
console.log("Primer hobby:", hobbiesArray[0]);

// Recorrer el array con un bucle for
for (let i = 0; i < hobbiesArray.length; i++) {
    console.log(`Índice ${i}:`, hobbiesArray[i]);
}