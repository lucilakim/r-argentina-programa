const $button = document.querySelector("#calculate-time");
const $totalTime = document.querySelector("#total-time")

$button.onclick = function () {
    //Obtaining the values of the form inputs
    const class1Hours = Number(document.querySelector("#class-1-hours").value);
    const class2Hours = Number(document.querySelector("#class-2-hours").value);
    const class3Hours = Number(document.querySelector("#class-3-hours").value);
    const class4Hours = Number(document.querySelector("#class-4-hours").value);
    const class5Hours = Number(document.querySelector("#class-5-hours").value);

    const class1Minutes = Number(document.querySelector("#class-1-minutes").value);
    const class2Minutes = Number(document.querySelector("#class-2-minutes").value);
    const class3Minutes = Number(document.querySelector("#class-3-minutes").value);
    const class4Minutes = Number(document.querySelector("#class-4-minutes").value);
    const class5Minutes = Number(document.querySelector("#class-5-minutes").value);

    const class1Seconds = Number(document.querySelector("#class-1-seconds").value);
    const class2Seconds = Number(document.querySelector("#class-2-seconds").value);
    const class3Seconds = Number(document.querySelector("#class-3-seconds").value);
    const class4Seconds = Number(document.querySelector("#class-4-seconds").value);
    const class5Seconds = Number(document.querySelector("#class-5-seconds").value);

    
    // Calculating the total hours, minutes, and seconds of the classes
    const totalHours = class1Hours + class2Hours + class3Hours + class4Hours + class5Hours;
    const totalMinutes = class1Minutes + class2Minutes + class3Minutes + class4Minutes + class5Minutes;
    const totalSeconds = class1Seconds + class2Seconds + class3Seconds + class4Seconds + class5Seconds;


    // Entering the total time of the videos in the html <span>
    $totalTime.innerText = `Hours: ${totalHours}, Minutes: ${totalMinutes}, Seconds: ${totalSeconds}`
}