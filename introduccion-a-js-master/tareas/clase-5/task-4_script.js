const $bodyFromHtml = document.querySelector('body');
const $buttonNumberList = document.querySelector('#number-of-items-button');
const calculateValuesButton = document.querySelector('#calculate-list-values');

$buttonNumberList.onclick = () => {
    const numberOfList = Number(document.querySelector("#number-of-list").value);
    createInputItems(numberOfList);
    calculateValuesButton.style.display = 'block';
    $buttonNumberList.disabled = true;
}

calculateValuesButton.onclick = () => {
    const $resultsOfList = document.querySelector("#results-of-the-calculations-of-the-list");
    const valuesQuantity = document.querySelectorAll('.input-values');
    const values = getNumbers(valuesQuantity);
    createList(values.length);
    setResultOfList();
    $resultsOfList.style.display = 'block';
    calculateValuesButton.disabled = "true";
}

function createInputItems(quantity) {
    const formTitle = document.createElement('h3');
    formTitle.innerText = "Enter the values to be calculated: ";
    const listValuesForm = document.querySelector("#list-values-form");
    const listFormGroup = document.createElement('fieldset');
    listFormGroup.classList.add("values-form-group");
    listFormGroup.appendChild(formTitle);
    listValuesForm.appendChild(listFormGroup);
    listValuesForm.insertBefore(listFormGroup, calculateValuesButton);

    for (let i = 0; i < quantity; i++) {
        const valueLabel = document.createElement('label');
        valueLabel.htmlFor = "value-label";
        valueLabel.classList.add('value-field');
        valueLabel.innerText = `List Value ${i + 1}: `;
        const valueInput = document.createElement('input');
        valueInput.type = "number";
        valueInput.classList.add('list-value');
        valueInput.placeholder = "E.g.: 2";
        valueLabel.appendChild(valueInput);
        listFormGroup.appendChild(valueLabel);
    }
    return listFormGroup;
}

function createList() {
    const listContent = document.createElement('div');
    const resultCalculation = document.querySelector("#results-of-the-calculations-of-the-list")
    const list = document.createElement('ol');
    const title = document.createElement('h4');
    title.innerText = `List`;
    const formValues = document.querySelectorAll('.list-value');
    const values = getValuesFrom(formValues);

    for (let i = 0; i < values.length; i++) {
        const listItem = document.createElement('li');
        listItem.classList.add('list-item');
        listItem.innerText = values[i];
        list.appendChild(listItem);
    }

    listContent.appendChild(title);
    listContent.appendChild(list);
    $bodyFromHtml.appendChild(listContent);
    $bodyFromHtml.insertBefore(listContent, resultCalculation)
}


function setResultOfList() {
    const $resultsOfList = document.querySelector("#results-of-the-calculations-of-the-list");
    const title = document.createElement('h4');
    title.innerText = 'Results'
    const firtsResult = document.querySelector("#first-result");

    const numbersFromList = document.querySelectorAll('.list-item');
    const numbers = getNumbers(numbersFromList);
    const averageOfNumbers = getAverage(numbers);
    const smallerNumber = getSmallestNumber(numbers);
    const largestNumber = getLargestNumber(numbers);
    const mostRepeatedNumber = getMostRepeatedNumber(numbers);

    const $average = document.querySelector("#average");
    const $smallerNumber = document.querySelector("#smaller-number");
    const $largestNumber = document.querySelector("#largest-number");
    const $mostRepeatedNumber = document.querySelector("#most-repeated-number");
    $average.innerText = averageOfNumbers;
    $smallerNumber.innerText = smallerNumber;
    $largestNumber.innerText = largestNumber;
    $mostRepeatedNumber.innerText = checkForDuplicateNumber(mostRepeatedNumber);

    $resultsOfList.appendChild(title);
    $resultsOfList.insertBefore(title, firtsResult)
}

function getValuesFrom(inputList) {
    const totalNumbers = [];
    for (let i = 0; i < inputList.length; i++) {
        totalNumbers.push(Number(inputList[i].value));
    }
    return totalNumbers
}

function getNumbers(numbers) {
    const totalNumbers = []
    for (let i = 0; i < numbers.length; i++) {
        totalNumbers.push(Number(numbers[i].innerText));
    }
    return totalNumbers
}

function getAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

function getSmallestNumber(numbers) {
    let smallerNumber = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < smallerNumber) {
            smallerNumber = numbers[i];
        }
    }
    return smallerNumber;
}

function getLargestNumber(numbers) {
    let largestNumber = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > largestNumber) {
            largestNumber = numbers[i];
        }
    }
    return largestNumber;
}

function getMostRepeatedNumber(numbers) {
    let repeatedNumber;
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] === numbers[j]) {
                repeatedNumber = numbers[j];
            }
        }
    }
    return repeatedNumber;
}

function checkForDuplicateNumber(number) {
    if (number != undefined) {
        return number;
    } else {
        return "There is NO REPEATED NUMBER";
    }
}

//TAREA 4: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

