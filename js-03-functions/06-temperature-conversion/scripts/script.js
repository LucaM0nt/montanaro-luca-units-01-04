/**
 * @file script.js
 * @date February 2025
 * @author Luca Montanaro
 * 
 * @description This file contains the JavaScript code for the Temperature Conversion exercise.
 * 
 * @remarks
 * This exercise demonstrates the use of function parameters in JavaScript.
 * The function celsiusToFahrenheit takes one parameter and returns the temperature in Fahrenheit.
 * The function fahrenheitToCelsius takes one parameter and returns the temperature in Celsius.
 * 
 * Functions included in this file:  
 * - function celsiusToFahrenheit - Uses function parameters to calculate and return the temperature in Fahrenheit.
 * - function fahrenheitToCelsius - Uses function parameters to calculate and return the temperature in Celsius.
 * 
 * The celsiusToFahrenheit function takes one parameter: celsius.
 * The fahrenheitToCelsius function takes one parameter: fahrenheit.
 * They calculate the temperature conversion based on the provided value.
 * They return the result as a string.
 */

/**
 * This function calculates the temperature in Fahrenheit based on the provided Celsius value.
 * @param {number} celsius - The temperature in Celsius.
 * @returns {string} - Returns the temperature in Fahrenheit as a string.
 * @example
 * celsiusToFahrenheit(30); // "30°C is 86°F"
 */
function celsiusToFahrenheit(celsius) {
  let fahrenheitTemp = celsius * 9 / 5 + 32;
  return `${celsius}°C is ${fahrenheitTemp}°F`;
}

/**
 * This function calculates the temperature in Celsius based on the provided Fahrenheit value.
 * @param {number} fahrenheit - The temperature in Fahrenheit.
 * @returns {string} - Returns the temperature in Celsius as a string.
 * @example
 * fahrenheitToCelsius(86); // "86°F is 30°C"
 */
function fahrenheitToCelsius(fahrenheit) { 
  let celsiusTemp = (fahrenheit - 32) * 5 / 9;
  return `${fahrenheit}°F is ${celsiusTemp}°C`;
}

// Calling the functions with different arguments to see the temperature conversions.
console.log(celsiusToFahrenheit(30)); // "30°C is 86°F"
console.log(fahrenheitToCelsius(86)); // "86°F is 30°C"