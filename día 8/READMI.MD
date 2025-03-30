Guía completa sobre Formularios HTML

Los formularios en HTML son fundamentales para la interacción entre los usuarios y una página web. Permiten recoger datos y enviarlos a un servidor mediante los métodos GET o POST.

🔄 1. Estructura básica de un formulario

<form action="URL-de-destino" method="get">
  <!-- Campos del formulario van aquí -->
</form>

action: indica a dónde se enviará la información cuando se envía el formulario.

method: define el método de envío.

get: la información se envía por la URL (visible).

post: la información se envía de forma oculta (por el cuerpo de la petición).

✍️ 2. Campos de entrada comunes (<input>)

2.1 Texto

<input type="text" name="usuario" placeholder="Usuario" value="Hola">

type="text": campo de texto simple.

name: es el nombre de la variable que se enviará al servidor.

placeholder: texto que aparece como sugerencia.

value: valor por defecto cargado.

2.2 Email

<input type="email" name="correo" placeholder="Tu correo">

Valida que el usuario escriba un correo con formato correcto.

2.3 Contraseña

<input type="password" name="clave" placeholder="Tu clave">

El texto se oculta al escribir.

🔫 3. Áreas de texto (<textarea>)

<textarea name="mensaje" cols="30" rows="10"></textarea>

Ideal para comentarios largos o mensajes.

Puedes controlar su tamaño con cols y rows.

🚀 4. Botones de envío

<input type="submit" value="Enviar">

Envía el formulario.

<button type="submit">Enviar</button>

Alternativa moderna, permite incluir HTML dentro del botón.

☑️ 5. Selecciones múltiples

5.1 Radio buttons (una sola opción)

<input type="radio" name="edad" value="mayor" checked> Mayor de 18
<input type="radio" name="edad" value="menor"> Menor de 18

Todos los radios deben tener el mismo name para que el navegador permita seleccionar solo uno.

checked: selecciona una opción por defecto.

5.2 Checkboxes (múltiples opciones)

<input type="checkbox" name="hobby-futbol" value="futbol"> Futbol
<input type="checkbox" name="hobby-tenis" value="tenis" checked> Tenis

Puedes marcar varias opciones.

Se envían solo los name marcados.

disabled: desactiva el campo (no se puede marcar ni enviar).

📅 6. Menú desplegable (<select>)

<select name="puesto" id="puesto">
  <option value="frontend">Frontend Developer</option>
  <option value="backend">Backend Developer</option>
  <option value="fullstack">Full Stack</option>
</select>

Muestra una lista de opciones para elegir una sola.

selected: permite preseleccionar una opción.

ℹ️ 7. Buenas prácticas

Usa label asociado con cada input usando el atributo for y el id del input.

Organiza visualmente tu formulario con fieldset y legend si es largo.

Valida los datos con required, minlength, maxlength, pattern, etc.

Para accesibilidad, asegúrate de que cada campo tenga su label correctamente definido.

✅ 8. Validaciones HTML5

<input type="email" required>
<input type="text" minlength="3" maxlength="15">
<input type="text" pattern="[A-Za-z]{3,10}">

required: campo obligatorio.

minlength / maxlength: número mínimo/máximo de caracteres.

pattern: expresión regular para validar formato.

📈 9. Enviar el formulario

Al presionar un submit, se envían los datos al action usando el method elegido.

Con GET, los datos se ven en la URL (ideal para filtros, búsquedas).

Con POST, los datos van ocultos (ideal para contraseñas, datos sensibles).

🔧 10. Ejemplo completo

