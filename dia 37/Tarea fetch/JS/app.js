// Parte 1: Declaramos nuestras variables y referencias al DOM

const cargarBtn = document.querySelector('#cargarBtn');
const limpiarBtn = document.querySelector('#limpiarBtn');
const filtrarBtn = document.querySelector('#filtrarBtn'); 

const spinner = document.querySelector('#spinner');
const perfilesContainer = document.querySelector('#perfiles');
const errorContainer = document.querySelector('#error');
const errorText = document.querySelector('#errorText');

const listaUsuarios = [];

// Parte 2: Funciones y Event Listeners

// Función para Mostrar/Ocultar spinner
const mostrarSpinner = (visible) => {
    if (visible === "on") {
        spinner.classList.add('hidden');
    } else {
        spinner.classList.remove('hidden');
    }
}

// Función para mostrar Error
const mostrarError = (mensaje) => {
    errorText.textContent = mensaje;
    errorContainer.classList.remove('hidden');
}

// Función para ocultar Error
const ocultarError = () => {
    errorContainer.classList.add('hidden');
}

const cargarDatos = () => {
    // aquí hacemos el fetch
    fetch("./db/datos.json")

}

cargarBtn.addEventListener('click', cargarDatos);


// Parte 3: Código de nuestra App

mostrarError('Hola Mundo');
