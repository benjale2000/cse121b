/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
};
function addNumbers () {
    let addNumber1 = Number (document.querySelector('#add1').value);
    let addNumber2 = Number (document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2)
};
document.querySelector('#addNumbers').addEventListener('click', addNumbers);
/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2) {
    return number1 - number2;
}
const subtractNumbers = function sub () {
    let subNumber1 = Number (document.querySelector('#subtract1').value);
    let subNumber2 = Number (document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subNumber1, subNumber2)
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);
/* Arrow Function - Multiply Numbers */
const multiplyNumbers = multiplyNumbers => {
    let multNumber1 = Number (document.querySelector('#factor1').value);
    let multNumber2 = Number (document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply => multNumber1 * multNumber2;
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);
/* Open Function Use - Divide Numbers */
function divide (number1, number2) {
    return number1 / number2;
}
function divideNumbers () {
    let divNumber1 = Number (document.querySelector('#dividend').value);
    let divNumber2 = Number (document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(divNumber1, divNumber2)
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);
/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
