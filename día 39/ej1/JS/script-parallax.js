function ParallaxEffect() {
    const parallaxBgs = document.querySelectorAll('.parallax-bg'); 
    const elementosFlotantes = document.querySelectorAll('.parallax-flotante');

    window.addEventListener("scroll", () => {
        let scrollPos = window.scrollY;

        // Aplicar parallax en los fondos
        parallaxBgs.forEach(bg => {
            bg.style.transform = `translateY(${scrollPos * 0.3}px)`;
        });

        // Aplicar parallax en los elementos flotantes
        elementosFlotantes.forEach(el => {
            let speed = el.getAttribute("data-speed") || 0.5; // Velocidad por defecto
            let rotation = scrollPos * 0.1;
            el.style.transform = `translateY(${scrollPos * speed}px) rotate(${rotation}deg)`;
        });
    });
}

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    console.log("Se aplica el parallax");
    ParallaxEffect();
} else {
    console.log("No aplicar parallax por decisión del usuario");
}