//Link original y créditos a https://github.com/CodeGuppyPrograms/CodingChallenges (contiene las respuestas).

/*
Estos desafíos de coding están enfocados para los principiantes, 
por lo tanto las soluciones fueron implementadas
usando  elementos de programación simples y clásicos.


---------------------------------------------------------------------------------
Desafío de programación #1: Imprimí los números del 1 al 10

let number = 10
while (number > 0) {
  console.log(number);
  number -= 1;
}

--------------------
function printNumbersBetween(number1, number2) {

  while (number1 <= number2) {
    console.log(number1);
    number1 = number1 + 1
  }
  while (number1 >= number2) {
    console.log(number1);
    number1 = number1 - 1;
  }

}
printNumbersFrom(10, 1);

function printNumbersBetween(number1, number2) {
  for (let i = number1; i <= number2; i++) {
    console.log(i);
  }
  for (let i = number1; i >= number2; i--) {
    console.log(i)
  }
}
printNumbersFrom(10, 1);
/*
 Resultado: 10 9 8 7 6 5 4 3 2 1


---------------------------------------------------------------------------------
 Desafìo de programación  #2: Imprimí los números impares del 1 al 100

for (let i = 1; i < 100; i = i + 2) {
  console.log(i);
}

--------------------

function getOddNumbersBeetween(number1, number2) {
  if (number1 % 2 === 0) {
    number1 += 1
  }
  for (let i = number1; i <= number2; i += 2) {
    console.log(i);
  }
  if (number1 % 2 === 0) {
    number1 -= 1
  }
  for (let i = number1; i >= number2; i -= 2) {
    console.log(i);
  }
}
getOddNumbersFrom(0, 100);
/*
 1 3 5 ... 99


---------------------------------------------------------------------------------
Desafío de programación #3: Imprimí la tabla de multiplicación del 7

let result = 0;
const SEVEN = 7;
for (i = 0; i <= 10; i++) {
  result = SEVEN * i;
  console.log(`7 * ${i} = ${result}`);
}
--------------------
function getMultiplicationTableFrom(multiplicand) {
  let product;
  for (i = 0; i <= 10; i++) {
    product = multiplicand * i;
    console.log(`${multiplicand} * ${i} = ${product}`)
  }
}
getMultiplicationTableFrom(7);
/*
 7x0 = 0
 7x1 = 7
 ...
 7x9 = 63


---------------------------------------------------------------------------------
Desafío de programación #4: Imprimí todas las tablas de multiplicación del 1 al 9

let product = 0;
let factorMultiplier = 1;

for (i = 1; i < 10; i++) {
  for (j = 0; j <= 10; j++) {
    product = factorMultiplier * j
    console.log(`${factorMultiplier} * ${j} = ${product}`);
  }
  factorMultiplier = factorMultiplier + 1
}

--------------------
function getMultiplicationTableBetween(number1, number2) {
  let multiplicand = number1;
  let product;
  if (number1 < number2) {
    for (i = number1; i <= number2; i++) {
      for (j = 0; j <= 10; j++) {
        product = multiplicand * j;
        console.log(`${multiplicand} * ${j} = ${product}`)
      }
      multiplicand += 1
    }
  }
  if (number1 > number2) {
    for (i = number1; i >= number2; i--) {
      for (j = 0; j <= 10; j++) {
        product = multiplicand * j;
        console.log(`${multiplicand} * ${j} = ${product}`)
      }
      multiplicand -= 1
    }
  }
}
getMultiplicationTableBetween(1, 9);
/*

function getMultiplicationTableBetween(number1, number2) {
  if (number1 > number2) {
    tmpNumber1 = number1, number1 = number2, number2 = tmpNumber1;
  }
  let multiplicand = number1;
  let product;

  for (i = number1; i <= number2; i++) {
    for (j = 0; j <= 10; j++) {
      product = multiplicand * j;
      console.log(`${multiplicand} * ${j} = ${product}`)
    }
    multiplicand += 1
  }
}

getMultiplicationTableBetween(2, 1);
/*
 1x0 = 0
 ...
 1x9 = 9
 2x0 = 0
 ...
 2x9 = 18
 ...
 ...
 9x9 = 81

---------------------------------------------------------------------------------
Desafío de programación #5: Calcula el resultado de la suma de los numeros 
del 1 al 10 en un array.
 [1,2,3,4,5,6,7,8,9,10]

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let resultArrayAdd = 0;
for (i = 0; i < array.length; i++) {
  resultArrayAdd = resultArrayAdd + array[i]
}
console.log(resultArrayAdd);

--------------------
resultArrayAdd es muy verbose, le podrías poner sum directamente, y podés hacer sum += array[i].
Por otro lado en vez de array le podés poner numbers y te va a quedar más prolijo. 
También todas estos challenges podés probar meterlos en funciones que de hecho te va a servir 
para no crear variables globales que se estén pisando unas a otras.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

for (i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum);


--------------------

function sum(numbers) {
  let sum = 0;

  for (i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
/*
 1 + 2 + 3 + ... + 10 = ? //hacerlo con un array y un bucle

---------------------------------------------------------------------------------
Desafío de programación #6: Calcula 10! (10 factorial)

let tenFactorial = 1;

for (i = 1; i <= 10; i++) {
  tenFactorial = tenFactorial * i;
}
console.log(`El 10! es: ${tenFactorial}`);

 10 * 9 * 8 * ... * 1

 fijate si te animás a ponerlo en una función que calcule cualquier factorial, no sólo el de 10*/
