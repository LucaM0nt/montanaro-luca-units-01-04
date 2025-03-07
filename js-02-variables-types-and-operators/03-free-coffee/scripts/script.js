/**
 * @file script.js
 * @date February 2025
 * @author Luca Montanaro
 * 
 * @description This file contains the JavaScript code for the Calculate Age exercise.
 * 
 * @remarks
 * This exercise demonstrates the use of variables in JavaScript.
 * Given your birth year and a future year, this program logs a string telling you what age you might be in the future year.
 */

/**
 * The year you were born.
 * @type {number}
 */
let birthYear = 1997;

/**
 * The future year you want to calculate your age for.
 * @type {number}
 */
let futureYear = 2030;

/**
 * The age you will be in the future year if your birthday has already occurred that year.
 * @type {number}
 */
let possibleAge1 = futureYear - birthYear - 1;

/**
 * The age you will be in the future year if your birthday has not yet occurred that year.
 * @type {number}
 */
let possibleAge2 = futureYear - birthYear;

/**
 * Logs a string telling you what age you might be in the future year.
 * @example
 * // Logs: "I will be either 32 or 33 in 2030"
 */
console.log(`I will be either ${possibleAge1} or ${possibleAge2} in ${futureYear}`);