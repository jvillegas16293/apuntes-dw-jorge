### MÉTODOS DE ARRAYS -> AGEGAR O QUITAR ALGO A LAS LISTAS

# Pop()

El método `Pop()`. elimina el ultimo elemento de una array, y lo devuelve.
Este metodo modifica la longitud de la array.

```js

let frutas=["manzanas", "naranja", "tomate", "uvas", "bananas"];

let ultimoElemento = frutas.pop();

console.log(frutas);
console.log(ultimoElemento);

```

## Push()

El método push, es una de los mas comunes, añade uno o mas elementos al final de una array.
Me devuelve la nueva longitud del array.

```js

let frutas=["manzanas", "naranja",];

let nuevaLongitud = frutas.push("pera", "tomate");

console.log(frutas);

console.log(nuevaLongitud);

```
## Shift()

Este método, elimina el primer elemento de la array y lo devuelve. Este método modifica la longitud del array.


```js

let frutas=["manzanas", "naranja", "tomate", "uvas", "bananas"];

let elementoQuitado = frutas.shift();

console.log(frutas);

console.log(elementoQuitado);

```

## Unshift()

Agrega un o multiples elementos al inicio del array. Devuelve la nueva longitud del array


```js

let frutas=["manzanas", "naranja", "tomate"];

let nuevaLongitud = frutas.unshift("pera", "ciruela");

console.log(frutas);

console.log(nuevaLongitud);

```
## Splice()

Este método, cambia el contenido de una array, eliminando, creando o reemplazando sus elementos. Modifica el valor original y recibe 3 parámetros. Devuelve los elemtos eliminados.

- 1º recibe el indice del vector donde se va a realizar la peracion
- 2º recibe la cantidad de elementos a eliminar
- 3 elemento. Los elementos que quiero agregar

```js

let frutas=["manzanas", "naranja", "tomate", "uvas", "bananas"];

let frutasEliminadas = frutas.splice(2, 2, "pera", "ciruela");

console.log(frutas); // "manzanas", "naranja", ""pera", "ciruela", "bananas"

console.log(frutasEliminadas); // "tomate", "uvas",

```

Ejercicio Splice

```js

let lenguajes = ["python", "java", "javascript", "php", "C++", "C#"];

lenguajes.splice(0, 1); // elimina el elemento python, primer valor de la array, se comparta igual que Shift
lenguajes.splice(-1, 1); // elimina el ultimo valor de la array, igual que pop(). quita C#
lenguajes.splice(-1. 0 "C", "Cobol"); //  Se posiciona al final, no borra nada y agrega "c y "Cobolo"

// quitar 2 elementos a partir del indice 2

let leguajesEliminados = lenguajes.splice(2, 2);
console.log(lenguajes);
console.log(lenguajesEliminados);

```

## Métodos para rreccores arrays, ya los vimos

# ForEach

Recorre cada elemento de una lista, y ejecuta una función indicada dentro de ese elemento. 

```js
["a", "b", "c"].forEach((letra) =>{

    console.log(letra);

})
```

## Map

Recorre la lista de elmentos, pero devuelve una nueva lista, es decir, un nuevo resultado para cada elemento, como devilvber el doble de cada elemento
```js
const listaNumneros = [5,15,7]
const listaNumerosDobles = listaNumeros.map( (numero)=> {
    return numero * 2;
});

console.log(listaNumerosDobles);
```
```js
// Optimizacion de métodos de Array
const listaNumneros = [5,15,7]
const listaNumerosDobles = listaNumeros.map( numero=> { // funcion flache un solo valor le podemos quitar los ()
    return numero * 2;
});

const listaNumerosDobles = listaNumeros.map( numero=> numero*2); // forma abreviada. Se puede optimizar cuando nuestra funcion tiene una solo línea y esa línea es un return.


console.log(listaNumerosDobles);

// funcion flache un solo valor le podemos quitar los ()
```

## Buscar Item

El métido find devuelbe el PRIMER elmento de la array que cumpla la funcion de prueba proporcionada, en caso contrario devuelve undefined.

```js
const numeros = [5,12,130,44,12]
const item = numeros.find( num => num > 10 ) // rrecore la lista y cuendo encuatra un valor > a 10 me lo devuelve

console.log(item); // 12

// const item = numeros.find((num)=>{
    if(num>10){
        return num;
    }
```

## Bscar múltiples items

La funcion filter devuelbe un array/lista con TODOS LOS ELEMENTOS que cumplan la condicion especificada

```js

const numeros = [5,12,130,44,12]
const listaItems = numeros.filter(num=> num > 10);
console.log(listaItems); // [12,130,44,12] el filter devuelbe una array el finfd devuelve un elemento

const photo5 = listaPhotos.find( photo => photo.id == 5)

const personas = [
    {nombre: "juan", edad: 33}
    {nombre: "Pedro", edad: 18}
    {nombre: "Ana", edad: 15}
    {nombre: "Luis", edad: 9}
    {nombre: "María", edad: 30}
]

// Optener una lista de las personas mayores de edad

const listaMayores = personas.filter(persona => persona.eadd >= 18);
```

1. De una lista de numeros devolber solo los impares

```js

const numeros = [5, 12, 130, 44, 12];  
const listaItems = numeros.filter(num => num % 2 != 0);  
const listaItems = numeros.filter(num => num % 2 == 1); 
console.log(listaItems);

```


2. De una lista de objetos de personas imprimir su nombre en cosola

```js
const personajes = [
    { nombre: "Juan", edad: 33 },
    { nombre: "Pedro", edad: 18 },
    { nombre: "María", edad: 30 }
];

// Imprimir solo los nombres
personajes.forEach(persona => console.log(persona.nombre));

```
3. Encunetra un libro con el título específico "la odisea"

3b Usar los métos string para búsquedas parciales "cien años"

```js
const libros =[
    {título: `El Quijote`, autor: `Miguel de Cervantes`},
    {título: `Cian años de soledad`, autor: `Gabriel García Marquez`},
    {título: `La Odisea`, autor: `Homero`},
]

const libroBuscado = libros.find(libro => libro.título == `La Odisea`) 

// Buscar un libro cuyo título contenga la frase "cien años"
const libroBuscado = libros.find(libro => libro.título.toLowerCase().includes("cien años"));
```

4 - Dado una lista de nuemros ordenaor de menor a mayor

```js

const numeros = [5,20,-10,5,25,100005];

const ordenados = numeros.sort( function (a, b) => {return a - b; }); 
const ordenados = numeros.sort( function (a, b) => return a - b );
console.log(ordenados)

ordenaodrMayoraMenor = numeros.sort(function (a, b) => return b - a );