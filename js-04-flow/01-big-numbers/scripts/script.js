/**
 * @file script.js
 * @date February 2025
 * @author Luca Montanaro
 * 
 * @description This file contains the JavaScript code for the Big Numbers exercise.
 * 
 * @remarks
 * This exercise demonstrates the use of function parameters in JavaScript.
 * The function greaterNum takes two parameters and returns the greater of the two numbers.
 * 
 * function greaterNum - Uses function parameters to determine and return the greater of two numbers.
 * 
 * The greaterNum function takes two parameters: firstNumber and secondNumber.
 * It compares the two numbers and returns the greater one.
 * It logs the result to the console.
 * 
 * By calling the function with different arguments, you can see the results of the comparisons.
 */

/**
 * This function determines the greater of two numbers.
 * @param {number} firstNumber - The first number to compare.
 * @param {number} secondNumber - The second number to compare.
 * @returns {number} - Returns the greater of the two numbers.
 * @example
 * greaterNum(5, 10); // 10
 * greaterNum(10, 5); // 10
 */
function greaterNum(firstNumber, secondNumber) {
  return firstNumber > secondNumber ? firstNumber : secondNumber;
}

/**
 * The first number to compare.
 * @type {number}
 */
let firstNumber = 5;

/**
 * The second number to compare.
 * @type {number}
 */
let secondNumber = 10;

/**
 * Logs the result of the comparison to the console.
 * @example
 * // Logs: "The greater number of 5 and 10 is 10"
 */
console.log(`The greater number of ${firstNumber} and ${secondNumber} is ${greaterNum(firstNumber, secondNumber)}`);

/**
 * Updates the first number to compare.
 * @type {number}
 */
firstNumber = 10;

/**
 * Updates the second number to compare.
 * @type {number}
 */
secondNumber = 5;

/**
 * Logs the result of the comparison to the console.
 * @example
 * // Logs: "The greater number of 10 and 5 is 10"
 */
console.log(`The greater number of ${firstNumber} and ${secondNumber} is ${greaterNum(firstNumber, secondNumber)}`);