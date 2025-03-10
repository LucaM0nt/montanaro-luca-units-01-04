/**
 * @file script.js
 * @description This file contains the JavaScript code for the Fortune Calculator exercise.
 * @date February 2025
 * @author Luca Montanaro
 * 
 * @remarks
 * This exercise demonstrates the use of function parameters in JavaScript.
 * The function tellFortune takes four parameters and returns a string that predicts the future.
 * 
 * function tellFortune - Uses function parameters to generate a fortune message.
 * 
 * The tellFortune function takes four parameters: jobTitle, location, partner, and numKids.
 * It returns a string that includes these parameters to create a fortune message.
 * 
 * By calling the function with different arguments, you can generate different fortune messages.
 */

/**
 * This function generates a fortune message based on the provided parameters.
 * @param {string} jobTitle - The job title in the fortune.
 * @param {string} location - The location in the fortune.
 * @param {string} partner - The partner's name in the fortune.
 * @param {number} numKids - The number of kids in the fortune.
 * @returns {string} - Returns a string that predicts the future based on the provided parameters.
 * @example
 * tellFortune('developer', 'Berlin', 'Anna', 2); // "You will be a developer in Berlin, and married to Anna with 2 kids."
 */
function tellFortune(jobTitle, location, partner, numKids) {
  return `You will be a ${jobTitle} in ${location}, and married to ${partner} with ${numKids} kids.`;
}

// Calling the function with different arguments to generate different fortune messages.
console.log(tellFortune('developer', 'Berlin', 'Anna', 2)); // "You will be a developer in Berlin, and married to Anna with 2 kids."
console.log(tellFortune('teacher', 'London', 'John', 3)); // "You will be a teacher in London, and married to John with 3 kids."
console.log(tellFortune('designer', 'Paris', 'Maria', 1)); // "You will be a designer in Paris, and married to Maria with 1 kids."