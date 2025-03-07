/** 
 * @file script.js
 * @date February 2025
 * @author Luca Montanaro
 * 
 * @description This file contains the JavaScript code for the Variable Scope exercise.
 * 
 * @remarks
 * This exercise demonstrates the difference between variable scope in JavaScript.
 * Two functions are created: one that uses a local variable and one that uses a global variable.
 * 
 * Functions included:
 * function addNumbersLocal - Uses a local variable.
 * function addNumbersGlobal - Uses a global variable.
 * 
 * The addNumbersLocal function declares a local variable 'localResult' that is only accessible within the function.
 * The addNumbersGlobal function modifies a global variable 'globalResult' that is accessible from anywhere in the code.
 * 
 * By calling both functions, you can observe how local and global variables are handled differently.
 */

/**
 * This function demonstrates the use of local scope.
 * The variable localResult is declared inside the function and is not accessible outside of it.
 * @param {number} num1 - The first number to add.
 * @param {number} num2 - The second number to add.
 * @returns {void}
 * @example
 * addNumbersLocal(5, 10); // Logs "The local result is: 15"
 */
function addNumbersLocal(num1, num2) {
    let localResult = num1 + num2;
    console.log("The local result is: " + localResult);
}

/**
 * This variable, being declared in the global scope, can be accessed from anywhere in the code.
 * @type {number}
 * @default 0
 */
let globalResult = 0;

/**
 * This function demonstrates the use of the global variable.
 * The variable globalResult is declared in the global scope and is modified inside the function.
 * @param {number} num1 - The first number to add.
 * @param {number} num2 - The second number to add.
 * @returns {void}
 * @example
 * addNumbersGlobal(5, 10); // Logs "The global result is: 15"
 */
function addNumbersGlobal(num1, num2) {
    globalResult = num1 + num2;
    console.log("The global result is: " + globalResult);
}

// Calling the functions results in the same output, but the way they are used is different.
addNumbersLocal(5, 10);
addNumbersGlobal(5, 10);