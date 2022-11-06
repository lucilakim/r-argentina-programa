const $buttonNumberClasses = document.querySelector("#enter-classes");
const calculateTimeButton = document.querySelector("#calculate-class-time");

$buttonNumberClasses.onclick = () => {
    const numberOfClasses = Number(document.querySelector("#number-of-classes").value);
    createInputClasses(numberOfClasses);

    calculateTimeButton.style.display = 'block';
    $buttonNumberClasses.disabled = true;
}

calculateTimeButton.onclick = () => {
    const totalVideoTime = calculateDuration();
    const totalHours = totalVideoTime[0];
    const totalMinutes = totalVideoTime[1];
    const totalSeconds = totalVideoTime[2];

    const $nodePageBody = document.querySelector('body');
    const totalTime = document.createElement('h3');
    totalTime.innerText = `The total time of the videos is: Hours: ${totalHours}, Minutes: ${totalMinutes}, Seconds: ${totalSeconds}.`
    $nodePageBody.appendChild(totalTime);

    calculateTimeButton.disabled = true;
}

function createInputClasses(quantity) {
    const classDurationForm = document.querySelector("#class-duration")
    const classFormGroup = document.createElement('fieldset');
    classFormGroup.classList.add("class-form-group");
    classFormGroup.parentElement;
    classDurationForm.appendChild(classFormGroup);
    classDurationForm.insertBefore(classFormGroup, calculateTimeButton);

    for (let i = 0; i < quantity; i++) {
        const title = document.createElement('h3');
        title.innerText = `Class ${i + 1}`;

        const hoursLabel = document.createElement('label');
        hoursLabel.htmlFor = "class-hours";
        hoursLabel.innerText = "Hours: "
        const hoursInput = document.createElement('input');
        hoursInput.type = "number";
        hoursInput.classList.add("class-hours");
        hoursInput.placeholder = "Ej.: 2";

        const minutesLabel = document.createElement('label');
        minutesLabel.htmlFor = "class-minutes";
        minutesLabel.innerText = "Minutes: "
        const minutesInput = document.createElement('input');
        minutesInput.type = "number";
        minutesInput.classList.add("class-minutes");
        minutesInput.placeholder = "Ej.: 25"

        const secondsLabel = document.createElement('label');
        secondsLabel.htmlFor = "class-seconds";
        secondsLabel.innerText = "Seconds: ";
        const secondsInput = document.createElement('input');
        secondsInput.type = "number";
        secondsInput.classList.add("class-seconds");
        secondsInput.placeholder = "Ej.: 40";

        classFormGroup.appendChild(title);
        classFormGroup.appendChild(hoursLabel);
        classFormGroup.appendChild(hoursInput)

        classFormGroup.appendChild(minutesLabel);
        classFormGroup.appendChild(minutesInput)

        classFormGroup.appendChild(secondsLabel);
        classFormGroup.appendChild(secondsInput)
    }
    return classFormGroup;
}

function calculateDuration() {
    const MINUTE_IN_SECONDS = 60;
    const classHours = document.querySelectorAll(".class-hours");
    const classMinutes = document.querySelectorAll(".class-minutes");
    const classSeconds = document.querySelectorAll(".class-seconds");
    let totalHours = 0;
    let totalMinutes = 0;
    let totalSeconds = 0;

    for (let i = 0; i < classHours.length; i++) {
        totalHours += Number(classHours[i].value);
        totalMinutes += Number(classMinutes[i].value);
        totalSeconds += Number(classSeconds[i].value);
    }

    if (totalSeconds >= MINUTE_IN_SECONDS) {
        const fractionsOfSeconds = totalSeconds / MINUTE_IN_SECONDS;
        const seconds = parseInt(fractionsOfSeconds) * MINUTE_IN_SECONDS;
        totalSeconds -= seconds;
        totalMinutes += parseInt(fractionsOfSeconds);
    }

    if (totalMinutes >= MINUTE_IN_SECONDS) {
        const fractionsOfMinutes = totalMinutes / MINUTE_IN_SECONDS;
        const minutes = parseInt(fractionsOfMinutes) * MINUTE_IN_SECONDS;
        totalMinutes -= minutes;
        totalHours += parseInt(fractionsOfMinutes);
    }

    return [totalHours, totalMinutes, totalSeconds];
}

