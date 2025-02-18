

## BEN (BLOCK, ELEMENT, MODIFIER)

## Suite CSS

- Block -> Componente

- Elment -> Elemento

- Modifier -> Modificador

NUEVOS

. Utilities

- Estados

## Utilities

-- Se escribe con ´u-utilityname´ por ejemplo u-red

--Se escribe u- camelCase

--Se utiliza para aplicar un estilo a cualquier elemento



-- CSS

.u-red{

    background-color: red;
}

u-big {
    font-sixe: 5rem;
}

u-sn-text{

    texto pequño
}
u-md-text{
    texto mediano
}

u-lg-text{
    texto grande
}

## Componente

Igual al bloque de BEN, pero se escribe con PascalCase. Por ejemplo header, MiBoton, SeccionHero, card, tweet

## Elmentos (part, DescendentName)

Igualq eu el elemento en BEM, pero se escriben con camelKase. Por ejemplo Header-title, Card-imageFront, Tweet-bodyText

CSS

<article class="tweet">

<header class="Tweet-header">

    <img class="Tweet-Img" src="" alt="">

</header>

<div class="Tweet-dody">


</div>

</article>

## Modifcadores

Al igualq ue en BEM, y se utiliza camelCase Componente--nombreModificador

<button class="Button">Boton Normal </button>
<button class="Button Button--navidad">Boton de navdad>

## Estados (on/off)

Nuevo: Clases para elementos que marcan el estado de un componente/elemento. Se escriben con camelCase y uasa la palabra is- delante

´´´CSS

-Tweet {Ëstilos de un Tweet comun}

-Tweet.es-expandent {Solo cambios para el tweet abierto}

hytml

<artivle class="Tweet is-expandent">
¨¨
</article>

## GRID CONTINUACION

Existe la opcion minmax(), que nos permite definir un tamaño minimo y máximo paa las columnas y filas.


¨¨¨CSS

.Container {
    display: grid;
    grid-template-columns: minmax(100px, 1fr) minmax(200px, 1fr) minmax(100px, 1fr);
    grid-template-rows: 100px 100px 100px;
    grid-gap: 100px;
}


## Grid Template Areas

Podemos nombrar las celas utilizando ¨grid-template-areas y asignando un nobre a cada una

--CSS
## HACER LAYAUT DE TODA LA WEB ##
.container{
 display: grid;
 grid-template-columns repeat (3, 1fr)
 grid-template-rows repeat (3, 100px)
 grid.gap: 10px; 
 grid-template-area: 
 "header   header   header"
 "main   main   sidebar"
 "footer   footer   footer";  

 Una vez  nombramos les elementos con greed area, tenmemos que decir como se llama cada elmento.

 Si  queremos los elmentos vacíos podemos poner un punto.


}

.item-1{
    grid-area: header
}

.item-2{
    grid-area: main
}

.item-3{
    grid-area: sidebar
}

.item-4{
    grid-area: footer
}

Podemos utilizar justift-items Y align-items para alinear los elementos dentro de las celdas. Sus opciones posiblers son

- start
- center
- stretch
- baseline

Por defecto se utiliza stretch

.container{
 display: grid;
 grid-template-columns repeat (3, 1fr)
 grid-template-rows repeat (3, 100px)
 grid.gap: 10px; 
justify-items: start
aligh-items: end
}

Podemos decirla a un item en concreto que alinee de manera diferente utilizandon

- justify-self
- align-self

Sus opciones son: - start, center, stretch y baseline

Podemdemos alinear nuestro grid en base a su contenedor. Utilizando justify-content y align-content

Sus opciones son: start, end, center, stretch, space-around. space-between y space-evenly

.container{
 display: grid;
 grid-template-columns repeat (3, 1fr)
 grid-template-rows repeat (3, 100px)
 grid.gap: 10px; 
justify-content: center;
aligh-items: center;

}

Podemos crear u GRID responsive, con el uso de auto-fit. Esto nos permite que los elementos se ajusten al tamaño del contenedor.

.container {

    display: grid
    grid-template-colum; repeat (auto-fit, minmax(100px, 1fr))
    grid-template-rows: repaat (4, 1fr)
    grid-gap: 10px

}