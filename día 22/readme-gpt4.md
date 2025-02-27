# JavaScript (JS)

JavaScript es un lenguaje de alto nivel, interpretado y orientado a objetos que utilizamos para crear contenido dinámico e interactivo en sitios web.

## Características principales

- **Fácil de leer y escribir:** Diseñado para ser comprensible por humanos.
- **Interpretado:** Se ejecuta en tiempo real, línea por línea, sin necesidad de compilación previa.
- **Orientado a objetos (OOP - Object-Oriented Programming):** Permite organizar el código en objetos, que son colecciones de "propiedades" (características) y "métodos" (funciones).

### Ejemplo de objeto en JavaScript:

```js
const perro = {
    nombre: "Firulais",
    edad: 3,
    raza: "Labrador",
    ladrar: function() {
        console.log("¡Guau guau!");
    }
};

perro.ladrar(); // Salida: "¡Guau guau!"
```

## Dónde podemos escribir JavaScript

1. **Dentro de HTML:** Usando la etiqueta `<script>` al final del `<body>`.
   
   ```html
   <script>
       console.log("Hola, mundo!");
   </script>
   ```

2. **En la consola del navegador.**
3. **En archivos externos:** Guardando el código en un archivo `.js` y enlazándolo con HTML.
   
   ```html
   <script src="./js/miarchivo.js"></script>
   ```

4. **En editores de código como VS Code con extensiones como Quokka.js.**
5. **En plataformas online:** CodePen, JSFiddle, etc.

## Funcionalidades de JavaScript

- **Manipulación del DOM (Document Object Model):** Permite modificar o quitar elementos HTML y CSS.
- **Procesamiento de formularios:** Validación y envío de datos.
- **Mejora de animaciones:** Manipulación de efectos visuales y animaciones.
- **Manejo de eventos:** Detecta acciones del usuario (clics, movimiento del mouse, etc.).
- **Comunicación asíncrona con servidores:** AJAX / Fetch para enviar y recibir datos sin recargar la página.

## Tipos de datos en JavaScript

- **Números:** Enteros, decimales, positivos y negativos.
- **Cadenas de texto (Strings):** Secuencia de caracteres encerrada en comillas (`""`, `''`, o ````).
- **Booleanos:** `true` o `false`.
- **Arrays (Listas):** Conjunto de valores encerrados entre `[]`.
- **Objetos:** Colección de pares clave-valor entre `{}`.

## Variables: Primitivas vs. Referenciales

- **Variables primitivas:** Almacenan datos simples (números, strings, booleanos). Se pueden declarar con `let` o `const`.
- **Variables referenciales:** Almacenan referencias a objetos o arrays. Se recomienda `const`.

## Comentarios en JavaScript

- **Comentario de una línea:** 
  
  ```js
  // Esto es un comentario
  ```
  
- **Comentario de varias líneas:**
  
  ```js
  /*
     Esto es un comentario 
     de varias líneas
  */
  ```
  
- **Comentario de documentación:**
  
  ```js
  /**
   * Esta función suma dos números
   * @param {number} a 
   * @param {number} b 
   * @returns {number} Suma de a y b
   */
  function sumar(a, b) {
      return a + b;
  }
  ```

## Operadores aritméticos

- **Suma (`+`)** → `a + b`
- **Resta (`-`)** → `a - b`
- **Multiplicación (`*`)** → `a * b`
- **División (`/`)** → `a / b`
- **Módulo (`%`)** → Devuelve el resto de la división `a % b`
- **Incremento (`++`)** → Aumenta en 1 el valor de la variable.
- **Decremento (`--`)** → Disminuye en 1 el valor de la variable.

## Operadores de comparación

- `===` → Igualdad estricta (compara valor y tipo)
- `==` → Igualdad no estricta (compara solo valor)
- `!=` → Diferente
- `<` → Menor que
- `>` → Mayor que
- `<=` → Menor o igual que
- `>=` → Mayor o igual que

---



