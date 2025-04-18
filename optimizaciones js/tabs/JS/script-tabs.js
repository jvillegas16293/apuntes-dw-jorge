const li = document.querySelectorAll('.li');
const bloque = document.querySelectorAll('.bloque');

// Cuando hacemos click en un li....    
// A todos los .li les quitamos la clase activo
// .li con la posición le añadimos la clase activo
//.bloque con la posición le añadimos la clase activ


// Recorremos todos los .li
li.forEach((cadaLi, i) => {
    //asignamos un click a cada ,li
    li[i].addEventListener('click', () => {

        // Recorremos todos los .li
        li.forEach((cadaLi, i) => {
            // quitando la clase .activo de cada li
            li[i].classList.remove('activo');
            // quitando la clase .activo de cada bloque
            bloque[i].classList.remove('activo');
        });
        
        // En el bloque que le corresponde al li que hemos hecho click le añadimos la clase activo
        li[i].classList.add('activo');
        // En el bloque que le corresponde al li que hemos hecho click le añadimos la clase activo
        bloque[i].classList.add('activo');
    });
})


//-----------Código Optimizado------------------//

li.forEach((cadaLi, i) => {
    cadaLi.addEventListener('click', () => {
        document.querySelectorAll('.activo').forEach(el => el.classList.remove('activo'));

        cadaLi.classList.add('activo');
        bloque[i].classList.add('activo');
    });
});

