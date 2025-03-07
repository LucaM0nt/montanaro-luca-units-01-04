/**
 * @file script.js
 * @date February 2025
 * @author Luca Montanaro
 * 
 * @description This file contains the JavaScript code for the Geometry Library exercise.
 * 
 * @remarks
 * This exercise demonstrates the use of function parameters in JavaScript.
 * The function calcCircumference takes one parameter and returns the circumference of a circle.
 * The function calcArea takes one parameter and returns the area of a circle.
 * 
 * Functions included in this file:
 * - function calcCircumference - Uses function parameters to calculate and return the circumference of a circle.
 * - function calcArea - Uses function parameters to calculate and return the area of a circle.
 * 
 * Both the calcCircumference and calcArea functions take one parameter: radius.
 * They calculate the circumference or area of a circle based on the provided radius.
 * They return the result as a string.
 */

/**
 * This function calculates the circumference of a circle based on the provided radius.
 * @param {number} radius - The radius of the circle.
 * @returns {string} - Returns the circumference of the circle as a string.
 * @example
 * calcCircumference(5); // "The circumference is 31.41592653589793"
 */
function calcCircumference(radius) {
  let circumference = 2 * Math.PI * radius;
  return `The circumference is ${circumference}`;
}

/**
 * This function calculates the area of a circle based on the provided radius.
 * @param {number} radius - The radius of the circle.
 * @returns {string} - Returns the area of the circle as a string.
 * @example
 * calcArea(5); // "The area is 78.53981633974483"
 */
function calcArea(radius) {
  let area = Math.PI * radius * radius;
  return `The area is ${area}`;
}

// Calling the functions with different arguments to see the circumference and area of a circle.
console.log(calcCircumference(5)); // "The circumference is 31.41592653589793"
console.log(calcArea(5)); // "The area is 78.53981633974483"