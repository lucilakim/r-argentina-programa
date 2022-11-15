const $numbersFromHTML = document.querySelectorAll('li')
const numbers = getNumbers();

const resultNumbers = getAverageSmallerLargestFrequent(numbers);
const averageOfNumbers = resultNumbers[0];
const smallerNumber = resultNumbers[1];
const largestNumber = resultNumbers[2];
const frequentNumber = resultNumbers[3];

const $average = document.querySelector("#average");
const $smallerNumber = document.querySelector("#smaller-number");
const $largestNumber = document.querySelector("#largest-number");
const $frequentNumber = document.querySelector("#frequent-number");
$average.innerText = averageOfNumbers;
$smallerNumber.innerText = smallerNumber;
$largestNumber.innerText = largestNumber;
$frequentNumber.innerText = frequentNumber;

function getAverageSmallerLargestFrequent(array) {
    let sumOfNumbers = 0;
    let averageOfNumbers = 0;
    let smallerNumber = numbers[0];
    let largestNumber = numbers[0];
    let frequentNumber;

    for (let i = 0; i < array.length; i++) {
        sumOfNumbers += array[i];

        if (array[i] < smallerNumber) {
            smallerNumber = array[i];
        }
        if (array[i] > largestNumber) {
            largestNumber = array[i];
        }

        for (let j = 0; j < array.length; j++) {
            if (array[i] === array[j]) {
                frequentNumber = array[j];
            }
        }

        averageOfNumbers = sumOfNumbers / array.length;

    }
    return [averageOfNumbers, smallerNumber, largestNumber, frequentNumber];
}

function getNumbers() {
    const totalNumbers = []
    for (let i = 0; i < $numbersFromHTML.length; i++) {
        totalNumbers.push(Number($numbersFromHTML[i].innerText))
    }
    return totalNumbers
}



//TAREA 4: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."


