const $buttonNumberClasses = document.querySelector("#enter-classes");

$buttonNumberClasses.onclick = function () {
    // The user is prompted for the number of classes to be calculated.
    const numberOfClasses = Number(document.querySelector("#number-of-classes").value);
    // The inputs of the classes entered are created, calling a fuction.
    const classes = createInputClasses(numberOfClasses);

    // ----------------------------
    // Creating a button to calculate the time of videos
    // <button type="button" id="calculate-time">Calculate</button>
    const calculateTimeButton = document.createElement('button');
    calculateTimeButton.type = "button";
    calculateTimeButton.id = "calculate-time";
    calculateTimeButton.style.marginTop = "30px";
    calculateTimeButton.style.display = "block";
    calculateTimeButton.innerText = "Calculate";

    classes.appendChild(calculateTimeButton); // Adding button to form

    // ==============================
    //Calculating time 
    calculateTimeButton.onclick = function () {
        const totalVideoTime = calculateDuration();
        const FIRST_POSITION = 0;
        const SECOND_POSITION = 1;
        const THIRD_POSITION = 2;
        const totalHours = totalVideoTime[FIRST_POSITION];
        const totalMinutes = totalVideoTime[SECOND_POSITION];
        const totalSeconds = totalVideoTime[THIRD_POSITION];

        // ----------------------------
        // Entering the total time of the videos in the dom
        const $nodePageBody = document.querySelector('body');
        const totalTime = document.createElement('h3');
        totalTime.innerText = `The total time of the videos is: Hours: ${totalHours}, Minutes: ${totalMinutes}, Seconds: ${totalSeconds}.`
        $nodePageBody.appendChild(totalTime);
    }
}



function createInputClasses(quantity) {
    // The form is created with the inputs and added to the dom
    const $nodePageBody = document.querySelector('body');
    const div = document.createElement('div');
    const newTimeForm = document.createElement('form');
    div.appendChild(newTimeForm);
    $nodePageBody.appendChild(newTimeForm);

    for (let i = 0; i < quantity; i++) {
        // Creating input title
        // <h3>Class 1</h3>
        const inputTitle = document.createElement('h3');
        inputTitle.innerText = `Class ${i + 1}`;

        // Creating hours input Label 
        // <label for="class-hours">Hours: </label>
        const hoursLabel = document.createElement('label');
        hoursLabel.htmlFor = "class-hours";
        hoursLabel.innerText = "Hours: "

        //// Creating hours input  
        //<input type="number" class="class-hours" placeholder="Ej.: 2"/>
        const hoursInput = document.createElement('input');
        hoursInput.type = "number";
        hoursInput.classList.add("class-hours");
        hoursInput.placeholder = "Ej.: 2";
        hoursInput.style.marginRight = "20px";

        // ---------------------------
        // Creating minutes input Label 
        // <label for="class-minutes">Minutes: </label>
        const minutesLabel = document.createElement('label');
        minutesLabel.htmlFor = "class-minutes";
        minutesLabel.innerText = "Minutes: "

        //// Creating minutes input  
        //<input type="number" class="class-minutes" placeholder="Ej.: 25"/>
        const minutesInput = document.createElement('input');
        minutesInput.type = "number";
        minutesInput.classList.add("class-minutes");
        minutesInput.placeholder = "Ej.: 25";
        minutesInput.style.marginRight = "20px";

        // ----------------------------
        // Creating seconds input Label 
        // <label for="class-seconds">Seconds: </label>
        const secondsLabel = document.createElement('label');
        secondsLabel.htmlFor = "class-seconds";
        secondsLabel.innerText = "Seconds: ";

        //// Creating seconds input  
        //<input type="number" class="class-seconds" placeholder="Ej.: 40"/>
        const secondsInput = document.createElement('input');
        secondsInput.type = "number";
        secondsInput.classList.add("class-seconds");
        secondsInput.placeholder = "Ej.: 40";

        // ----------------------------
        // Adding to the form title/label/input hours
        newTimeForm.appendChild(inputTitle);
        newTimeForm.appendChild(hoursLabel);
        newTimeForm.appendChild(hoursInput)

        // Adding to the form label/input minutes
        newTimeForm.appendChild(minutesLabel);
        newTimeForm.appendChild(minutesInput)

        // Adding to the form label/input seconds
        newTimeForm.appendChild(secondsLabel);
        newTimeForm.appendChild(secondsInput)
    }

    return newTimeForm;
}


function calculateDuration() {
    const MINUTES_IN_SECONDS = 60;
    //Obtaining the form inputs
    const classHours = document.querySelectorAll(".class-hours");
    const classMinutes = document.querySelectorAll(".class-minutes");
    const classSeconds = document.querySelectorAll(".class-seconds");

    let totalHours = 0;
    let totalMinutes = 0;
    let totalSeconds = 0;

    // Calculating the total hours, minutes, and seconds of the classes
    for (let i = 0; i < classHours.length; i++) {
        totalHours += Number(classHours[i].value);
        totalMinutes += Number(classMinutes[i].value);
        totalSeconds += Number(classSeconds[i].value);
    }

    // if the seconds exceeds the second
    if (totalSeconds >= MINUTES_IN_SECONDS) {
        let fractionsOfSeconds = totalSeconds / MINUTES_IN_SECONDS;   // Obtaining amount of minutes to be added in minutes
        let seconds = parseInt(fractionsOfSeconds) * MINUTES_IN_SECONDS; // Obtaining the leftover seconds
        totalSeconds = totalSeconds - seconds; // Obtanining the final seconds

        totalMinutes += parseInt(fractionsOfSeconds); // Adding the remaining seconds to the minutes
    }

    // if the minutes exceeds the minute
    if (totalMinutes >= MINUTES_IN_SECONDS) {
        let fractionsOfMinutes = totalMinutes / MINUTES_IN_SECONDS;   // Obtaining amount of minutes to be added in hours
        let minutes = parseInt(fractionsOfMinutes) * MINUTES_IN_SECONDS; // Obtaining the leftover minutes
        totalMinutes -= minutes; // Obtanining the final minutes

        totalHours += parseInt(fractionsOfMinutes); // Adding the remaining minutes to the hours
    }

    return [totalHours, totalMinutes, totalSeconds];
}

