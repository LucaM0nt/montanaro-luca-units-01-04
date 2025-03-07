/**
 * @file script.js
 * @date February 2025
 * @author Luca Montanaro
 * 
 * @description This file contains the JavaScript code for the Odd or Even exercise.
 * 
 * @remarks
 * This exercise demonstrates the use of loops and conditional statements in JavaScript.
 * The script iterates through numbers from 1 to 20 and logs whether each number is odd or even.
 */

/**
 * Iterates through numbers from 1 to 20 and logs whether each number is odd or even.
 * @example
 * // Logs: "1 is odd", "2 is even", "3 is odd", ..., "20 is even"
 */
for (let x = 1; x <= 20; x++) {
    x % 2 == 0 ? console.log(`${x} is even`) : console.log(`${x} is odd`);
}