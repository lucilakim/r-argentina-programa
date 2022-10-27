// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

/*const MI_NOMBRE = 'fabricio';
const NOMBRE_MADRE = 'teresa';

// ATENCIÓN si aprentan ESC en el promp les va a dar un error. (prompt("Cómo te llamas?" || '').toLowerCase();
//https://developer.mozilla.org/en-US/docs/Web/JavaScript
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
const nombreUsuario = (prompt('Cómo te llamas?') || '').toLocaleLowerCase();

if (MI_NOMBRE === nombreUsuario) {
    console.log(`Hola, tocayo! Yo también me llamo ${MI_NOMBRE}`);
} else if (NOMBRE_MADRE === nombreUsuario) {
    console.log(`Hola ${nombreUsuario}, te llamas igual que mi mamá!`);
} else if (nombreUsuario.trim().length === 0) {
    console.log('No ingresaste ningun nombre.');
} else {
    console.log(`Hola ${nombreUsuario}!`);
}
*/
//------------------mio
// let userName = prompt('Cuál es tu nombre?').toLowerCase();
// let myName = 'lucila';
// let myFriendsName = 'victoria';

// let result;

// if(userName === myName) {
//     result = `Hola, Tocaya! Yo tambien me llamo ${myName}`;
// } else if(userName === myFriendsName) {
//     result = `Hola ${userName} te llamás igual que mi amiga`;
// } else {
//     result = `Hola ${userName}!`
// }

// console.log(result);
//----------------------------------------------------------------------------------------------
//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

/*
const MI_EDAD = 32;
const edadUsuario = Number(prompt('Qué edad tenés?'));

if (MI_EDAD === edadUsuario) {
    console.log('Tenemos la misma edad!');
} else if (edadUsuario > MI_EDAD) {
    console.log('Sos nas grande que yo');
} else if (edadUsuario < MI_EDAD) {
    console.log('Sos mas chico que yo')
} else {
    console.log('No te entendi la respuesta')
}
*/
//------------------mio
// let userAge = Number(prompt('Cuántos años tenes?'));
// let myAge = 10;

// let resultAge;

// if (userAge === myAge) {
//     resultAge = 'Tenemos la misma edad!';
// } else if (userAge < myAge) {
//     resultAge = 'Eres menor que yo';
// } else if (userAge > myAge) {
//     resultAge = 'Eres mayor que yo';
// }

// console.log(resultAge);
//-------------------------------------------------------------------------------------------------

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.
 /*
const EDAD_MINIMA_PARA_ENTRAR = 18;
const RESPUESTA_SI = "si";
const RESPUESTA_NO = "no";

const usuarioTieneDocumento = (prompt("Tenés documento?") || '').toLocaleLowerCase();

if (usuarioTieneDocumento === RESPUESTA_SI) {
    const edadUsuario = Number(prompt("Cuantos años tenes?"));

    if (edadUsuario >= EDAD_MINIMA_PARA_ENTRAR) {
        console.log("Bienvenido al bar!");
    } else if (edadUsuario < EDAD_MINIMA_PARA_ENTRAR) {
        console.log("No podés entrar al bar.")
    } else {
        console.log("No entendí la respuesta de la edad.");
    }
} else if (usuarioTieneDocumento === RESPUESTA_NO) {
    console.log("Se necesita documento para pasar al bar.")
} else {
    console.log("No entendí la respuesta de si tenés DNI o no");
}
*/

//-------------------------------Forma Emiliano, mas elegante con función

function tarea() {
    //tareaCompararNombres();
    //tareaComprarEdades();
    tareaEntradaAlBar();
}

function tareaCompararNombres() {
    const NOMBRE_MIO = 'emiliano';
    const NOMBRE_MI_GATO = 'francis';

    const nombreUsuario = prompt('Cómo te llamas?');
    const nombreUsuarioMinusculas = nombreUsuario.toLocaleLowerCase();

    if (NOMBRE_MIO === nombreUsuarioMinusculas) {
        alert(`Bienvenido Tocayo! Yo también me llamo ${NOMBRE_MIO}`);
    } else if (NOMBRE_MI_GATO === nombreUsuarioMinusculas) {
        alert(
            `${NOMBRE_MI_GATO}?, te llamás igual que mi gato. Bienvenido igualmente`);
    } else {
        alert(`Bienvenido ${nombreUsuario}`);
    }
}

function tareaComprarEdades() {
    const EDAD_MIA = 18;

    const edadUsuario = Number(prompt('Cuántos años tenés?'));

    if (edadUsuario < EDAD_MIA) {
        alert('Soy mas grande que vos');
    } else if (edadUsuario > EDAD_MIA) {
        alert('Sos mas grande que yo')
    } else {
        alert(`Que casualidad, tenemos la misma edad, ${EDAD_MIA}`)
    }
}

function tareaEntradaAlBar() {
    const EDAD_MINIMA_ENTRADA = 18;
    const SALUDO_ENTRADA = 'Así que queres entrar al bar, vamos a ver'
    alert(SALUDO_ENTRADA);

    const tieneDNI = preguntarDNIEnLaEntrada();

    if(tieneDNI){
        preguntarEdadEnLaEntrada(EDAD_MINIMA_ENTRADA);
    }
}

function preguntarDNIEnLaEntrada() {
    const RESPUESTA_SI = 'si';
    const RESPUESTA_NO = 'no';

    const usuarioTieneDNI = prompt('Tenes DNI? (Limitarse a si o no)').toLocaleLowerCase();

    if (usuarioTieneDNI === RESPUESTA_SI) {
        return true;
    } else if (usuarioTieneDNI === RESPUESTA_NO) {
        alert('Anda a buscar tu DNI');
        return false;
    } else {
        alert('No te entendi');
        return preguntarDNIEnLaEntrada();
    }
}    

function preguntarEdadEnLaEntrada(edadMinimaParaIngresar) {
    const edadUsuario = Number(prompt('Cuántos años tenés?'));
    const esMayorDeEdad = edadUsuario >= edadMinimaParaIngresar;
    if (esMayorDeEdad) {
        alert(
            'Bienvenido al bar, te esta esperando en dueño para hablar un par de cosas'
        )
    } else {
        alert('No sos bienvenido');
    }
}

tarea();

//-------------------------------mio
// let userHasDocument = prompt('Tienes documento? Responde si o no').toLowerCase()
// let result;

// if (userHasDocument === 'si') {
//     const legalAge = 18;
//     const userAge = Number(prompt('Cuantos años tenes?'));
//     if (userAge > legalAge) {
//         result = 'Bienvenido al bar';
//     } else {
//         result = 'Lo sentimos pero no puedes ingresar por ser menor';
//     }
// } else if (userHasDocument === 'no') {
//     result = 'Lo sentimos pero no puedes entrar por no tener documento'
// } else {
//     result = 'No entendimos la respuesta';
// }

// console.log(result);