/*

function calculateFactorial(number) {
  let factorialNumber = 1;

  for (let i = 1; i <= number; i++) {
    factorialNumber = factorialNumber * i;
  }
  return factorialNumber
}
console.log(calculateFactorial(10));


---------------------------------------------------------------------------------
Desafío de programación #7: 
Calcula la suma de todos los números impares mayores que 10 y menores que 30

let addOddNumbers = 0

for (i = 11; i < 30; i = i + 2) {
  addOddNumbers = addOddNumbers + i;
}
console.log(`El resultado de la suma de los números impares entre 10 y 30 es -----> ${addOddNumbers}`);

----------------------------
addOddNumbers sería el nombre de una función, en este caso querés oddNumberSum

let oddNumbersSum = 0

for (i = 11; i < 30; i = i + 2) {
  oddNumbersSum += i;
}
console.log(`El resultado de la suma de los números impares entre 10 y 30 es -----> ${oddNumbersSum}`);

----------------------------
function addOddNumbersBetween(number1, number2) {
  let sum = 0;

  if (number1 < number2) {
    if (number1 % 2 === 0) {
      number1 += 1;
    }
    for (i = number1; i < number2; i += 2) {
      sum += i;
    }
  }
  if (number1 > number2) {
    if (number1 % 2 === 0) {
      number1 -= 1;
    }
    for (i = number1; i > number2; i -= 2) {
      sum += i;
    }
  }
  return (sum)
}
console.log(addOddNumbersBetween(30, 10));

---------------------------------------------------------------------------------
Desafío de programación #8: 
Crea una función que convierta de Celsius a Fahrenheit
ºF = (ºC · 1,8) + 32
Para calcular cuántos grados Fahrenheit son X grados Celsius, 
tenemos que multiplicar los X grados Celsius por 1,8 y sumarle 32.

let fahrenheitTemperature;
let celciusTemperature;

function convertCelsiusToFahrenheit(celciusTemperature) {
  fahrenheitTemperature = (celciusTemperature * 1.8) + 32;
  return fahrenheitTemperature;
}

--------------------
Para qué te sirve el let celsiusTemperature global que tenés declarado? 
100% importante que entiendas que no tiene nada que ver con el parámetro, 
si no lo entendés preguntá.
El fahrenheit temperature va declarado DENTRO de la función, 
tu función tiene un punto de entrada (los parámetros que toma) 
y un punto de salida (el return), tiene que depender de la menor cantidad de factores externos posible.

function convertCelsiusToFahrenheit(celciusTemperature) {
  return (celciusTemperature * 1.8) + 32;
}

console.log(convertCelsiusToFahrenheit(0));
/*
---------------------------------------------------------------------------------
Desafío de programación #9: Crea una función que convierta de Fahrenheit a Celsius
Celsius = (Fahrenheit-32) x 5/9

function convertFahrenheitToCelsius(fahrenheitTemperature) {
  return (fahrenheitTemperature - 32) * 5 / 9;
}

console.log(convertFahrenheitToCelsius(32));
/*
---------------------------------------------------------------------------------
Desafío de programación #10: Calcula la suma de todos los números en un array de números

let array = [];
let resultArrayAdd = 0;

for (i = 0; i < array.length; i++) {
  resultArrayAdd = resultArrayAdd + array[i];
}

--------------------
function sum(numbers) {
  let sum = 0;

  for (i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

console.log(sum([2, 1, 7]));

---------------------------------------------------------------------------------
Desafío de programación #11: 
Calcula el promedio de todos los números en un array de números. (en una función)
*//*
function getAverage(numbers) {
  let sum = 0;

  for (i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

console.log(getAverage([5, 2, 10]));
/*
---------------------------------------------------------------------------------
Desafío de programación #12: Crea una función que reciba un array de números y devuelva un array conteniendo solo los números positivos

let numbers = [5, 4, 3, -2, 10, 33, -4, 0];

function getPositiveNumbers(numbers) {
  let positiveNumbers = [];
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      positiveNumbers.push(numbers[i]);
    }
  }
  return positiveNumbers;
}

console.log(getPositiveNumbers(numbers));
/*
---------------------------------------------------------------------------------
Desafío de programación #13: Find the maximum number in an array of numbers

let numbers = [-5, -4, -3, -2, -10, -33, -4];

function findMaxiumNumber(array) {
  let result = -Infinity;
  for (i = 0; i < array.length; i++) {
    if (array[i] >= result) {
      result = array[i]
    }
  }
  return result;
}

console.log(findMaxiumNumber(numbers));

/*
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

console.log(getMaxOfArray(numbers));


let numbers = [-5, -4, -3, -2, -10, -33, -4];

function findMaxiumNumber(array) {
  let result = array[0];
  for (i = 0; i < array.length; i++) {
    if (array[i] >= result) {
      result = array[i]
    }
  }
  return result;
}

console.log(findMaxiumNumber(numbers));
/*


---------------------------------------------------------------------------------
Desafío de programación #14: Imprimir los primeros 10 dígitos de Fibonacci sin recursión

Fibonacci (lo buscan en google si no lo saben o no se acuerdan)
El resultado debería ser: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55


function getFibonacciSequenceOf(n) {
  let firstNumber = 0;
  let secondNumber = 1;
  let sum = 0;


  for (let i = firstNumber; i <= n; i++) {
    console.log(firstNumber)
    sum = firstNumber + secondNumber
    firstNumber = secondNumber
    secondNumber = sum
  }
  return sum
}

getFibonacciSequenceOf(10);
/*
La definición de secuencia de Fibonacci dice algo así:
Se trata de una secuencia infinita de números naturales; 
a partir del 0 y el 1, se van sumando a pares, 
de manera que cada número es igual a la suma de sus dos anteriores, tal que:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55…

A partir del 0 y el 1 aclara.
Se justifica pasarlo por parámetro en cada llamada a la función?
El ejercicio pide los primeros 10 números de la serie de Fibonacci, que le pasarías por parametro entonces? Te serviría para cualquier numero?
---------------------------------------------------------------------------------
Desafío de programación #15: Crear una función que encuentre el número n de Fibonacci usando recursión


---------------------------------------------------------------------------------
Desafío de programación #16: Crear una función que dado un número retorne un Boolean (true/false) dependiendo si es primo o no.

*/
/*
function isPrimeNumber(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
//console.log(isPrimeNumber(3)); // true
//console.log(isPrimeNumber(7)); // true
//console.log(isPrimeNumber(6)); // false
//console.log(isPrimeNumber(5)); // true
//console.log(isPrimeNumber(10)); // false
*/
/*
---------------------------------------------------------------------------------
Desafío de programación #17: Calcular la suma de los dígitos positivos de un número entero positivo
Ejemplo:
    123 = 1 + 2 + 3 = 6
    2 = 2
    1234 = 1 + 2 + 3 + 4 = 10

*/
/*
function calculateSumOfDigits(number) {
  if (number < 0) {
    console.log('The number must be positive')
    return null;
  }
  
  let sum = 0;
  // let digitArray = extractDigits(number); Option 1 
  let digitArray = [...`${number}`].map(c => parseInt(c)); // Option 2


  for (let i = 0; i < digitArray.length; i++) {
    sum += digitArray[i];
  }

  return sum;
}

console.log(calculateSumOfDigits(123)); // 6
console.log(calculateSumOfDigits(45)); // 9
console.log(calculateSumOfDigits(123456789)); //45


function extractDigits(number) {
  if (typeof number !== 'number' || !Number.isInteger(number)) {
    //throw TypeError('The argument must be a number');
    console.log('The argument must be a number');
    return null;
  }
  if (number < 0) {
    console.log('The argument must be positive');
    return null;
  }
  return [...`${number}`].map(c => parseInt(c));
}

  // let extractDigitsTest = extractDigits(123456);
  // console.log(extractDigitsTest); //--> [1, 2, 3, 4, 5, 6]
  // console.log(typeof(extractDigitsTest[0]));

  // let extractDigitsTest1 = extractDigits("123456");
  //  console.log(extractDigitsTest1); //--> // The argument must be a number - null


  // let extractDigitsTest2 = extractDigits(-123456);
  // console.log(extractDigitsTest2); //--> // The argument must be positive - null

/*

---------------------------------------------------------------------------------
Desafío de programación #18: Imprimir los primeros 100 números primos


---------------------------------------------------------------------------------
Desafío de programación #19: Crear una función que retorne un array con los primeros números "n-primos" mayores que un número particular definido "alComienzo"
Ejemplo:
  Quiero los primeros 4 números primos mayores que 5, el resultado debería ser: [7,11,13,17,19]


---------------------------------------------------------------------------------
Desafío de programación #20: Rotar un array hacia la izquierda una posición
Ejemplo:
  [9,1,2,3,4] debería quedar como [1,2,3,4,9]
  [5] debería quedar como [5]
  [4,3,2,1] debería quedar como [3,2,1,4]

function rotateLeftOnePosition(array) {
  let firstElement = array.shift();

  array.push(firstElement);

  return array;

}

firstArray = [9, 1, 2, 3, 4];
console.log(rotateLeftOnePosition(firstArray)); // [1, 2, 3, 4, 9]

secondArray = [5];
console.log(rotateLeftOnePosition(secondArray)); // [5]

thirdArray = [4, 3, 2, 1]
console.log(rotateLeftOnePosition(thirdArray)); //[3, 2, 1, 4]

---------------------------------------------------------------------------------
Desafío de programación #21: Rotar un array a la derecha una posición
Ejemplo:
  [2,3,4,1] debería quedar como [1,2,3,4]
  [2,3] debería quedar como [3,2]

function rotateRightOnePosition(array) {
  const lastElement = array.pop();

  array.unshift(lastElement);

  return array;
}

const testArray = [2, 3, 4, 1];
console.log(rotateRightOnePosition(testArray)); //[1, 2, 3, 4]

const testArray2 = [2, 3];
console.log(rotateRightOnePosition(testArray2)); //[3, 2]


--------------------------------------------------------------------------------- 
Desafío de programación #22: Invertir un array
Ejemplo:
  [1,2,3,4] debería quedar como [4,3,2,1]
  [6,5,4,3,2,1] debería quedar como [1,2,3,4,5,6]
  [5,6,3] debería quedar como [3,6,5]

// ========= Option 1 --> with function
// NO TIENE SENTIDO 
function reverse(array){
  array.reverse();

  return array;
}
console.log(reverse([1,2,3,4]));

// ========= Option 2 --> with method reverse()
// BIEN
testArray3 = [6,5,4,3,2,1];
console.log(testArray3.reverse()); // [1,2,3,4,5,6]

// ========= Option 3 --> Directly into the array
// BIEN
console.log([5,6,3].reverse()); //[3,6,5]
*/
// ========= Option 4 --> Reverse it manually

