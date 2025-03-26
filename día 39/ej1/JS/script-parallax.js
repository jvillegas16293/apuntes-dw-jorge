function ParallaxEffect() {

    const parallaxBg = document.querySelector('.parallax-bg');
    // Seleccionamos nuestro elemento flotante
    const elementoFlotante = document.querySelector('.parallax-elemento-flotante');

    window.addEventListener("scroll", () => {
        let scrollPos = window.scrollY;  // Definimos scrollPos correctamente
        console.log(scrollPos);

        // Mover el fondo a la mitad de la velocidad del scroll (0.3)
        parallaxBg.style.transform = `translateY(${scrollPos * 0.3}px)`;  // Usando scrollPos correctamente

        if (elementoFlotante) {
            // Aplicamos una rotación al elemento flotante
            let rotation = scrollPos * 0.1;  // Usamos scrollPos aquí también
            
            // IMPORTANTE: `transform: translateY()` es mejor para el rendimiento que modificar `top`
            elementoFlotante.style.transform = `translateY(${scrollPos * 0.6}px) rotate(${rotation}deg)`;
        }
    });
}

if(window.matchMedia(`(prefers-reduced-motion: reduce)`).matches){
    // No aplicar efects
    console.log("no aplicar parallax por decision del usuario")
} else {
    console.log("Se aplica el parallax");
    ParallaxEffect();
}


