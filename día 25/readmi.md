## Forma de escribir funciones

```js

/* Esta funcion tiene dos parámetros y te devuelbe la suma de ambios */
function sumar ( num1, num2 ) {
    return num1+num2; /* Devolber algo cunado la llamo, recibe numero 2 y 3 y te devuelve el 2 + 3 que es 5 en este caso */

}

// Función siun nombrar
const sumar ( num1, num2 ) {
    return num1+num2;

/* este llamado a la función envía como "argumento" 2 números */
cont resultado sumar(2,3) // la constante "resutado" guarda la función de finida en la consola.

console.log(resultado); // Lo he podido impremiar que ya que guardado la fucnion en resultado, de forma que al guardarlo puedo imprimirlo.



const sumar = function(num1, num2){
    return num1+num2;
}
 
 const alumno = {
    nombre: "juan"
    edad: 34
    sumar:  fuction(num1, num2){
    return num1+num2;
    }
 }

 // Funcion sin nombrar

  const sumar = function (num1, num2){
    return num1+num2
  }
 // Funcion flecha

 const sumar = (num1, num2) => {
    return num1+num2
 }


// Funcion flecha reducidad  (solo sirve si mi funcion solo tiene una sola línea)

// Quitar llaves
// Quitar return

const sumar = (num1, num2) => num1+num2;

const saludar = (nombre) => {
    return "hola como andas"+nombre+""?";
}

const saludar = nombre => "hola como andas"+nombre+"?";
```
## Truthy / Falsy

En JS podemos tener un valor truthy o falsy. Un valor Truthy es aque que se evalua como verdadero en un contexto booleano, mientrar que falsy se evalua como falso

Podems utilizar este concepto para la toma de decisiones en nuestro código

Valores Falsy: `undefined, null, NaN, 0, "" y false´
Valores Truthy: Todos los demás

Ejemplos de valores que parecen falsy pero son truthy

```js
const val="false";  // cualquier strin que sea "" vacías es truthy
const val=-1;
const val="  ";
const val="0";
const val="null";
const val="undefined";
```
```js

edad=10
if(edad>18){
// truthy
}else {
// false
}

if(""){

    console. log("no me ejecutan nuca") // es falsy

}else{

    console. log("si me ejecuta") // como arriba falsy esto es truthy

}










