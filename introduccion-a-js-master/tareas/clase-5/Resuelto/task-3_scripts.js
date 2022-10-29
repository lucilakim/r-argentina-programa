const $buttonNumberClasses = document.querySelector("#enter-classes");

$buttonNumberClasses.onclick = function () {
    const numberOfClasses = Number(document.querySelector("#number-of-classes").value);
    const $nodePageBody = document.querySelector('body');
    const div = document.createElement('div');
    const newTimeForm = document.createElement('form');
    div.appendChild(newTimeForm);
    $nodePageBody.appendChild(newTimeForm);

    for (let i = 0; i < numberOfClasses; i++) {
        // Creating input title
        // <h3>Class 1</h3>
        const inputTitle = document.createElement('h3');
        const textInputTitle = document.createTextNode(`Class ${i + 1}`);
        inputTitle.appendChild(textInputTitle);

        // Creating hours input Label 
        // <label for="class-hours">Hours: </label>
        const hoursLabel = document.createElement('label');
        hoursLabel.setAttribute("for", "class-hours");
        const hoursTextLabel = document.createTextNode("Hours: ");
        hoursLabel.appendChild(hoursTextLabel);

        //// Creating hours input  
        //<input type="number" class="class-hours" placeholder="Ej.: 2"/>
        const hoursInput = document.createElement('input');
        hoursInput.setAttribute("type", "number");
        hoursInput.setAttribute("class", "class-hours");
        hoursInput.setAttribute("placeholder", "Ej.: 2");
        hoursInput.style.marginRight = "20px";

        // ---------------------------
        // Creating minutes input Label 
        // <label for="class-minutes">Minutes: </label>
        const minutesLabel = document.createElement('label');
        minutesLabel.setAttribute("for", "class-minutes");
        const minutesTextLabel = document.createTextNode("Minutes: ");
        minutesLabel.appendChild(minutesTextLabel);

        //// Creating minutes input  
        //<input type="number" class="class-minutes" placeholder="Ej.: 25"/>
        const minutesInput = document.createElement('input');
        minutesInput.setAttribute("type", "number");
        minutesInput.setAttribute("class", "class-minutes");
        minutesInput.setAttribute("placeholder", "Ej.: 25");
        minutesInput.style.marginRight = "20px";

        // ----------------------------
        // Creating seconds input Label 
        // <label for="class-seconds">Seconds: </label>
        const secondsLabel = document.createElement('label');
        secondsLabel.setAttribute("for", "class-seconds");
        const secondsTextLabel = document.createTextNode("Seconds: ");
        secondsLabel.appendChild(secondsTextLabel);

        //// Creating seconds input  
        //<input type="number" class="class-seconds" placeholder="Ej.: 40"/>
        const secondsInput = document.createElement('input');
        secondsInput.setAttribute("type", "number");
        secondsInput.setAttribute("class", "class-seconds");
        secondsInput.setAttribute("placeholder", "Ej.: 40");

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

    // ----------------------------
    // Creating a button to calcculate the time of videos
    // <button type="button" id="calculate-time">Calculate</button>
    const calculateTimeButton = document.createElement('button');
    calculateTimeButton.type = "button";
    calculateTimeButton.id = "calculate-time";
    calculateTimeButton.style.marginTop = "30px";
    calculateTimeButton.style.display = "block";
    const textButton = document.createTextNode('Calculate');
    calculateTimeButton.appendChild(textButton);

    newTimeForm.appendChild(calculateTimeButton); // Adding button to dom

    // ==============================
    //Calculating time 
    calculateTimeButton.onclick = function () {
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


        // ----------------------------
        // Entering the total time of the videos in the dom
        const totalTime = document.createElement('h3');
        totalTime.innerText = `The total time of the videos is: Hours: ${totalHours}, Minutes: ${totalMinutes}, Seconds: ${totalSeconds}.`
        $nodePageBody.appendChild(totalTime);
    }
}
