## Operacion ternaria 

Una forma de escribirt el `if......else....` Se compone de 3 partes:

1. Una expresion que se evalua
2. expresion que se ejecuta en caso de ser cierta
3. expresion que se ejecuta en casa de ser falsa

Simplifica la legibilidad, pero no se recomienda para anidar operaciones ternarias, o cuado el resultado de la operacion es muy complejo o posea mas de una línea 


```js

let numero = 10;

if(numero % 2 == 0){
    mesnaje = "Es par"
} else {
    mensaje="impar"
}

// Version ternaria

let mensaje = (numero%2 ==0) ? "Es par" : "Es impar"; // El resultado se guarda en mesaje


if (edad >=19){
    mensaje = "Es mayor de edad"
} else {
    mensaje = "es menor de edad"
}

let mensaje = (edad >=18) ? "Es meyor de edad" : "es menor de edad"; 
let mensaje = edad >=18 ? "Es meyor de edad" : "es menor de edad"; 

let mensaje = edad >=18 ? "Es meyor de edad" 
                        : "es menor de edad"; 


```

- No se puede utilizar ternarias si no el ·else..." Solo me sirven si tengo e truthy o falsy

 if (edad >=19){
    mensaje = "Es mayor de edad"
}

- No se utiliza si el resultado es muy complejo

```js

if (edad >=19){
    mensaje = "Es mayor de edad"
} else {
    mensaje = "es menor de edad"
    console.log(mensaje)
}

// Esto no se puede hacer con ternarias, solo para hacer una cosa.

```

```js
// Ternaria "más dificil"

// funcion que recibe dos números y devuelve el mayor


function mayor(num1, num2) {
    if (num1>num2){
      return num1;

    } else {
        return num2;
    }
}

// forma ternaria

function mayor(num1, num2) {

        return num1>num1 ? num1 ; num2;
}


numMayor = mayor(5,3); // 5
numMayor = mayor(-5.7); // 7
```

Crear una funcion que reciba dos parámetros (juagador1 y jugador2) y que devuelba si el jugador uno le gana el jugador2 en "piedra", "papel", "tijera".

```js

function juego (j1, j2) {
    // caso empate
  if(j1 == j2){ return "empataron"; } 
    // caso gana jugadro 2
  if((j1 === "tijeras" && j2 === "papek")
    (j1 === "piedra" && j2 === "tijeras")
    (j1 === "pepel" && j2 === "piedra")
    ){
        return "gano el jugador 1";
  } else {

    return "gani jugador 2"
  }}
```
## Recorrer Arreys / Listas

### ForEach

- Recorre cada item de un array, y ejecuta una función del mismo
Se le asigna una variable a cada item. 



Ejemplo:

listaLetras -> alumno
listaLetras -> letra
listaLetras -> hobbie
```js

const listaLetras = ["a", "b", "c"];

listaLetras.forEach( (letra)=>{
    letra = letra.toUpperCase();
    console.log(letra);

} )
```
## Modificar elemntos Don con FerEach

Si queremos usar le indice podemos leerlo agregando un segundo valor a nuestra función flecha

```js

const listaLetras = ["a", "b", "c"];

listaLetras.forEach( (letra)=>{
    letra = letra.toUpperCase();
    console.log(letra);

} )

console.log.ListaLetras ()
```

```js
// Declaramos un array llamado 'listaLetras' que contiene tres elementos de tipo string
const listaLetras = ["a", "b", "c"];

// Usamos el método forEach para recorrer cada elemento del array
listaLetras.forEach((letra, indice) => {
    // Imprimimos en la consola cada letra junto con su índice dentro del array
    console.log(letra, indice); // Output: "a 0", "b 1", "c 2"

    // Convertimos la letra actual a mayúscula y la guardamos en la misma posición del array
    listaLetras[indice] = letra.toUpperCase();
});

// Ahora, 'listaLetras' ha sido modificada y contiene ["A", "B", "C"]
console.log(listaLetras); // Output: ["A", "B", "C"]


console.log(listaLetras);
```
###  Map

Si deseamos generar una copia de  la lista, podemos utilizar el método map()
quien crear una nueva array con los resultados de la función flecha

```js

const listaNumeros = [1,2,3,4,5];

const nuevaLista = listaNumeros.map( (numero)=> {
    return numero * 2;
});

console.log(listaNumeros);
console.log(nuevaLista);

```






