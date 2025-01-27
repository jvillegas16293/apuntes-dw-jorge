
##selectores CSS##

id -> un solo elemento
clase -> varios elementos

´´´css

/* selector de id */
#caja{
color: blue;
}

/* selector de etiqueta */ 

div{
color: green; 
}

/* selector de clase */

.caja{
clor: red;
}

/* Selector de multiples items */

h1, h2, h3, p, {
    color: red;
}





/* Selector con atributos */

img[alt="foto 1"]{
    color: brown;
}

 a [href="urlepecifica"]{ /* el asterisco hace de comodin en la busqueda */
background: black;
colo: white;
 }

 div[class*="test"]{
    background: salmon;
 }

/* Selector de hijos directors /*

h1 > a {
   
}

/* Selector de todos ls descendientes */

header a {

}


/* Selector del siguie te hijo o elemento */

p + a {

}
´´´´HTML
<dic class="caja" id="caja1">soy un dic</div>

<div>class="test">caja salmon</div>
<div>class="test">caja salmon</div>
<div>class="test">caja salmon</div>
<div>class="test">caja salmon</div>

<header>
    <nav>
        <h1>
         <a href=""> Mi página</a>
        </h1>
            <ul>
            <li></li>
            <li></li>
            </ul>
    </nav>
</header>

# Reset CSS

Buscamos que todos los navegadores, inicien nuestros proyectos con los mismos estilos, sin aplicar los propios.

Ejemplos de reset   CSS

https://meyerweb.com/eric/tools/css/reset/
https://raw.githubusercontent.com/eduardofierropro/Reset-CSS/refs/heads/main/css/app.css
https://cssauthor.com/free-retro-photoshop-brushes/

```CSS 

El * incluye a todos los elementos de mi web
El border-box utiliza el borde de la caja como ancho, en ver del contenido 

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
````
