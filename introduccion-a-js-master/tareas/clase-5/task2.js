//TAREA 2: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

/*
Ejemplo form:
<form id="entrada-bar" onsubmit="return false;">
    <input type="text" placeholder="Ingresá tu nombre" id="nombre-usuario"/>
    <input type="number" placeholder="Ingresá tu edad" id="edad-usuario" />
    <input type="submit" value="Ingresar" id="ingresar"/>
</form>

<div id="resultado">Hola</div>
*
* */
const $button = document.querySelector('#enter');

$button.onclick = function(e){
    e.preventDefault();

    // User Data
    const userName = document.querySelector("#user-name").value;
    const userMiddleName = document.querySelector("#user-middle-name").value;
    const userLastName = document.querySelector("#user-last-name").value;
    const userAge = Number(document.querySelector("#user-age").value);

    // Changing the content of the title
    const $title = document.querySelector('h1');
    $title.innerText = `Welcome ${userName}!`;

    // Adding a text field with the User Data
    const $body = document.querySelector('body');
    const paragraph = document.createElement('p');
    const textNode = document.createTextNode(`${userName} ${userMiddleName} ${userLastName}, ${userAge}`);
    paragraph.appendChild(textNode);
    $body.appendChild(paragraph);
}

