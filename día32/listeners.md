## Listeners para eventos del usuario

Son fuciones que se ejecutan en respuesta a eventnos específicos que ocurren en el DOM, como por ejemplo clicks, movimientos del mouse, teclas presionadas, teclas levantadas. ect... Para agregar un evwnto usamos `addEventListener(evewnto, funcion)`

```js

// seleccionar item del DOM

const boton = document.querySelector(`boton`)

// agregar un event listener para el evento de clic

boton.addEvenlistener("click", miFuncion);
boton-addEventlistener("click", () => {
    console.log("hola");
});

function miFuncion(){
    console.log("hola");
}

```
## Pasar parametros a funciones con eventos

A veces necesitamos enviar parametros adiconales a la funcion que maneja el evento.
```js

boton.addEventListener("click", function() {
    miFuncion("tomi");
})

// ejecutar la funcion sin enviar parametro
boton.addEventListener("click", miFucnion);
// ejecutar lña fucnion enviando parametro, la debo meter dentro de una funcion flecha
boton.addEventListener("click", ()=> miFucnion("Maria"));
```

Ejercicio:

1. Cambiar el color de un elemento al hacerle click: 
Crear 2 botones (rojo y azul) botón que cambie el color de fondo de un bloque, al hacerle click. La funcion de cambiar el color tiene que ser la misma.



2. Mensaje al pasar el mouse:
Crear un elemento que mueste un mensaje cuando el ratón pase por encima de él.
