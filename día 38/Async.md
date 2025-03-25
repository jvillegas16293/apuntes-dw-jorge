### Async / Await
La sprmesas se vuelven difíciles de entender cuando se anidan por eso de desarrollo Async / Await. Es mas fácil de leer y entender que las promesas con callbacjks.

 ## Ventajas

- Legibilidad: Se parece más al código asíncrono tradicional, lo que facilita el seguimiento del flujo de ejecución
- Manejo de Errores: Con el uso de try / catch para manejar erroes
- Evitar "callback hell": Ayudar a evitar el anidamiento excesivo de errores

```js

// Mismo código utilizand Async / Await agregamos async a la funcion y awair a los itens de dentro.

async function traerDatos() {

    try {
        const reponse = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const datos = await response.json();

        console.log(datos);
        conmsole.log(datos[0]); // imprimir en consola datos del primer usuario

        // Simulamos un segundo request, trayendo los post del primer usuario
        const responsePost = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${datos[0].id}`);
        const listaPost = await responsePost.json();
    } catch (error) {
        console.log("tuvimos un error:", error);
    }


}

const traerDatos = async ()=> {
    
}

```

```js

// Convetir cadigo a Async / Await

//--------------------------CÓDIGO A CONVERTIR (VIEJO)--------------------------//

console.log(" 1) solicitar al camarero un plato de ensalada de atún");

pedirPlato("ensalada de atún");

console.log("3) la persona se toma el vaso de agua");

function pedirPlato(plato) {
    console.log("2) el camarero va a buscar el plato de comida: ", plato);

    fetch("http://restaurante.com/api/traerPlato")

        .then(response => response.json())

        .then(datos => {
            console.log("Paso 4: El camarero lleva el plato de :", datos.plato);
            console.log("Paso 5: El comensal se come su comida");
        })
        .catch(error => {
            console.log("No tenemos mas atún, lo siento");
        });
}

//------------------------------------Async / Await------------------------------//

    console.log(" 1) solicitar al camarero un plato de ensalada de atún");
    pedirPlato("ensalada de atún");
    console.log("3) la persona se toma el vaso de agua");

const pedirPlato = async (plato) => {
    console.log("2) el camarero va a buscar el plato de comida: ", plato);

    try {
        const buscarPlato = await fetch(`http://restaurante.com/api/traerPlato~${plato}`)
        const miPlato = await buscarPlato.json();

        // que hacer con los datos...
        console.log("Paso 4: El camarero lleva el plato de :", miPlato.plato);
        console.log("Paso 5: El comensal se come su comida");


    } catch (error) {
        cosole.log("tuvimos un error", error);
    }

}

//-------------------------------------------------------------------------------//

   


   





```