const $body = document.querySelector('body');
const $buttonAddInput = document.querySelector('#add-input-button');
const $buttonRemoveInput = document.querySelector('#remove-input-button');
const $salaryFormContent = document.querySelector('#salary-form-content');
const $salaryForm = document.querySelector('#salary-form');
const $buttonCalculateSalary = document.querySelector('#calculate-salary-button');
const $resultContent = document.querySelector('#result-values-salary');

const $salaryFormTitle = document.createElement('h3');
$salaryFormTitle.classList.add = "salary-form-title"
$salaryFormTitle.innerText = "Enter the annual salary of each family member, only one salary per input";
$salaryFormContent.insertBefore($salaryFormTitle, $salaryForm);

$buttonAddInput.onclick = () => {
    $salaryFormContent.style.display = "block";
    $salaryFormTitle.style.display = "block";

    const $salaryInputs = createLabelInput("Annual Salary: ", "salary-label", "salary-input");
    $salaryForm.insertBefore($salaryInputs, $buttonCalculateSalary)

    return false;
}

$buttonRemoveInput.onclick = () => {
    const $allLabels = document.querySelectorAll('.salary-label');
    const $allInputs = document.querySelectorAll('.salary-input');

    $allLabels[$allLabels.length - 1].remove();
    $allInputs[$allInputs.length - 1].remove();
    $resultContent.style.display = "none";

    cleanUpInput($allInputs);
    return false;
}

$buttonCalculateSalary.onclick = () => {
    const allWagesFromHtml = document.querySelectorAll('.salary-input');
    const allWages = getNumbers(allWagesFromHtml);

    const higherSalary = getHigher(allWages);
    const smallerSalary = getSmaller(allWages);
    const averageSalary = getAverage(allWages);
    const averageMonthlySalary = getMonthlySalary(averageSalary);

    $resultContent.style.display = "block";
    const $higerSalaryElement = document.querySelector('#higher-salary');
    const $smallerSalaryElement = document.querySelector('#lower-salary');
    const $averageSalaryElement = document.querySelector('#average-salary');
    const $averageMonthlySalaryElement = document.querySelector('#average-monthly-salary');
    $higerSalaryElement.innerText = `The higher salary is: ${higherSalary}`;
    $smallerSalaryElement.innerText = `The smaller salary is: ${smallerSalary}`;
    $averageSalaryElement.innerText = `The average annual salary is: ${averageSalary}`;
    $averageMonthlySalaryElement.innerText = `The average monthly salary is: ${averageMonthlySalary}`;

    return false;
}

function createLabelInput(labelMessage, labelIdClass, inputIdClass) {
    const $fragment = new DocumentFragment();

    const $label = document.createElement('label');
    $label.htmlFor = inputIdClass;
    $label.id = labelIdClass;
    $label.classList.add(labelIdClass);
    $label.innerText = labelMessage;
    const $input = document.createElement('input');
    $input.type = "number";
    $input.id = inputIdClass;
    $input.classList.add(inputIdClass);

    $fragment.append($label);
    $fragment.append($input);

    return $fragment;
}

function getNumbers(numbers) {
    let totalNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        totalNumbers.push(Number(numbers[i].value));
    }
    return totalNumbers;
}

function getHigher(numbers) {
    let largestNumber = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largestNumber) {
            largestNumber = numbers[i];
        }
    }
    return largestNumber;
}

function getSmaller(numbers) {
    let smallerNumber = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < smallerNumber) {
            smallerNumber = numbers[i];
        }
    }
    return smallerNumber;
}

function getAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

function getMonthlySalary(annualSalary) {
    const MONTHS_OF_THE_YEAR = 12;
    return annualSalary / MONTHS_OF_THE_YEAR;
}

function cleanUpInput(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].value = "";
    }
}

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
