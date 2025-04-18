## BEM (BLOCK, ELEMENT, MODIFIER)

## Suite CSS

- Block -> Componente
- Element -> Elemento
- Modifier -> Modificador

NUEVOS

- Utilities
- Estados

## Utilities

- Se escribe con `u-utilityName`, por ejemplo `u-red`
- Se escribe en `camelCase`
- Se utiliza para aplicar un estilo a cualquier elemento

### CSS

```css
.u-red {
    background-color: red;
}

.u-big {
    font-size: 5rem;
}

.u-sm-text {
    font-size: 12px;
}

.u-md-text {
    font-size: 16px;
}

.u-lg-text {
    font-size: 24px;
}
```

## Componente

Igual al bloque de BEM, pero se escribe con PascalCase. Por ejemplo `Header`, `MiBoton`, `SeccionHero`, `Card`, `Tweet`.

## Elementos (part, DescendentName)

Igual que el elemento en BEM, pero se escriben con camelCase. Por ejemplo `Header-title`, `Card-imageFront`, `Tweet-bodyText`.

### CSS

```html
<article class="Tweet">
    <header class="Tweet-header">
        <img class="Tweet-img" src="" alt="">
    </header>
    <div class="Tweet-body"></div>
</article>
```

## Modificadores

Al igual que en BEM, se utiliza camelCase `Componente--nombreModificador`.

```html
<button class="Button">Botón Normal</button>
<button class="Button Button--navidad">Botón de Navidad</button>
```

## Estados (on/off)

Nuevo: Clases para elementos que marcan el estado de un componente/elemento. Se escriben con camelCase y usan la palabra `is-` delante.

```css
.Tweet {
    /* Estilos de un Tweet común */
}

.Tweet.is-expanded {
    /* Solo cambios para el Tweet abierto */
}
```

### HTML

```html
<article class="Tweet is-expanded"></article>
```

## GRID CONTINUACIÓN

Existe la opción `minmax()`, que nos permite definir un tamaño mínimo y máximo para las columnas y filas.

```css
.container {
    display: grid;
    grid-template-columns: minmax(100px, 1fr) minmax(200px, 1fr) minmax(100px, 1fr);
    grid-template-rows: 100px 100px 100px;
    gap: 10px;
}
```

## Grid Template Areas

Podemos nombrar las celdas utilizando `grid-template-areas` y asignando un nombre a cada una.

### CSS

```css
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 100px);
    gap: 10px;
    grid-template-areas: 
        "header header header"
        "main main sidebar"
        "footer footer footer";
}

.item-1 { grid-area: header; }
.item-2 { grid-area: main; }
.item-3 { grid-area: sidebar; }
.item-4 { grid-area: footer; }
```

## Alineación en Grid

Podemos utilizar `justify-items` y `align-items` para alinear los elementos dentro de las celdas. Sus opciones posibles son:

- `start`
- `center`
- `stretch`
- `baseline`

Por defecto, se utiliza `stretch`.

```css
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 100px);
    gap: 10px;
    justify-items: start;
    align-items: end;
}
```

Podemos decirle a un ítem en concreto que se alinee de manera diferente utilizando:

- `justify-self`
- `align-self`

Sus opciones son:

- `start`
- `center`
- `stretch`
- `baseline`

## Alineación del Grid en su contenedor

Podemos alinear nuestro grid en base a su contenedor utilizando `justify-content` y `align-content`.

Sus opciones son:

- `start`
- `end`
- `center`
- `stretch`
- `space-around`
- `space-between`
- `space-evenly`

```css
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 100px);
    gap: 10px;
    justify-content: center;
    align-content: center;
}
```

## Grid Responsive con `auto-fit`

Podemos crear un Grid responsive con el uso de `auto-fit`. Esto nos permite que los elementos se ajusten al tamaño del contenedor.

```css
.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-template-rows: repeat(4, 1fr);
    gap: 10px;
}