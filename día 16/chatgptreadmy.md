BEM (BLOCK, ELEMENT, MODIFIER)
BEM es una metodología para escribir CSS de manera estructurada y reutilizable.

Estructura de BEM
Block → Componente principal.

Element → Parte interna del bloque.

Modifier → Variación del bloque o elemento.

Suite CSS
Utilities
Las clases de utilidad se escriben con u-utilityName, por ejemplo:

css
Copiar
Editar
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
Se utilizan para aplicar estilos específicos a cualquier elemento sin necesidad de crear clases personalizadas.

Componentes
Los componentes siguen la convención de PascalCase:

Ejemplo:

html
Copiar
Editar
<header class="Header"></header>
<button class="MiBoton"></button>
<section class="SeccionHero"></section>
Elementos
Los elementos dentro de un componente se escriben en camelCase:

html
Copiar
Editar
<article class="Tweet">
    <header class="Tweet-header">
        <img class="Tweet-img" src="" alt="">
    </header>
    <div class="Tweet-body"></div>
</article>
Modificadores
Los modificadores se escriben con -- y en camelCase:

html
Copiar
Editar
<button class="Button">Botón Normal</button>
<button class="Button Button--navidad">Botón de Navidad</button>
Estados (is-estado)
Las clases de estado indican un cambio visual y se escriben con is-.

css
Copiar
Editar
.Tweet {
    /* Estilos del tweet normal */
}

.Tweet.is-expanded {
    /* Estilos cuando el tweet está expandido */
}
Ejemplo en HTML:

html
Copiar
Editar
<article class="Tweet is-expanded"></article>
Continuación de Grid CSS
minmax()
minmax() permite definir un tamaño mínimo y máximo para las columnas o filas.

css
Copiar
Editar
.container {
    display: grid;
    grid-template-columns: minmax(100px, 1fr) minmax(200px, 1fr) minmax(100px, 1fr);
    grid-template-rows: 100px 100px 100px;
    gap: 10px;
}
Grid Template Areas
Podemos asignar nombres a las áreas del grid para estructurar mejor el diseño.

css
Copiar
Editar
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
Alineación en Grid
Podemos alinear los elementos dentro de las celdas con justify-items y align-items:

css
Copiar
Editar
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 100px);
    gap: 10px;
    justify-items: start;
    align-items: end;
}
Para alinear elementos individuales dentro de una celda, usamos justify-self y align-self:

css
Copiar
Editar
.item {
    justify-self: center;
    align-self: start;
}
Alineación del Grid dentro de su contenedor
Podemos alinear el grid en su contenedor con justify-content y align-content:

css
Copiar
Editar
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 100px);
    gap: 10px;
    justify-content: center;
    align-content: center;
}
Grid Responsive con auto-fit
Podemos hacer que los elementos se ajusten dinámicamente con auto-fit y minmax():

css
Copiar
Editar
.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-template-rows: repeat(4, 1fr);
    gap: 10px;
}
Este documento ha sido corregido y mejorado para facilitar su lectura y comprensión. 🚀 ¿Te gustaría agregar algo más? 😊









