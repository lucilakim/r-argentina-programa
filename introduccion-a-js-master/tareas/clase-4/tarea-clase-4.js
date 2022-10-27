// TAREA: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.
/*
for (let i = 3; i <=22; i+=3){
    console.log(i);
}
*/
// TAREA: Usando un bucle 'while', decile a tu computadora que registre los números de
//       diez a uno.
/*
let numero = 10;

while (numero > 0){
    console.log(numero);
    numero -= 1
}
*/
// TAREA: Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.
// Cuenta del 1 al 50 e imprime los números:
// * Si un número es múltiplo de tres, imprime 'Fizz'.
// * Si es un múltiplo de 5, imprime 'Buzz'.
// * Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
// * Para todo lo demás, imprime el número mismo.
// NOTA: Es posible que desees utilizar el operador aritmético modulo (%):
// Calcula el resto al dividir.
// 10% 3 = 1 - en 10 tenemos 3 * 3 + 1
// 16% 4 = 0 - en 16 tenemos 4 * 4
// 19% 4 = 3 - en 19 tenemos 4 * 4 + 3, etc.

// -------------- Main Program --------------
for (let i = 1; i <= 50; i++) {
    fizzBuzz(i);
}

// -------------- Functions --------------
function fizzBuzz(number) {
    const FIRST_DIVISOR = 3;
    const SECOND_DIVISOR = 5;

    if ((number % FIRST_DIVISOR == 0) && (number % SECOND_DIVISOR == 0)) {
        console.log('FizzBuzz');

    } else if (number % FIRST_DIVISOR == 0) {
        console.log('Fizz');

    } else if (number % SECOND_DIVISOR == 0) {
        console.log('Buzz');


    } else {
        console.log(number);
    }
}

// -------------- Tests --------------
//fizzBuzz(5); // Buzz
//fizzBuzz(3); // Fizz
//fizzBuzz(15); // FizzBuzz
//fizzBuzz(28); // 28

// Calcular el promedio de todos los números en un array de números. (y ponerlo en una función)
// ej.: calcularPromedio([10,5,4,2,8])
