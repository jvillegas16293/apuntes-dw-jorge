const li      = document.querySelectorAll('.li');
const bloque  = document.querySelectorAll('.bloque');

// Cuando hacemos click en un li....    
// A todos los .li les quitamos la clase activo
// .li con la posición le añadimos la clase activo
// .bloque con la posición le añadimos la clase activo

//  li.forEach((cadaLi, i) => {
// li[i].addEventListener('click', () => {
//  li.forEach((cadaLi, i) => {
//   li[i].classList.remove('activo');
// bloque[i].classList.remove('activo');
// });
// li[i].classList.add('activo');
//  bloque[i].classList.add('activo');
// });
// });

//-----------Código Optimizado------------------//

li.forEach((cadaLi, i) => {
    cadaLi.addEventListener('click', () => {
        document.querySelectorAll('.activo').forEach(el => el.classList.remove('activo'));
        
        cadaLi.classList.add('activo');
        bloque[i].classList.add('activo');
    });
});