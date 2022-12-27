const $numbersFromHTML = document.querySelectorAll('li')
const numbers = getNumbers();

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
$mostRepeatedNumber.innerText = mostRepeatedNumber;

function getNumbers() {
    const totalNumbers = []
    for (let i = 0; i < $numbersFromHTML.length; i++) {
        totalNumbers.push(Number($numbersFromHTML[i].innerText))
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

//TAREA 4: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

