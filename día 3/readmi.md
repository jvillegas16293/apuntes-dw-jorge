# Día 3

##REPASPO

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>soy un título y estoy en la ventana del navegador</title>

    <style>
     img {
        width: 200px:
        /*height; 200px; */
        Fijar uua poner la otra en automático 
    }     
    p { 
        color:brown
    }  
    span { 
        color:green
    } 
    </style>

    <script>
        alert("Hola a todos");
    </script>

</head>
<body>
    <h1>Encabzado principal</h1>
    <h2>Encabezado secudario</h2>
    <h3>Encabezado 3</h3>
    <h4>Encabezado 4</h4>
    <u>Texto subrayado</u>
    <i>Texto en cursiva y par hacer iconos</i>
    <!--esto es la forma de poner comentarios al programador y no se ve en la página web-->
    <!--Ña imagen tambien la puedes obtener coiando el link de la imagen--> 
    <img src="./imgs/img lobo.jpg" alt="lobo polar">    
    <hr>
    <p>me permite tener distintos párrafos</p>
    <p>párrafo 1</p>
    <p>párrafo 2</p>
    <p>párrafo 3</p>
    <loren>etiqeuta <br> lipsum</loren>
    <loren>etiqeuta <br><br><br>lipsum</loren>
    <b>Jorge Villegas</b>
    <ol>
        <li>Elemeto 1</li>
        <li>Elemento 2</li>
        <li>Elemento 3</li>
    </ol>
    <ul>
        <li>Elemeto 1</li>
        <li>Elemento 2</li>
        <li>Elemento 3</li>
    </ul>
    <!---TABLA EN HTML-->
    <p>Las propiedades que <span>ponemos</span> a una etiqieta las llamamos atributos</p>
    <table border="1">
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
        </tr>
        <tr>
            <td>4</td>
            <td>5</td>
            <td>6</td>
        </tr>
        <tr>
            <td>7</td>
            <td>8</td>
            <td>9</td>
        </tr>
        <h2>LINKS</h2>
    </table>
    <a href="enlace url" target="_blank">Texto ancla del enlace</a>

    <p>
    Valor por defecto, me recarga el link en la propia página.
    <a href="https://www.google.com" target="_blank" target="_self" >Google</a>
    </p>
   <p>
    Link que me carga la página en una pestaña nuev     
    <a href="https://www.google.com" target="_blank" target="_blank" >Google</a>
   ¿Cuando queremos abrir una pestaña nueva? en los enlaces externos.
   </p>
   <p>
    Se utilia para iframes
    <a href="https://www.google.com" target="_blank" target="_parent" >Google</a>
   </p>

    <span>Se utiliza para seleccionar texto</span>
    <div>Generar divisiones en el documento</div>


    Link la día uno
    <a href="../../dia1/index.html">link día 1</a>

    Etiquetas en linea
    <i>
    <u>
    <br>
    <img>
    <a>
    Etiquetas en bloque
    <div
    <p>
    <h1/6>
    <table>
    <hr>
    <pre>


</body>
</html>
 
 ##Selectores CSS

Para seleccionar un grupo de elementos podemos utilizar le atributo de clase, y el selectos "."
Para seleccionar un único item, podemos usar el atricuto de id, y el selectro "#"

````CSS

div{
color: blue;
}
.alumnos {
color: green;
}

#juancito{
color: red:    

}

...html

<div class=