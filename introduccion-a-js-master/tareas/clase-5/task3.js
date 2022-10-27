/*
//TAREA 3: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.
*/

const NUMBER_OF_CLASES = 2;

const $buttonCalculate = document.querySelector('#calculate');
    
let classHours = [];
let classMinutes = [];
let classSeconds = [];

//Adders
let totalHours = 0;
let totalMinutes = 0;
let totalSeconds = 0;
let totalTime = 0;

const requestData = document.querySelector("#request-data") 
requestData.textContent =  `Enter the hours, minutes, and seconds of class 1`

for (i = 0; i < NUMBER_OF_CLASES; i++){ 
    $buttonCalculate.onclick = function(e){
        e.preventDefault();
        requestData.textContent =  `Enter the hours, minutes, and seconds of class ${i+1}`

        for(j = 0; j < NUMBER_OF_CLASES; j++) {
    
            // Class Duration
            classHours[j] = Number(document.querySelector("#class-hours").value);
            classMinutes[j] = Number(document.querySelector("#class-minutes").value);
            classSeconds[j] = Number(document.querySelector("#class-seconds").value);
    
            totalHours += totalHours[j];
            totalMinutes += totalMinutes[j];
            totalSeconds += totalSeconds[j];
        }
    
        totalTime = totalHours + totalMinutes + totalSeconds;
    
        // Adding a text field with the User Data
        const $body = document.querySelector('body');
        const paragraph = document.createElement('p');
        const textNode = document.createTextNode(`${totalTime}`);
        paragraph.appendChild(textNode);
        $body.appendChild(paragraph);
    }
}

