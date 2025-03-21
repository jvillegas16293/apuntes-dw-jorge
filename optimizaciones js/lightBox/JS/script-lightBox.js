

// Cuando hago cvlick en una clase imagen, lo uqe acurre es que al div lightbox, se la añade la clase isActive.
// A la imagen grande, lo que hacemos es añadirle al atributo src de la imagen 

// Constantes y variables

const imgList = document.querySelectorAll(".img");
const lightBox = document.querySelector(".lightbox");
const grande = document.querySelector(".grande");

imgList.forEach((eachImg , index) => {
    imgList[index].addEventListener('click', () => {

        lightBox.classList.add('isActive')
        grande.src = imgList[index].src

    })
})

// Minuto 23.14 