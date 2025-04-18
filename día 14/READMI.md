### Unidades de Medida en CSS: PX, %, EM, REM

#### PX (Píxeles)
Unidad absoluta que representa un punto en la pantalla.

- Ideal para tamaños y dimensiones precisos que no deben cambiar en relación con otros elementos.
- Recomendado para bordes, imágenes y otros elementos con dimensiones fijas.

#### % (Porcentaje)
Unidad relativa al tamaño del elemento padre.

- Si el contenedor padre tiene un `width: 200px` y el elemento hijo tiene un `width: 50%`, el ancho del hijo será de `100px`.
- Útil para diseños fluidos y responsivos que se adapten al tamaño de la pantalla.
- Recomendado para contenedores que varíen según su contenido.

```css
.container {
    width: 80%; /* El ancho del contenedor será el 80% de su elemento padre */
}
```

#### EM (Escalable en Relación al Texto)
Unidad relativa al tamaño de la fuente del elemento padre (o del propio elemento si no tiene padre con `font-size`).

- Si el elemento padre tiene un `font-size: 10px`, y el margen es `3em`, el margen será `30px`.
- Útil para hacer que el tamaño general dependa del tamaño del texto.
- Facilita que textos e imágenes escalen proporcionalmente, mejorando la accesibilidad y flexibilidad del diseño.
- Por defecto, los navegadores asignan `font-size: 16px` al elemento `<html>`.

```css
.card {
    font-size: 16px;  /* 16px */
    padding: 1.5em;   /* 24px, porque 1.5 * 16px = 24px */
}
```

#### REM (Root EM)
Unidad relativa al tamaño de la fuente del elemento raíz (`<html>`).

- Si el tamaño de la fuente del `html` es `16px`, y un elemento tiene `3rem`, su tamaño será `48px` (`3 * 16px`).
- `rem` es útil para mantener una escala consistente en todo el documento, independientemente de la estructura del DOM.
- Recomendado para tamaños globales como fuentes principales y márgenes para garantizar coherencia en el sitio.

```css
html {
    font-size: 16px; /* Define el tamaño base del documento */
}

.card {
    font-size: 2rem; /* 32px (2 * 16px) */
}

.card__title {
    margin: 1rem; /* 16px (1 * 16px), el REM ignora el `font-size` de los elementos padres */
}
```

---
Este documento proporciona una guía clara y estructurada sobre las unidades de medida en CSS. ¿Necesitas más ejemplos o aclaraciones? 😊