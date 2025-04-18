### GRID CSS

CSS Grid es un sistema de maquetación bidimensional que permite crear interfaces y diseños tipo tabla de manera flexible y eficiente.

#### Características de CSS Grid

- Se compone de filas y columnas.
- Permite anidar grids dentro de otros.
- Facilita la creación de diseños complejos con pocas líneas de código.
- No es un reemplazo de Flexbox, sino que se pueden combinar (Grid no sustituye a `<table>` para datos tabulares, pero sí para la creación de layouts).

### Creando un Grid en CSS

Utilizamos `display: grid;` para definir un contenedor como grid y `grid-template-rows` y `grid-template-columns` para definir filas y columnas.

```css
.container {
    display: grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 100px 100px 100px;
}
```

### Posicionamiento de los elementos

Podemos indicar a cada elemento en el grid dónde posicionarse utilizando:

- `grid-row-start`
- `grid-row-end`
- `grid-column-start`
- `grid-column-end`

**Las filas y columnas comienzan en 1, no en 0.**

Si queremos que un elemento ocupe 3 columnas y 1 fila, indicamos:

```css
.item-1 {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
}
```

### Uso de valores negativos

Podemos usar valores negativos para seleccionar elementos desde el final del grid.

```css
.item-2 {
    grid-column-start: -3;
    grid-column-end: -1;
}
```

### Uso de `span` para definir tamaños

En lugar de especificar una columna o fila de destino, podemos usar `span` para indicar cuántas filas o columnas debe ocupar un elemento.

```css
.item-3 {
    grid-column-start: 1;
    grid-column-end: span 2; /* Se amplía en 2 columnas */
    grid-row-start: 1;
    grid-row-end: span 3; /* Se amplía en 3 filas */
}
```

### Sintaxis abreviada para definir posición

Podemos reducir `grid-column-start` y `grid-column-end` en una sola línea usando `grid-column` y `grid-row`.

```css
.item-4 {
    grid-column: 1 / 3;
    grid-row: span 2 / 4;
}
```

También podemos usar `grid-area` para una definición aún más corta:

```css
.item-5 {
    grid-area: 1 / 1 / 3 / 3;
}
```

### Espaciado entre filas y columnas

Podemos usar `grid-gap` (o `gap` en versiones modernas) para definir el espacio entre filas y columnas.

```css
.container {
    display: grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 100px 100px 100px;
    gap: 10px; /* Espaciado entre filas y columnas */
    gap: 1em 3em; /* Diferente espaciado para filas y columnas */
}
```

### Uso de `repeat()`

`repeat()` nos permite repetir un valor un número determinado de veces.

```css
.container {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: 100px 100px 100px;
    gap: 10px;
}
```

### Creación de nuevas filas automáticas (`grid-auto-rows`)

Si agregamos más elementos de los que permite el grid, se crearán filas adicionales llamadas "grid implícito". Podemos definir el tamaño de estas nuevas filas con `grid-auto-rows`.

```css
.container {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: 100px 100px 100px;
    gap: 10px;
    grid-auto-rows: 100px; /* Las nuevas filas creadas tendrán 100px */
}
```

### Control de flujo automático (`grid-auto-flow`)

Podemos definir si las nuevas celdas se crearán como filas o columnas con `grid-auto-flow`.

```css
.container {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: 100px 100px 100px;
    gap: 10px;
    grid-auto-rows: 100px;
    grid-auto-flow: column; /* Las nuevas celdas se agregarán en columnas */
}
```

### Uso de unidades fraccionales (`fr`)

Las unidades disponibles son `px`, `%`, `em`, `rem`, pero también existe `fr` (unidad fraccional), que distribuye el espacio disponible.

Ejemplo de un layout donde la columna del medio ocupa el doble de espacio que las otras:

```css
.container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 100px 100px 100px;
    gap: 10px;
}
```

---
Este documento ahora está corregido y estructurado para facilitar el estudio de CSS Grid. ¿Te gustaría agregar algo más o necesitas más ejemplos? 😊
