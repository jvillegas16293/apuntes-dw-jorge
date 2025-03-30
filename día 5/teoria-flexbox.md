# Guía teórica de Flexbox en CSS

**Flexbox** (Flexible Box Layout) es un modelo de diseño unidimensional de CSS que permite distribuir espacio y alinear elementos de forma eficiente dentro de un contenedor, incluso cuando su tamaño es desconocido o dinámico. Es especialmente útil para crear diseños responsivos.

---

## 🔧 Fundamentos de Flexbox

Para utilizar Flexbox, se debe aplicar la propiedad `display: flex` al contenedor padre. Esto convierte a los elementos hijos en "elementos flexibles".

```css
.contenedor {
  display: flex;
}
```

Una vez activado Flexbox, se puede controlar la **dirección**, **alineación**, **distribución del espacio** y **comportamiento de los elementos** dentro del contenedor.

---

## 📄 Propiedades del contenedor (padre)

### 1. `flex-direction`
Define la dirección del eje principal:

- `row` (por defecto): de izquierda a derecha
- `row-reverse`: de derecha a izquierda
- `column`: de arriba a abajo
- `column-reverse`: de abajo a arriba

```css
.contenedor {
  flex-direction: row;
}
```

### 2. `justify-content`
Alinea los elementos a lo largo del eje principal:

- `flex-start`: al principio
- `flex-end`: al final
- `center`: centrado
- `space-between`: espacio entre elementos
- `space-around`: espacio alrededor
- `space-evenly`: espacio uniforme entre y alrededor

```css
.contenedor {
  justify-content: center;
}
```

### 3. `align-items`
Alinea los elementos en el eje cruzado (perpendicular al principal):

- `stretch`: estira los elementos (valor por defecto)
- `flex-start`: inicio del eje cruzado
- `flex-end`: final del eje cruzado
- `center`: centrado
- `baseline`: alineación en la línea de base del texto

```css
.contenedor {
  align-items: flex-end;
}
```

### 4. `align-content`
Alinea **varias líneas** dentro del contenedor si hay múltiples filas:

- `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `stretch`

```css
.contenedor {
  align-content: space-between;
  flex-wrap: wrap;
}
```

### 5. `flex-wrap`
Controla si los elementos deben ajustarse en varias líneas:

- `nowrap` (por defecto): todos en una sola línea
- `wrap`: permite múltiples líneas
- `wrap-reverse`: en dirección opuesta

```css
.contenedor {
  flex-wrap: wrap;
}
```

### 6. `gap`
Espacio entre los elementos hijos:

```css
.contenedor {
  display: flex;
  gap: 20px;
}
```

---

## 📅 Propiedades de los elementos (hijos)

### 1. `flex-grow`
Define cuánto puede crecer un elemento para ocupar el espacio disponible:

```css
.item {
  flex-grow: 1;
}
```

### 2. `flex-shrink`
Define cuánto puede reducirse un elemento si no hay suficiente espacio:

```css
.item {
  flex-shrink: 1;
}
```

### 3. `flex-basis`
Define el tamaño inicial del elemento antes de distribuir espacio restante:

```css
.item {
  flex-basis: 150px;
}
```

### 4. `flex`
Es una propiedad abreviada de `flex-grow`, `flex-shrink` y `flex-basis`:

```css
.item {
  flex: 1 1 0%;
  /* grow: 1, shrink: 1, basis: 0% */
}
```

### 5. `align-self`
Permite sobrescribir `align-items` para un solo elemento:

```css
.item {
  align-self: center;
}
```

### 6. `order`
Cambia el orden visual del elemento sin alterar el HTML:

```css
.item {
  order: 2;
}
```

---

## 🔄 Relación entre eje principal y eje cruzado

- **Eje principal**: definido por `flex-direction`
  - `row` y `row-reverse` ➔ eje horizontal
  - `column` y `column-reverse` ➔ eje vertical
- **Eje cruzado**: perpendicular al principal

Las propiedades `justify-content` afectan el eje principal.  
Las propiedades `align-items` y `align-self` afectan el eje cruzado.

---

## 🔬 Ejemplo visual

```html
<div class="contenedor">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

```css
.contenedor {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
}

.item {
  background: lightblue;
  padding: 20px;
  margin: 10px;
}
```

---

## 📈 Ventajas de usar Flexbox

- Menos necesidad de floats o posicionamiento absoluto
- Orden visual independiente del HTML
- Alineación vertical sencilla
- Distribución automática del espacio
- Adaptable a diseños responsivos

---

## ✅ Conclusión
Flexbox es una herramienta esencial para el diseño moderno en CSS. Su sintaxis simple y potencia para controlar la distribución de los elementos lo hacen ideal para muchos tipos de layouts.

Es muy recomendable practicar con ejemplos reales para interiorizar sus propiedades y comportamiento. También se puede combinar con Grid para estructuras más complejas.

---

✨ ¡Sigue practicando para dominar Flexbox y llevar tus diseños al siguiente nivel!

