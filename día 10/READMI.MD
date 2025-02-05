# apuntes-dw-jorge
Los apuntes de clase

Esto es para cuando tenemos un formalario que hace upload, es decir, subir un archivo al formulario

<form method="POST"  enctype="multipart/form-date">
<input type="file">
</form>

- nuevas etiquetas

telefmo, url, search, time, week, month, 


# INTRODUCCIÓN A NOMENCLATURAS CSS y BEN

Forma de nombras nuestras clases CSS para mantener código limpio y ordenado. uscamos código comprensible, previsible y fácil de mantener.

## Nombre de variables/selectores/archivos

- UPPERCASE
- lowercase
- Tittle Case
- camelCase: miClaseDeHtml
- PascalCase: MiClaseDe Html
- kebab-case: mi-clase-de-html (se utiliza para nombrar archivos), 
- snake_case: mi_clase_de_html 

## Nomenclarara BEN (Blok-element-Modifier)

- [BEN] (https://getbem.com/) 

## pARA QUE?

1. comunicar un poposito
2. Comnicar la esrtructura del componente
3. Marca una especificidd baja consistente en la estructura de la página. La especificidad, si dos reglas se aplican a un mismo elemento, el que tengas una especifidad mas alta, sera la regla que se utilizará, es decir, ma simprtancia sobre el documento.## Tramos de buscar la menor especificidad ## *Menor antidad de clases en un mismo elemento.

![ESPECIFICIDAD] (https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fdkerupv5p9lu9k10w5l1.png), Clase del elemento mas grande es la que vale, depsues busca la cantidad de IDs que tega la regla.

Su nombre es en "kedab-case" separando __ para elementos -- para modificadores-

Ejemplo 
.[blloque]__[elemento]--[modificador]

EL NOMBRE DE CLASE ben POSEE 3 PARTES

1. Bloque: El nombre del componenete, el cual por si solo tiene sentido: ard, header, container, button, footer, menu, checkbox
2. Elemento: Dentro de un bloque puede haber 1 o mas elementos. Ests partes no tienen sentido por si solas: "mení item", "list item", "checkbox label", "hader tittle", 
3. Modificador: Una variación o estado diferente para un bloque o elemento, quier decir que cambia la apariencia o comprtamiento del mismo: "disabled", hightlight", size big" color blue".
ej: <div class"footer foooter--red"></div>

<style>
.card{}
.card__header{}
.card__content{}
.card__footer{}    

form{}
.form__input{}

</style>

<div class="card">

<div class="card__header">Cabecera de la tarjeta</div>
<div class="card__content">Contenido de la tarjeta</div>
<div class="card__footer">Footer de la tarjeta</div>

<div class="card__header  card__header--xmas">Cabecera de la tarjeta</div>
<div class="card__content">Contenido de la tarjeta</div>
<div class="card__footer">Footer de la tarjeta</div>


<div class="sidebar">
    <h1 class="sidebar__tittle">Título</h1>
    <ul class="sidebar__nav-list">
        <li class="sidebar__nav-item">
            <a class="sidebar__lin" href="#">Cotacto</a>
        </li>
        <li>
            <a href="#">Cotacto</a>
        </li>
        <li>
            <a href="#">Cotacto</a>
        </li>
    </ul>
</div>

<div class="sidebar">
    <h1 class="sidebar__tittle">Título</h1>
    <ul class="lista">
        <li class="lista__item">
            <a class="lista__link" href="#">Cotacto</a>
        </li>
        <li>
            <a href="#">Cotacto</a>
        </li>
        <li>
            <a href="#">Cotacto</a>
        </li>
    </ul>
</div>
