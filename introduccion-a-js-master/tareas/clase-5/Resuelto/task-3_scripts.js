const $button = document.querySelector("#calculate-time");
const $totalTime = document.querySelector("#total-time");



$button.onclick = function () {
    //Obtaining the form inputs
    const classHours = document.querySelectorAll("#class-hours");
    const classMinutes = document.querySelectorAll("#class-minutes");
    const classSeconds = document.querySelectorAll("#class-seconds");
   
    let totalHours = 0; 
    let totalMinutes = 0; 
    let totalSeconds = 0;

    // Calculating the total hours, minutes, and seconds of the classes
    for (let i = 0; i < classHours.length; i++){
        totalHours += Number(classHours[i].value); 
        totalMinutes += Number(classMinutes[i].value); 
        totalSeconds += Number(classSeconds[i].value);
    }

    // if the seconds exceeds the second
    if (totalSeconds >= 60) {
        let fractionsOfSeconds = totalSeconds / 60;   // Obtaining amount of minutes to be added in minutes
        let seconds = parseInt(fractionsOfSeconds) * 60; // Obtaining the leftover seconds
        totalSeconds = totalSeconds - seconds; // Obtanining the final seconds

        totalMinutes += parseInt(fractionsOfSeconds); // Adding the remaining seconds to the minutes
    }

    // if the minutes exceeds the minute
    if (totalMinutes >= 60) { 
        let fractionsOfMinutes = totalMinutes / 60;   // Obtaining amount of minutes to be added in hours
        let minutes = parseInt(fractionsOfMinutes) * 60; // Obtaining the leftover minutes
        totalMinutes -= minutes; // Obtanining the final minutes

        totalHours += parseInt(fractionsOfMinutes); // Adding the remaining minutes to the hours
    }

    
  
    // Entering the total time of the videos in the html <span>
    $totalTime.innerText = `Hours: ${totalHours}, Minutes: ${totalMinutes}, Seconds: ${totalSeconds}`
}