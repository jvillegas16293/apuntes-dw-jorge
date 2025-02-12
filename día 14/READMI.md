
###  Unidades de medidas en CSS PX, %, EM, REM

- PX: 

Unidades absolutas qe representan un punto en la pantalla.

Son ideles para tamaños y dimensiones precisos que no deben cambien en relación con otros elementos. Es recomendable usarlo para bordes, img y otros elementos de dimension fija.

- % 

Es una relativa al tamaño del elemento padre. Ej: el padre es de 200px y el elemento tiene n width de 50%,el ancho del objeto sera de 100px. Esta medida es útil para diseños fluidos y responsive que se adapten al tamaño de pantalla.

Es recomendable para contenedores que varien segun su contenedos.

- EM "em"

La unidad "em" es relativa al tamaño de la fuente del elemento padre(o el suyo).

Ej: Si el padre tiene un font-size: 10px, y un margin: 3em; el margen, será de 30px. Lo podemos utilizar ne cualquier elemento.

Es muy útil, par ahacer que el tamaño general tenga que ver con el tamaño del texto. Creamos tamaños de texto e imágenes que escalen con el tamaño de la fuente, esto mejora la accesibilidad y flexibilidad del diseño. Por defecto las navadadores asignan el font-size de 16px.

´´´CSS

.card {

    font-size: 16px; --> 16px
    padding: 1.5em;  --> 24px

}

´´´
 - REM (Root EM)

 Es relativa al tamaño de la fuente de la RAIZ del documento. (Normalmente es <html>).

 Si el tamaño de la fuente del HTML es de 8px y un elemento descendente en varios niveles tiene una medida de "3rem", su medida será de 24px.

 rem es útil para mantener una escala consistente en todo el documento, independientemente de la estructura del DOM. Es recomendable usar rem para tamaños glabales, como el tamaño de la fuente principal y los margenes para garantizar cocherenicia en todo el sitio.

 ´´´CSS

 .html{

    font-sixe; 2px
 }

 .card {
    font-sixe: 2em -->32px
 }

 .card__title {

    margin: 1rem --> 16px el REM ignora el font-size
 }
