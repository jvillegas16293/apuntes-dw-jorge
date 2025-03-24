### Contenido Asíncrono VS Sincrónico

La dincronía es la ejecución de tareas en un orden secuencial, es decir, una tarea se ejecuta después de otra.

```js

console.log("Paso 1");
traerDatos();
console.log("Paso 3");

function traerDatos(){
    esperar(3000);
    console.log("Paso 2");
}

// Simulador de tiempo

function esperar(milesegundos){
    const start = new Date().getTime();
    while( new Date().getTime() - start < milisegundos);
}

```

La asincronia es la ejecucion e tareas en orden No secuencial, es decir, una tarea se puede ejecutar antes de que la anteriro haya terminado.

La optencion de datos asíncronos se utilizan para:
- traer informacion de BD (data base)
- traer información de una API (APLICATION pROGRAM iNTERFACE)
- Manipulación de nuestros propios archivos

Para lograr una tarea asíncrona, solo tenemos que enviar como parámetro, una funcion de "callback" que se ejecutará al finalizar la tarea.

```js
console.log("Paso 1");
traerDatos();
console.log("Paso 3");

function traerDatos(){
    setTimeout(()=>{
        console.log("paso2");

    }, 3000 );
}

```

En jS, debido a que la ejecución ocurre en un solo hilo (callstack), la asincornia permite que el código siga corriendo mientras espera tareas lentas como leer archivos, o hacer solicitudes http. Esto evita que la interfaz de ususario se congele mientras espera respuesta.

## Funciones de Callback

## Ejercicio

Crear un código que muestre por consola:

1) Un comensal solicita a un camarero un entrantes
2) El camarero va a buscar el plato solicitado (asíncrona)
3) La persona toma un vaso de agua mientras espera
4) EL camamrero lleva el plato a la mesa
5) La persona se come el plato de comida

```js
let plato="Ensalada";
console.log("1) Un comensal solicita a un camarero un entrantes", plato);
hacerPedido(plato, ()=>{
    console.log("4)EL camamrero lleva el plato a la mesa");
    console.log("5La persona se come el plato de comida");

})
console.log("3) a persona toma un vaso de agua mientras espera", plato);

function hacerPedido(plato, callBack){
    console.log("2 el camamrero va abuscar el plato", plato);
    setTimeOut(()=>{
        callback()
    }, 3000);
};

// Explicacion lógica:
https://www.lydiahallie.com/blog/event-loop
```

## Promesas

Objeto que representa le echo de "prometer algo", es decir, la "terminacion" o el "fracaso" de una operacion asíncrona.

Una promesa, puede estar en uno de estos 3 estados:

- Pendiente: aún no se ha completado y no se sabe si se completará con éxito o no.
- Resuelta:_ (resolve), se ha completado con éxito.
- Rechazada: (reject), cuando ocurre un error.

```js

const miPromesa = new Promise((resolve, reject)=>{
    console.log("Ejecutando lo que te prometí");
    setTimeOut(()=>{
        resolve("EXITO, presente el proyecto");

        reject("Error, mi guthub no fucniona") // Dependiendo se ejecuta resolve o reject
    }, 3000)
});

miPromesa.then( result => console.log(result))
        .catch(error => console.log("Tuve un erro", error))
        .fynally(()=> console.log("finalmente termine ya sea con error co con éxito"))


```

Las promesas se pueden encadenar 

```js
miPromesa.then( result => { // result = 5
        return result+3;
        })
        .then (resuylt2 => {
            retunt result2 / 2 
        })
        .catch(error => console.log("Tuve un erro", error))
        .fynally(()=> console.log("finalmente termine ya sea con error co con éxito"))


```

### Fetcj API CON .THEN() Y .CATCH()

Uno de los susu fundamentales de las promesas, es en el uso de la fetch y API para realizar "peticiones HTTP" a otros servidores-

La funcion "fetch()", nos permite hacer una peticion y nos devuleve una promesa.

```js
fetch("https://jsonplaceholder.typicode.com/users/1")
    .then( response => response.json()   ) // convertir nuestra respuesta a JSON
    .then(datos => {
        console.log(datos.name)
    })
    .catch(error => console.warn("Tuvimos un error", error));

```

Ejercicio: Optener 10 usuarios de la página JsonPlaceHolder, y motrar en HTML una tarjeta cada uno

```js
fetch("https://jsonplaceholder.typicode.com/users/1")
    .then( response => response.json()   ) // convertir nuestra respuesta a JSON
    .then(datos => {
        console.log(datos.name)
    })
    .catch(error => console.warn("Tuvimos un error", error));

```