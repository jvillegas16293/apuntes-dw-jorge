// REALIZADO CON EL PROFESOR

// Obtenemos todos los bloques de contenido asociados a las pestañas
const listaBloques = containerBloques.querySelectorAll(".tab-content");
// Obtenemos todos los botones de navegación que actúan como pestañas
const listaButtons = document.querySelectorAll(".nav-button");
const containerCanciones = document.getElementById("containerCanciones");
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
    }
    {
        id: 3,
        titulo: "Canción 3",
        artista: "Artista 3",
        imagen: "img2.jpg",
        fuente: "https://mi-musica.com/tema-2"
    }
    {
        id: 3,
        titulo: "Canción 3",
        artista: "Artista 3",
        imagen: "img2.jpg",
        fuente: "https://mi-musica.com/tema-2"
    }
    {
        id: 4,
        titulo: "Canción 4",
        artista: "Artista 4",
        imagen: "img2.jpg",
        fuente: "https://mi-musica.com/tema-2"
    }
];


//----------------NAVEGACIÓN----------------------------------//
// Iteramo (srecorrer lista) sobre cada botón de navegación
listaButtons.forEach((button, idx) => {
    // Agregamos un evento de clic a cada botón
    button.addEventListener("click", () => {

        // Obtenemos el valor del atributo "data-tab", que indica qué pestaña mostrar
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

containerCanciones.innerHTML =- `<                <li class="cardCancion">
                    <img src=""${imagen} alt="Michael Jackson">
                   
                    <div>
                        <h2>Wanna BE sTARTNG sOMETHING</h2>
                        <small>Michael Jackson</small>
                    </div>
                </li>`;
})
 
const playBtn = document.querySelector("fas fa-play");
const pauseBtn = document.querySelector("fas fa-pause");
const nextBtn = document.querySelector("fas fa-step-forward");
const prevBtn = document.querySelector("fas fa-step-backward");

