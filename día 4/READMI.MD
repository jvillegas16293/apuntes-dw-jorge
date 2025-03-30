# 📌 Selectores CSS

Los selectores en CSS permiten aplicar estilos a diferentes elementos de una página web. Aquí te explico los tipos más comunes.

---

## 🎯 Tipos de selectores en CSS

### 🔹 Selectores básicos

- **ID (`#`)** → Se usa para un único elemento en el documento.
- **Clase (`.`)** → Se usa para varios elementos con la misma clase.

```css
/* Selector de ID - Solo debe haber uno por documento */
#caja {
    color: blue;
}

/* Selector de etiqueta - Aplica a todas las etiquetas <div> */
div {
    color: green; 
}

/* Selector de clase - Aplica a todos los elementos con class="caja" */
.caja {
    color: red;
}
🖇️ Selectores avanzados
🔹 Selector de múltiples elementos
Permite aplicar un mismo estilo a varias etiquetas a la vez.

css
Copiar
Editar
h1, h2, h3, p {
    color: red;
}
🔹 Selector de atributos
Aplica estilos a elementos que tienen un atributo específico.

css
Copiar
Editar
/* Aplica estilos a imágenes con un atributo "alt" específico */
img[alt="foto 1"] {
    color: brown;
}

/* Aplica estilos a enlaces con un href específico */
a[href="urlEspecifica"] {
    background: black;
    color: white;
}

/* Aplica estilos a cualquier div que contenga "test" en su clase */
div[class*="test"] {
    background: salmon;
}
🔹 Selector de hijos directos (>)
Selecciona solo los hijos directos de un elemento.

css
Copiar
Editar
h1 > a {
    color: purple;
}
Ejemplo en HTML:

html
Copiar
Editar
<h1>
    <a href="#">Este enlace será afectado</a>
</h1>
<p>
    <a href="#">Este enlace NO será afectado</a>
</p>
🔹 Selector de todos los descendientes (espacio)
Aplica estilos a todos los elementos anidados dentro de otro.

css
Copiar
Editar
header a {
    text-decoration: none;
}
Ejemplo en HTML:

html
Copiar
Editar
<header>
    <nav>
        <a href="#">Enlace dentro de header</a> <!-- Se aplicará el estilo -->
    </nav>
</header>
🔹 Selector del siguiente hijo (+)
Selecciona el primer elemento inmediatamente después del especificado.

css
Copiar
Editar
p + a {
    font-weight: bold;
}
Ejemplo en HTML:

html
Copiar
Editar
<p>Párrafo</p>
<a href="#">Este enlace será afectado</a>
<a href="#">Este enlace NO será afectado</a>
🏗️ Ejemplo en HTML
html
Copiar
Editar
<div class="caja" id="caja1">Soy un div</div>

<div class="test">Caja color salmón</div>
<div class="test">Caja color salmón</div>
<div class="test">Caja color salmón</div>
<div class="test">Caja color salmón</div>

<header>
    <nav>
        <h1>
            <a href="#">Mi página</a>
        </h1>
        <ul>
            <li></li>
            <li></li>
        </ul>
    </nav>
</header>
🔄 Reset CSS
Buscamos que todos los navegadores inicien nuestros proyectos con los mismos estilos, eliminando los valores por defecto.

📌 Ejemplos de Reset CSS

Reset CSS de Eric Meyer

Reset CSS en GitHub

css
Copiar
Editar
/* El * selecciona todos los elementos de la web */
/* box-sizing: border-box hace que el ancho incluya el padding y el borde */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
