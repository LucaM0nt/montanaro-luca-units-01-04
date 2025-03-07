/**
 * @file script.js
 * @date February 2025
 * @author Luca Montanaro
 * 
 * @description This file contains the JavaScript code for the Convert Temperature exercise.
 * 
 * @remarks
 * This exercise demonstrates the use of variables in JavaScript.
 * The program, given a Celsius temperature in a global variable, converts it to Fahrenheit and prints it to the console.
 * Afterwards, given a Fahrenheit temperature in a global variable, converts it to Celsius and prints it to the console.
 */

/**
 * The temperature in Celsius.
 * @type {number}
 */
let celsius = 20;

/**
 * The converted temperature in Fahrenheit.
 * @type {number}
 */
let fahrenheitConverted = celsius * 9 / 5 + 32;

/**
 * Logs the converted temperature from Celsius to Fahrenheit to the console.
 * @example
 * // Logs: "20°C is 68°F"
 */
console.log(`${celsius}°C is ${fahrenheitConverted}°F`);

/**
 * The temperature in Fahrenheit.
 * @type {number}
 */
let fahrenheit = 68;

/**
 * The converted temperature in Celsius.
 * @type {number}
 */
let celsiusConverted = (fahrenheit - 32) * 5 / 9;

/**
 * Logs the converted temperature from Fahrenheit to Celsius to the console.
 * @example
 * // Logs: "68°F is 20°C"
 */
console.log(`${fahrenheit}°F is ${celsiusConverted}°C`);