function reverse(array) {

  for (let i = 0; i < array.length / 2; i++) {

    aux = array[i];
    array[i] = array[array.length - (i + 1)];
    array[array.length - (i + 1)] = aux;

  }

  return array;
}

console.log(reverse([1, 2, 3, 4])); // [4, 3, 2, 1]
console.log(reverse([6, 5, 4, 3, 2, 1])); //[1, 2, 3, 4, 5, 6]
console.log(reverse([5, 6, 3])); // [1, 2, 3, 4, 5, 6]
/*

---------------------------------------------------------------------------------  
Desafío de programación #23: Invertir una cadena de caracteres
Ejemplo:
  "dabale arroz a la zorra el abad" debería quedar como "daba le arroz al a zorra elabad"
  "bienvenido" debería quedar como "odinevneib"


---------------------------------------------------------------------------------   
Desafío de programación #24: Crear una función que reciba dos dos arrays (arreglos) como argumentos y returne el resultado en un nuevo arreglo
Ejemplo:
  [1,2,3] con ["a","b","c"] debería quedar como [1,2,3,"a","b","c"]


---------------------------------------------------------------------------------   
Desafío de programación #25: Crear una función que reciba dos arrays (arreglos) de números como argumentos y retorne un array con números que estén en uno u otro array, pero NO en ambos.
Nota: Esto se llama "diferencia simétrica" entre conjuntos


--------------------------------------------------------------------------------- 
Desafío de programación #25: Crear una función que reciba dos arrays (arreglos) de números como argumentos y retorne un array con números que estén en uno u otro array, pero NO en ambos.
Ejemplo:
  [1,2,3] y [3,7,11] debería devolver [1,2,7,11]
  [5,10,3] y [10,1] debería quedar como [5,3,1]


---------------------------------------------------------------------------------  
Desafío de programación #26: Crear una función que reciba dos arrays de números y retorne un nuevo array con los elementos que se encuentren en el primer array, pero no en el segundo
Nota; Esto se llama "resta" entre conjuntos
Ejemplo:
  [5,1,2,3,4] y [3,4] debería devolver [5,1,2]


---------------------------------------------------------------------------------   
Desafío de programación #27: Crear una función que reciba un array de números como argumento y retorne un array con los elementos distintos
Ejemplo:
   [1,2,3,4,5,4,3,2,1,0] debería retornar [1,2,3,4,5,0]


--------------------------------------------------------------------------------- 
==== FALTAN TRADUCIR
Desafío de programación #28: Calculate the sum of first 100 prime numbers


--------------------------------------------------------------------------------- 
Desafío de programación #29: Print the distance between the first 100 prime numbers


--------------------------------------------------------------------------------- 
Desafío de programación #30-a: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.


--------------------------------------------------------------------------------- 
Desafío de programación #30-b: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.


--------------------------------------------------------------------------------- 
Desafío de programación #31-a. Create a function that will return the number of words in a text


--------------------------------------------------------------------------------- 
Desafío de programación #31-b. Create a function that will return the number of words in a text


--------------------------------------------------------------------------------- 
Desafío de programación #32. Create a function that will capitalize the first letter of each word in a text


--------------------------------------------------------------------------------- 
Desafío de programación #33. Calculate the sum of numbers received in a comma delimited string


--------------------------------------------------------------------------------- 
Desafío de programación #34. Create a function that will return an array with words inside a text


--------------------------------------------------------------------------------- 
Desafío de programación #35. Create a function to convert a CSV text to a “bi-dimensional” array


--------------------------------------------------------------------------------- 
Desafío de programación #36. Create a function that converts a string to an array of characters


--------------------------------------------------------------------------------- 
Desafío de programación #37. Create a function that will convert a string in an array containing the ASCII codes of each character


--------------------------------------------------------------------------------- 
Desafío de programación #38. Create a function that will convert an array containing ASCII codes in a string



--------------------------------------------------------------------------------- 
Desafío de programación #39. Implement the Caesar cypher


--------------------------------------------------------------------------------- 
Desafío de programación #40. Implement the bubble sort algorithm for an array of numbers


--------------------------------------------------------------------------------- 
Desafío de programación #41. Create a function to calculate the distance between two points defined by their x, y coordinates


--------------------------------------------------------------------------------- 
Desafío de programación #42. Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting


--------------------------------------------------------------------------------- 
Desafío de programación 43. Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number


--------------------------------------------------------------------------------- 
Desafío de programación #44. Create a function that will convert a string containing a binary number into a number


--------------------------------------------------------------------------------- 
Desafío de programación #45. Create a function to calculate the sum of all the numbers in a jagged array (array contains numbers or other arrays of numbers on an unlimited number of levels)


--------------------------------------------------------------------------------- 
Desafío de programación #46-a. Find the maximum number in a jagged array of numbers or array of numbers


--------------------------------------------------------------------------------- 
Desafío de programación #46-b. Find the maximum number in a jagged array of numbers or array of numbers


--------------------------------------------------------------------------------- 
Desafío de programación #47. Deep copy a jagged array with numbers or other arrays in a new array


--------------------------------------------------------------------------------- 
Desafío de programación #48. Create a function to return the longest word(s) in a string


--------------------------------------------------------------------------------- 
Desafío de programación #49. Shuffle an array of strings


--------------------------------------------------------------------------------- 
Desafío de programación #50. Create a function that will receive n as argument and return an array of n unique random numbers from 1 to n.


--------------------------------------------------------------------------------- 
Desafío de programación #51. Find the frequency of characters inside a string. Return the result as an array of objects. Each object has 2 fields: character and number of occurrences.


--------------------------------------------------------------------------------- 
Desafío de programación #52. Calculate Fibonacci(500) with high precision (all decimals)


--------------------------------------------------------------------------------- 
Desafío de programación #53. Calculate 70! with high precision (all decimals)
 */


