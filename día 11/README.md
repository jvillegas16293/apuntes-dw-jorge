## que es una media Query

- Declaraciones en CSS que nos permiten decidir que reglas aplicar a partir de unas regls asigadas por nosotros

# Sintaxis de na MQ

Se compone de las siguientes partes:
- @media, la cual es una palabra reservada^keyword

- un tipo de media (screen, print, all, speech) [Media Type] 

- Operadores (and, not, only) [Operadores]

- Los breakpoints, es una codiciion, tiene que cumplir algo

- Un bloque de CSS (nuestras reglas)

´´´CSS

/* keyword  MediaType, Operadores/es breakpoint {reglas de CSS} */

@meida not|only|notonly screen and {min-widht 600px} {

body {

background-color red

    }
}

Combinar breakpoints

@media screen and (min-width: 600px* and { rax-width 800px)[reglas css]

Cunado la pantalla esta en horizontal

@media screen an (orientation: landscape) {

}

tips para utilizarlas

- Sonre escriben las reglas de css norales, per no pasee mayor especificidad, por lo tanto las media queries tiene que estar por debajo de las relgas que quieren reemplazar

- debe tener el mismo selector, para que reemmplace la regla que deseamos. Como excepcion, podemos utilizar las reglas principales en vez de específicas. ej: background para remeplazar el bacgruond color

- pensar bien los breakpoints

- podemos utilizar un  @media para cada selcor o una solo para todos los selectores, recomendado una sola

- Mobile first: intentamos desarrollar siempre primero para mobil y luego para pantallas mas grandes, de esta manera nos aseguramos que se vea bien en dispositvos móbiles

puedo elegir que elmentos no aparezcan en mobile por ejemplo.

- Mobile (55%) 328px - 488px
- Tablets 768px - 1884px
- Desktio (43%) 1824px - 1928px

Apartir de estas dimensiones 

...CSS

/* Mobile First */ ***SI DISEÑAMOS PARA MOVIL, LAS REGLAS POR DEFECTO SON PARA MÓVILES, POR LO TANTO, SOLO TENDREMOS 2 MEDIA QUERIRES, PARA TABLETS Y ESCRITOIO***

- tablet

@madia only screen and (min.width; 768px) {reglas css para tablets}

- descktop

@madia only screen and (min.width; 1024px) {reglas css para tablets}

...

#ejemplo de media queries en img

´´´
.html
<pinture>
<source  media="(min-width:650px)" srcset="url de la imagen">
<source  media="(min-width:450px)" srcset="url de la imagen">
<img src="url" alt="mimascota">
</pinture>
