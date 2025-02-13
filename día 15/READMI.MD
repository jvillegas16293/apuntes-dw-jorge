

### GRID CSS

- GRID es un sistema de aquetacion bidimensional, para crear interfaces ylayauts tipo tablas.

- Se compone de filas y columnas.

- Se pueden anidar unos dentro de otros.

- Se pueden crear layauts complejos con pocas líneas de código.

- No es apuesto a flex, se pueden combinar entre ellos (grid no reemplaza flex, pero si sustituye a las <tables> para la creacion de layauts)


Utilizamos ´"display:grid" pare crear un gredd y "grid-temlate-rows" para definir columnas y filas.

´´´CSS

.container {

    display: grid;
    grid-template-columns 100px 100px 100px
    grid-template-rows 100px 100px 100px
}

Podemos indicar a cada item, donde posicionarlo utilizando 

- grid-row-start
- grid-row-end
- grid-colum-start

**Teniendo en cuenta que las filas y columnas empiezan en 1 no en 0

Si queremos que ocupe 3 columnas y 1 fila, debemos indicar que comience en la col 1 y termine en la col 4. Y que la fila comience en la 1 y terine en la 2

´´´CSS

/*Item de 3 col y una fila*/

        .item-1 {

            grid-column-start: 1;
            grid-column-end: 4;
            grid-column-start: 32
            grid-column-end: 1;
        }

Se pueden utilizar valos negativos para releccinar elmentos desde el final del grid

        .item-1 {

            grid-column-start: -1;
            grid-column-end: -1;
            grid-column-start: -1;
            grid-column-end: -1;
        }

En vez de seleccionar la fila o columna de destino, podemos utilizar <span> para indicar cuantas filas o clumnas queremos un item


       .item-1 {

            grid-column-start: 1;
            grid-column-end:  span 2; Se amplia un bloque mas
            grid-row-start:  span 3; Se ampli dos bloques mas
            grid-row-end: 1;
        }


        
       .item-1 {

            grid-column-start: 1;
            grid-column-end:  span 3; Se amplia un bloque mas
            grid-row-start:  1; Se ampli dos bloques mas
            grid-row-end: span 3;
        }
 todo cubierto

        .item-1 {

            grid-column-start: 2;
            grid-column-end:  span 2;
            grid-row-start:  2; 
            grid-row-end: span 2;
        }
Para reducir grid-column-star y grid-colum-end en una sola linea, podemos usar grid-column y grid-row

        .item-2 {

            grid-column: 1 / 3
            grid-row  span 2 / 4

        }

Podemos una forma mas corta utilizando grid-area

        grid-row-start, grid-colum-start,  grid-row-end, grid-colum-end

                .item-2 {

                    grid; 1 /1 / 3 / 3

        }

        Con  grid es mu simple crear un elemento por encima de otro.

Podemos utilizar en el container grid-gap para definir un espacion entre las columnas y filas. El mismo sporta un valor para fila y columna, o 2 valores para diferenciarlos. Esta regla es para container.

.container {

    display: grid;
    grid-template-columns 100px 100px 100px
    grid-template-rows 100px 100px 100px
    grid-gap: 10px separador filas y columnas
    grid-gap: 1em 3em separacion independiente para filas y clumnas
}

Existe la opcion repeat() que nos permite repitir el numero de veces que quiero para una fila o clumna, esta regla es para container.

´´´CSS


.container {

    display: grid;
    grid-template-columns: repeat(3, 100px)
    grid-template-rows 100px 100px 100px
    grid-gap: 10px separador filas y columnas

  
}


Si agregas mas bloques dentro de nuestro grid, se intentara ubicarlo en la primera posicion libre disponible, si no quedan posiciones libres se creará una nueva fila. Esta nuva celda que acabo de crear no tendran el tamaño aisgna en nuestro grid-template, y se llaman "grid-implicitas". Podemos usar grid-auto-ros para defirnir el tamño de nuestras nuevas filas.

.container {

    display: grid;
    grid-template-columns: repeat(3, 100px)
    grid-template-rows 100px 100px 100px
    grid-gap: 10px separador filas y columnas
    grid-auto-rows: 100px las nuevas filas creadas tendra 100px

  
}

Tambie nexiste el grid-auto-flow que nos permite definir si las nuevas celdas se crearan cmo filas o columnas.

.container {

    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows 100px 100px 100px
    grid-gap: 10px; separador filas y columnas
    grid-auto-rows: 100px; las nuevas filas creadas tendra 100px
    grid-auto-flow: colum;
  
}

Las unidades que podemso utilizar, spn, px, %, em, rem, pero se la suma una nueva de valor fraccional, fr. Esta valor, nos permite fraccionar el tamaño disponible.

Por ejemplo, si tenemos 3 columnas y definimos que la primer clumna teng aun tamaño de 1fr, la segunda de 2fr y la tercera de 1fr, la segunda columna ocupara el doble de espacion qeu las otras dos.

layaut de col de el medio ocupa 2x

.container {

    display: grid;
    grid-template-columns: 1fr 2fr 3fr;
    grid-template-rows 100px 100px 100px
    grid-gap: 10px; separador filas y columnas

  
}

