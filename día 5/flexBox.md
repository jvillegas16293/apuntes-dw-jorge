# 🧭 Guía completa de Flexbox en CSS

**Flexbox** (Flexible Box Layout) es un sistema de diseño de CSS que facilita la alineación y distribución de los elementos dentro de un contenedor, incluso cuando su tamaño es dinámico o desconocido.

Es especialmente útil para crear **diseños responsivos**, donde los elementos deben adaptarse al tamaño de la pantalla.

---

## 🔧 1. Propiedades del contenedor Flex

Para activar Flexbox, necesitas aplicar:

```css
display: flex;
Esto convierte al contenedor en un contenedor Flex, y todos sus elementos hijos se convierten en elementos Flex.

1.1. flex-direction
Define la dirección del eje principal (main axis):

Valor	Descripción
row	Horizontal (por defecto), de izquierda a derecha
row-reverse	Horizontal, de derecha a izquierda
column	Vertical, de arriba a abajo
column-reverse	Vertical, de abajo a arriba
css
Copiar
Editar
.contenedor {
    display: flex;
    flex-direction: row;
}
1.2. justify-content
Alinea los elementos a lo largo del eje principal:

Valor	Descripción
flex-start	Alinea al principio
flex-end	Alinea al final
center	Centra los elementos
space-between	Máximo espacio entre elementos
space-around	Espacio igual alrededor de cada elemento
space-evenly	Espacio uniforme entre y alrededor
css
Copiar
Editar
.contenedor {
    justify-content: space-between;
}
1.3. align-items
Alinea los elementos en el eje cruzado (perpendicular al principal):

Valor	Descripción
stretch	Estira los elementos (por defecto)
flex-start	Alinea al inicio del eje cruzado
flex-end	Alinea al final del eje cruzado
center	Centra los elementos
baseline	Alinea por la línea de base del texto
css
Copiar
Editar
.contenedor {
    align-items: center;
}
1.4. align-self
Permite a un elemento hijo sobrescribir el valor de align-items:

css
Copiar
Editar
.elemento {
    align-self: flex-end;
}
🧱 2. Propiedades de los elementos Flex (hijos)
2.1. flex-grow
Define cuánto puede crecer un elemento para llenar el espacio disponible:

css
Copiar
Editar
.elemento {
    flex-grow: 1;
}
🔎 Si varios elementos tienen flex-grow, el espacio se reparte proporcionalmente.

2.2. flex-shrink
Define cuánto puede encogerse un elemento cuando no hay suficiente espacio:

css
Copiar
Editar
.elemento {
    flex-shrink: 1;
}
2.3. flex-basis
Establece el tamaño inicial del elemento antes de distribuir espacio restante:

css
Copiar
Editar
.elemento {
    flex-basis: 200px;
}
2.4. flex (propiedad abreviada)
Combina flex-grow, flex-shrink y flex-basis:

css
Copiar
Editar
.elemento {
    flex: 1; /* Equivale a flex-grow: 1; flex-shrink: 1; flex-basis: 0% */
}
2.5. order
Cambia el orden visual de los elementos sin alterar el HTML:

css
Copiar
Editar
.elemento {
    order: 2;
}
📐 3. Ejemplo completo de Flexbox
html
Copiar
Editar
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo Flexbox</title>
    <style>
        .contenedor {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100vh;
            background-color: lightgray;
        }

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
            flex-grow: 2;
        }

        .elemento3 {
            background-color: #3498DB;
            flex-shrink: 0;
        }

        .elemento4 {
            background-color: #9B59B6;
            flex-basis: 150px;
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
🧾 Explicación del ejemplo:
El contenedor tiene display: flex, por lo que sus hijos se alinean como elementos Flex.

justify-content: space-between distribuye los elementos dejando espacio entre ellos.

align-items: center centra verticalmente los elementos dentro del contenedor.

.elemento2 crece más porque tiene flex-grow: 2.

.elemento3 no se encoge porque tiene flex-shrink: 0.

.elemento4 tiene un tamaño inicial de 150px gracias a flex-basis.

✅ Conclusión
Flexbox es una herramienta poderosa y flexible para diseñar layouts modernos.
Permite crear interfaces responsivas sin depender de floats ni position: absolute.

Con solo unas pocas propiedades (flex-direction, justify-content, align-items, flex, etc.), puedes lograr diseños adaptables para casi cualquier necesidad.

🚀 Recomendación final
Agrega este pequeño reset para usar siempre box-sizing: border-box, lo cual facilita mucho los cálculos en diseños con Flexbox:

css
Copiar
Editar
* {
  box-sizing: border-box;
}