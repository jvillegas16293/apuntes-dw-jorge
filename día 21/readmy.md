## VARIABLES EN CSS

Se pueden crear valores de css para reutilizar valores en diferentes partes del código.

- Mejora la legitibidad del código
- Facilita la actualización de valores

Se suele crear de manera global en la raíz del documento, en la web, el .ROOT  es la rtiqueta <html> , en SVG es la etiqeuta <svg>
, además tiene mayor especificidad ":root" que html-


[Ejemplo Bootstrap]: https://getbootstrap.com/

´´´´CSS

:root {

    --blue: #007b7f
    --indigo: #6610f2
    --purple: #6f42c1
    --mi-bg--principal:
    --mi--color-principal
}

.container {
    backgroundcolor-color: var(--mi-bg--principal);
    color: var(--mi--color-principal);
}

