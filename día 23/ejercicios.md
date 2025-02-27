## Ejercicios

- Crea un array llamado frutas que contenga las siguientes frutas: "Manzana", "Banana", "Naranja".
- Imprime en la consola el primer elemento del array frutas.
- Cambia el segundo elemento del array frutas a "Mango".
- Imprime en la consola el array completo para verificar el cambio.

Ejercicio 2: Creación y acceso a objetos
- Crea un objeto llamado persona con las propiedades nombre (cadena), edad (número) y ciudad (cadena).
- Imprime en la consola el valor de la propiedad nombre del objeto persona.
- Cambia el valor de la propiedad edad a 30.
- Imprime en la consola el objeto persona completo para verificar el cambio.

Ejercicio 3: Arrays de objetos
- Crea un array llamado estudiantes que contenga tres objetos, cada uno representando a un estudiante con - las propiedades nombre y nota.
- Imprime en la consola el nombre del segundo estudiante.
- Cambia la nota del primer estudiante a 95.
- Utiliza un bucle for para imprimir el nombre y la nota de cada estudiante en la consola.

Ejercicio 4: Métodos en objetos
- Crea un objeto llamado calculadora con las propiedades a y b (números) y un método sumar que retorne la suma de a y b.
- Asigna valores a a y b y llama al método sumar, imprimiendo el resultado en la consola.

Actividad 1: Variables y Tipos de Datos

Escribir un programa que defina variables de diferentes tipos y las imprima en la consola.

Instrucciones:

Crea variables de tipo Number, String, Boolean, Null, Undefined, Symbol, y BigInt.
Imprime cada variable en la consola usando console.log.

Ejemplo:

```javascript
let numero = 42;
let texto = "Hola, mundo";
let esVerdadero = true;
let valorNulo = null;
let indefinido;

console.log(numero);
console.log(texto);
console.log(esVerdadero);
console.log(valorNulo);
console.log(indefinido);
```

Actividad 2: Operadores y Expresiones

Escribir un programa que realice operaciones aritméticas y compare valores.

Crea dos variables numéricas.
Realiza operaciones aritméticas básicas (suma, resta, multiplicación, división) y guarda los resultados en variables.
Compara los dos números usando operadores de comparación y guarda los resultados en variables.
Imprime los resultados de las operaciones y comparaciones en la consola.

Ejemplo:

```javascript
let a = 10;
let b = 5;

let suma = a + b;
let resta = a - b;
let multiplicacion = a * b;
let division = a / b;

let esIgual = (a === b);
let esMayor = (a > b);
let esMenor = (a < b);

console.log(`Suma: ${suma}`);
console.log(`Resta: ${resta}`);
console.log(`Multiplicación: ${multiplicacion}`);
console.log(`División: ${division}`);
console.log(`Es igual: ${esIgual}`);
console.log(`Es mayor: ${esMayor}`);
console.log(`Es menor: ${esMenor}`);
```

Actividad 3: Estructuras de Control
Escribir un programa que use estructuras de control para tomar decisiones.

Crea una variable edad.
Usa una estructura if-else para imprimir un mensaje indicando si la persona es mayor de edad o no.
Usa un bucle for para imprimir los números del 1 al 10.
Ejemplo:

```javascript
let edad = 18;

if (edad >= 18) {
  console.log("Eres mayor de edad.");
} else {
  console.log("Eres menor de edad.");
}

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

Actividad 4: Funciones

Crea una función saludar que reciba un nombre como parámetro y devuelva un saludo personalizado.
Crea una función sumar que reciba dos números como parámetros y devuelva su suma.
Llama a ambas funciones y muestra los resultados en la consola.

Ejemplo:

```javascript
function saludar(nombre) {
  return `Hola, ${nombre}`;
}

function sumar(a, b) {
  return a + b;
}

let saludo = saludar("Juan");
let resultadoSuma = sumar(10, 20);

console.log(saludo);
console.log(`La suma es: ${resultadoSuma}`);
```


Actividad 5: Manipulación del DOM

Escribir un programa que manipule elementos del DOM.

Crea un archivo HTML con un elemento <div> con el id "contenedor".
Escribe un script que cambie el contenido de ese <div> al hacer clic en un botón.
Ejemplo (HTML y JS):

index.html:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Manipulación del DOM</title>
</head>
<body>
  <div id="contenedor">Contenido original</div>
  <button onclick="cambiarContenido()">Cambiar Contenido</button>

  <script src="script.js">
      function cambiarContenido() {
        let contenedor = document.getElementById("contenedor");
        contenedor.textContent = "Contenido cambiado!";
      }
  </script>
</body>
</html>
```