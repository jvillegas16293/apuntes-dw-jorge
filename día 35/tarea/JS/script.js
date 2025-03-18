 
 // REALIZADO CON CHAT GPT4
 
 // Obtenemos todos los bloques de contenido asociados a las pestañas
 const containerBloques = document.querySelector(".container");
 const listaBloques = containerBloques.querySelectorAll(".tab-content");
 // Obtenemos todos los botones de navegación que actúan como pestañas
 const listaButtons = document.querySelectorAll(".nav-button");

 const listaTemas = [
     {
         id: 1,
         titulo: "Canción 1",
         artista: "Artista 1",
         imagen: "img1.jpg",
         fuente: "https://mi-musica.com/tema-1"
     },
     {
         id: 2,
         titulo: "Canción 2",
         artista: "Artista 2",
         imagen: "img2.jpg",
         fuente: "https://mi-musica.com/tema-2"
     },
     {
         id: 3,
         titulo: "Canción 3",
         artista: "Artista 3",
         imagen: "img3.jpg",
         fuente: "https://mi-musica.com/tema-3"
     },
     {
         id: 4,
         titulo: "Canción 4",
         artista: "Artista 4",
         imagen: "img4.jpg",
         fuente: "https://mi-musica.com/tema-4"
     }
 ];

 //----------------NAVEGACIÓN----------------------------------//
 listaButtons.forEach((button) => {
     button.addEventListener("click", () => {
         const target = button.getAttribute("data-tab");

         // Recorremos todos los bloques de contenido para ocultarlos
         listaBloques.forEach((bloque) => {
             bloque.classList.remove("active"); // Quitamos la clase "active" de todos los bloques
         });

         // Buscamos el bloque cuyo ID coincide con el `target` y lo mostramos
         const bloqueSeleccionado = document.getElementById(target);
         if (bloqueSeleccionado) {
             bloqueSeleccionado.classList.add("active");
         }

         // Quitamos la clase "active" de todos los botones de navegación
         listaButtons.forEach((btn) => {
             btn.classList.remove("active");
         });

         // Agregamos la clase "active" al botón que fue clickeado
         button.classList.add("active");
     });
 });