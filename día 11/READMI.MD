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

@meida not|only|notonly sceen and {min-widht 600px} {

body {

background-color red

    }
}

Combinar breakpoints

@media screen and (min-width: 600px* and { rax-width 800px)[reglas css]

Cunado la pantalla esta en horizontal

@media screen an (orientation: landscape) {


