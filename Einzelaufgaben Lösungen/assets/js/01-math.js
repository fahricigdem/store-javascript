/**
 * VARIABLES
 */
const three = 3;
const six = 6;

// add six to three
let addResult = three + six;

// subtract six from three
let subtractResult = three - six;

// multiply three times six
let multiplyResult = three * six;

// divide three by six
let divideResult = three / six;

// modulo six by three
let moduloResult = six % three;

// log results
console.log('Drei plus Sechs', addResult);
console.log('Drei minus Sechs', subtractResult);
console.log('Drei mal Sechs', multiplyResult);
console.log('Drei geteilt durch Sechs', divideResult);
console.log('Sechs modulo drei', moduloResult);

// build a function, that:
// takes two parameters
// checks if both parameters are numbers, else returns error message in the console
// divides the first one by the second one
// adds three to the result of the division
// multiplies the result by the second parameter
// when the result is equal to 21, subtract 4
// else add 4
// and then returns the result
function mathResult(number1, number2) {
  if (typeof number1 != 'number') {
    return console.error('Der erste Parameter ist keine Zahl.');
  }

  if (typeof number2 != 'number') {
    return console.error('Der zweite Parameter ist keine Zahl.');
  }

  let result = number1 / number2;
  result = result + 3;
  result = result * number2;

  switch (result) {
    case 21:
      result = result - 4;
      break;
    default:
      result = result + 4;
      break;
  }

  return result;
}

// log the result of the function
console.log('Funktionsergebnis', mathResult(three, six));