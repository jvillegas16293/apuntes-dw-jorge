
// REALIZADO CON CHAT GPT4

// Obtenemos todos los bloques de contenido asociados a las pestañas
const containerBloques = document.querySelector(".container");
const listaBloques = containerBloques.querySelectorAll(".tab-content");
// Obtenemos todos los botones de navegación que actúan como pestañas
const listaButtons = document.querySelectorAll(".nav-button");

let idCancionActual = 0;

let posicionTemaActual = 4;

listaTemasw[4]

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

//---------------------------LISTAR TEMAS------------------------//



listaTemas.forEach((tema) => {
    // Deconstrucción del objeto `tema`
    const { id, titulo, artista, imagen, fuente } = tema;
    console.log(titulo);
    containerCanciones.innerHTML += `<li class="cardCancion">
    <img  class="imgCancion" src="img/${imagen}" alt="${titulo}">
    <div>
    <h2 class="titleCancion">${titulo}</h2>
    <small class="artistaCancion">${artista}</small>
    </div>
    </li>`;

    // Cogemos el último hijo agregado para incluirle un eventListener

    const cardCancion = containerCanciones.lastChild;

    cardCancion.addEventListener("click", () => {
       cargarCancion(id);

    });



});



//---------------------------REPRODUCTOR------------------------//

const playBtn = document.querySelector("fas fa-play");
const pauseBtn = document.querySelector("fas fa-pause");
const nextBtn = document.querySelector("fas fa-step-forward");
const prevBtn = document.querySelector("fas fa-step-backward");
const progress = document.querySelector("#audioPlayer");

const divCurrentSongInfo = document.querySelector(".current-song-info");

pauseBtn.computedStyleMap.displaty = "none";

// función para cargar la canción
function cargarCancion(id) {
    console.log("Cargando canción con ID: ", id);
    // recorremos nuestra lista de temas y obtenemos solo la quiene tenga el id que pasamos
    const cancion = listaTemas.find((tema) => tema.id === id);

    if(!cancion) { return; }
    // Utilizamos la deconstruccion de objetos para obtener sus variables
    const { titulo, artista, imagen, fuente } = cancion;

    console.log(cancion);
    audioPlayer.src = cancion.fuente;
    idCancionActual = id;


    divCurrentSongInfo.innerHTML = `
    <img src="img/${imagen}" alt="${artista}">
    <h2>${titulo}</h2>
    <p>${artista}</p>
    `;

    audioPlayer.play();
    playBtn.computedStyleMap.displaty = "none";
    pauseBtn.computedStyleMap.displaty = "inline";
}

// Evento para reproducir la canción

playBtn.addEventListener("click", () => {
    audioPlayer.play();
    playBtn.style.display = "none";
    playBtn.style.display  = "inline";
});

pauseBtn.addEventListener("click", () => {

    audioPlayer.pause();
    playBtn.style.display = "inline";
    playBtn.style.display  = "none";
});

nextBtn.addEventListener("click", () => {
    if(idCancionActual === listaTemas.length) {
        idCancionActual = 0;
    }

    cargarCancion(idCancionActual + 1);
});

prevBtn.addEventListener("click", () => {
    if(idCancionActual === 1) {
        idCancionActual = listaTemas.length;
    }

    cargarCancion(idCancionActual - 1);
}); 