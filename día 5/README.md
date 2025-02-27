# Guía de Flexbox en CSS

**Flexbox** (Flexible Box Layout) es un modelo de diseño en CSS que permite distribuir el espacio entre los elementos de un contenedor de manera eficiente, y controlar la alineación y distribución de los elementos hijos. Es útil especialmente para diseños responsivos y adaptables.

## 1. Propiedades del contenedor Flex (contenedor principal)

Para utilizar Flexbox, primero debes establecer `display: flex` en el contenedor principal. Esto convierte al contenedor en un "contenedor Flex" y los elementos hijos en "elementos Flex".

### Ejemplo básico de contenedor Flex:

```css
.contenedor {
    display: flex; /* Establece el contenedor como un contenedor Flex */
}
Propiedades del contenedor Flex:
1.1. flex-direction
Esta propiedad define la dirección en la que los elementos hijos se distribuyen dentro del contenedor. Los valores posibles son:

row (predeterminado): Los elementos se alinean en una fila, de izquierda a derecha.
row-reverse: Los elementos se alinean en una fila, pero en orden inverso.
column: Los elementos se alinean en una columna, de arriba a abajo.
column-reverse: Los elementos se alinean en una columna, pero en orden inverso.

.contenedor {
    display: flex;
    flex-direction: row; /* Otros valores: row-reverse, column, column-reverse */
}
1.2. justify-content
Controla la alineación de los elementos a lo largo del eje principal (horizontal o vertical, dependiendo de flex-direction). Sus valores más comunes son:

flex-start: Alinea los elementos al inicio del contenedor.
flex-end: Alinea los elementos al final del contenedor.
center: Alinea los elementos al centro del contenedor.
space-between: Distribuye los elementos con el máximo espacio entre ellos.
space-around: Distribuye los elementos con espacio alrededor de ellos.

.contenedor {
    display: flex;
    justify-content: center; /* Otros valores: flex-start, flex-end, space-between, space-around */
}
1.3. align-items
Controla la alineación de los elementos a lo largo del eje transversal (el que es perpendicular a flex-direction).

flex-start: Alinea los elementos al inicio del eje transversal.
flex-end: Alinea los elementos al final del eje transversal.
center: Alinea los elementos al centro del eje transversal.
baseline: Alinea los elementos por su línea de base.
stretch: Estira los elementos para que llenen el contenedor (valor predeterminado).

.contenedor {
    display: flex;
    align-items: center; /* Otros valores: flex-start, flex-end, baseline, stretch */
}
1.4. align-self
Permite a un elemento anular el valor de align-items solo para él, alineándolo de manera independiente.


.elemento {
    align-self: flex-end; /* Anula 'align-items' solo para este elemento */
}
2. Propiedades de los elementos Flex (hijos)
Una vez que hayas establecido un contenedor Flex, puedes modificar el comportamiento de los elementos hijos con las siguientes propiedades:

2.1. flex-grow
Define cómo los elementos Flex pueden crecer para llenar el espacio disponible. El valor predeterminado es 0, lo que significa que los elementos no crecerán. Si el valor es mayor que 1, el elemento ocupará más espacio.


.elemento {
    flex-grow: 1; /* Este elemento crecerá para ocupar todo el espacio restante */
}
2.2. flex-shrink
Define cómo los elementos Flex se encogen cuando no hay suficiente espacio. El valor predeterminado es 1, lo que significa que los elementos pueden encogerse si es necesario.


.elemento {
    flex-shrink: 1; /* Este elemento puede encogerse si es necesario */
}
2.3. flex-basis
Establece el tamaño inicial de un elemento antes de que el espacio adicional sea distribuido. El valor predeterminado es auto, lo que significa que el tamaño se basa en el contenido.


.elemento {
    flex-basis: 200px; /* Establece el tamaño inicial del elemento en 200px */
}
2.4. flex
Es una propiedad abreviada que combina flex-grow, flex-shrink y flex-basis en una sola línea.


.elemento {
    flex: 1; /* Equivalente a flex-grow: 1; flex-shrink: 1; flex-basis: 0% */
}
2.5. order
Permite cambiar el orden visual de los elementos sin modificar su orden en el código HTML. El valor predeterminado es 0, y se puede asignar valores negativos o positivos.


.elemento {
    order: 2; /* Cambia el orden del elemento */
}
3. Ejemplo completo de uso de Flexbox
Aquí te dejo un ejemplo de un diseño básico con Flexbox:

html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo Flexbox</title>
    <style>
        /* Contenedor Flex */
        .contenedor {
            display: flex;
            justify-content: space-between; /* Distribuye los elementos con espacio entre ellos */
            align-items: center; /* Centra los elementos en el eje transversal */
            height: 100vh; /* Asegura que el contenedor ocupe toda la altura de la pantalla */
            background-color: lightgray;
        }

        /* Elementos Flex */
        .elemento {
            background-color: #4CAF50;
            padding: 20px;
            color: white;
            font-size: 1.2em;
            border-radius: 5px;
            margin: 10px;
        }

        .elemento2 {
            background-color: #FF5733;
            flex-grow: 2; /* Este elemento ocupará más espacio */
        }

        .elemento3 {
            background-color: #3498DB;
            flex-shrink: 0; /* Este elemento no se reducirá */
        }

        .elemento4 {
            background-color: #9B59B6;
            flex-basis: 150px; /* Establece un tamaño inicial de 150px */
        }
    </style>
</head>
<body>

    <div class="contenedor">
        <div class="elemento">Elemento 1</div>
        <div class="elemento elemento2">Elemento 2</div>
        <div class="elemento elemento3">Elemento 3</div>
        <div class="elemento elemento4">Elemento 4</div>
    </div>

</body>
</html>

Explicación del ejemplo:
El contenedor tiene display: flex, lo que convierte a sus hijos en elementos flexibles.
justify-content: space-between; distribuye el espacio de manera equitativa entre los elementos.
align-items: center; asegura que los elementos se alineen verticalmente en el centro del contenedor.
El elemento .elemento2 tiene flex-grow: 2, lo que significa que ocupará más espacio que los otros elementos.
El elemento .elemento3 tiene flex-shrink: 0, lo que impide que se reduzca cuando no hay suficiente espacio.
El elemento .elemento4 tiene flex-basis: 150px, lo que establece un tamaño inicial antes de aplicar el crecimiento o encogimiento.

Conclusión
Flexbox es una herramienta poderosa para crear diseños responsivos y alineaciones complejas en CSS. Con sus propiedades como flex-direction, justify-content, align-items, flex-grow, y otras, puedes controlar de manera precisa la distribución y alineación de los elementos dentro de un contenedor.

Este modelo de diseño es muy útil para proyectos donde se requiere una disposición flexible de los elementos, como en el caso de sitios web o aplicaciones móviles.

¡Ahora puedes experimentar y crear diseños flexibles con Flexbox!