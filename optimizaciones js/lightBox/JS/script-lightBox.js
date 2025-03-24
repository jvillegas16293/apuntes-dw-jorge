

// Cuando hago click en una clase imagen, lo uqe acurre es que al div lightbox, se la añade la clase isActive.
// A la imagen grande, lo que hacemos es añadirle al atributo src de la imagen 

// Constantes y variables

// ========================
// Código sin optimizar
// ========================

// Selección de elementos
const imgList = document.querySelectorAll(".img");
const lightBox = document.querySelector(".lightbox");
const grande = document.querySelector(".grande");
const closeBtn = document.querySelector(".close");

// Evento para cada imagen
imgList.forEach((eachImg, index) => {
    imgList[index].addEventListener("click", () => {
        lightBox.classList.add("isActive");
        grande.src = imgList[index].src;
    });
});

// Evento para cerrar el lightbox
closeBtn.addEventListener("click", () => {
    lightBox.classList.remove("isActive");
});

// ========================
// Código optimizado
// ========================

// Evento para cada imagen (versión optimizada)
imgList.forEach(eachImg => 
    eachImg.addEventListener("click", () => {
        lightBox.classList.add("isActive");
        grande.src = eachImg.src;
    })
);

// Evento para cerrar el lightbox (versión optimizada)
closeBtn.addEventListener("click", () => lightBox.classList.remove("isActive"));
