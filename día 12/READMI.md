***Utiliza en HTML**

Solemos utilizar los MQ directamente en nuestro HTML con el atributo "media". Antes de nada, debemos asegurarnos qeu exista en viewport en el head.     

*/ <meta name="viewport" content="width=device-width, initial-scale=1.0"> /*

Ejemplos no recomendados:

´´´html
<link rel="stylesheet" media="screen and (mind-width:600px)" href="./css/estilos.css">
<link rel="stylesheet" media="screen and (mind-width:1024px)" href="./css/estilos.css">

<style media="screen and (min-width:600px)>
    .body {
    background: red;
    }
</style>

AL ORDENAR EL CÓDIGO ES PREFERIBLE CREAR EL CSS POR SECCIONES: / RESET / MAIN / SECCIONES /

***ejemplo de media queries en img***

´´´
.html
<pinture>
<source  media="(min-width:650px)" srcset="url de la imagen">
<source  media="(min-width:450px)" srcset="url de la imagen">
<img src="url" alt="mimascota">
</pinture>

***Trucos para un buen responsibe***

- Utilizar medidas relativas ej: % / vw (view width) todo el ancho de la pantalla / vh (view height) [tratar de no utilizar píxeles (px)] 

- No utilizar etiquetas de height  ( lo podemos utilzar en footer o header para un alta que esta fijo, en las demas secciones dejamos el height en automatico y cambiamos el width)

***Comprobación de nuestro responsive + Media Queries***

- Utilizar le inspector de elementos de Chrome
- Probarla en nuestro propia dispositivo
- Usar el APP https://responsively.app para probar pantallas simumtáneas