# Variables en CSS  

Las variables en CSS permiten almacenar valores reutilizables para aplicarlos en diferentes partes del código. Son útiles para mejorar la mantenibilidad y escalabilidad del diseño de una web.  

## 🎯 Beneficios de usar variables en CSS  
- **Mejora la legibilidad**: Facilita la comprensión del código al asignar nombres descriptivos a los valores.  
- **Facilita la actualización**: Al modificar una variable, los cambios se reflejan en todas las instancias donde se use.  
- **Optimiza la consistencia**: Garantiza que los mismos colores, tamaños o espaciados se utilicen uniformemente en toda la hoja de estilos.  
- **Permite la personalización dinámica**: Se pueden modificar con JavaScript para cambiar estilos en tiempo real.  

## 📌 Definición y alcance de las variables en CSS  
Las variables CSS se definen utilizando `--` seguido de un nombre personalizado y un valor.  

### 🏗️ Alcance de las variables  
Las variables pueden definirse en diferentes niveles del documento:  

1. **Variables globales**: Se definen en `:root`, que representa la etiqueta `<html>`.  
2. **Variables locales**: Se pueden definir dentro de un selector específico y solo serán accesibles dentro de ese ámbito.  

### ✍️ Ejemplo de definición y uso  

```css
/* Definición de variables globales en :root (alcance en toda la página) */
:root {
    --blue: #007b7f; /* Color azul personalizado */
    --indigo: #6610f2; /* Color índigo personalizado */
    --purple: #6f42c1; /* Color púrpura personalizado */
    --mi-bg-principal: #f5f5f5; /* Color de fondo principal */
    --mi-color-principal: #333; /* Color de texto principal */
}

/* Uso de variables en un contenedor */
.container {
    background-color: var(--mi-bg-principal); /* Se aplica el color de fondo desde la variable */
    color: var(--mi-color-principal); /* Se aplica el color del texto desde la variable */
}

/* Definición de variables locales dentro de un selector */
.card {
    --card-bg: #ffffff; /* Color de fondo solo para los elementos .card */
    --card-border: #ddd; /* Color del borde solo para los elementos .card */

    background-color: var(--card-bg); /* Se usa la variable local */
    border: 1px solid var(--card-border); /* Se usa la variable local */
}
