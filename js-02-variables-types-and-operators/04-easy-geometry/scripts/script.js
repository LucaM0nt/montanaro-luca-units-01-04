/**
 * @file script.js
 * @date February 2025
 * @author Luca Montanaro
 * 
 * @description This file contains the JavaScript code for the Easy Geometry exercise.
 * 
 * @remarks
 * This exercise demonstrates the use of variables in JavaScript.
 * Given a radius as a global variable, the program calculates and prints to console the circumference and the area of the corresponding circle.
 * The program uses the js Math.PI object for the Greek pi.
 */

/**
 * The radius of the circle.
 * @type {number}
 */
let radius = 10;

/**
 * The circumference of the circle.
 * @type {number}
 */
let circumference = Math.PI * radius * 2;

/**
 * The area of the circle.
 * @type {number}
 */
let area = Math.PI * radius ** 2;

/**
 * Logs the circumference and area of the circle to the console.
 * @example
 * // Logs: "The circumference is 62.83185307179586"
 * // Logs: "The area is 314.1592653589793"
 */
console.log(`The circumference is ${circumference}`);
console.log(`The area is ${area}`);