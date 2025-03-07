/**
 * @file script.js
 * @date February 2025
 * @author Luca Montanaro
 * 
 * @description This file contains the JavaScript code for the Dog Age Calculator exercise.
 * 
 * @remarks
 * This exercise demonstrates the use of function parameters in JavaScript.
 * The function calculateDogAge takes two parameters and logs the dog's age in dog years.
 * 
 * function calculateDogAge - Uses function parameters to calculate and log the dog's age in dog years.
 * 
 * The calculateDogAge function takes two parameters: age and an optional conversionRate.
 * It calculates the dog's age in dog years based on the provided conversion rate (default is 7).
 * It logs the result to the console.
 * 
 * By calling the function with different arguments, you can see the dog's age in dog years.
 */

/**
 * This function calculates a dog's age in dog years based on the provided conversion rate.
 * @param {number} age - The age of the dog in human years.
 * @param {number} [conversionRate=7] - The conversion rate from human years to dog years (default is 7).
 * @returns {void}
 * @example
 * calculateDogAge(3); // Logs "Your doggie is 21 years old in dog years!"
 * calculateDogAge(3, 10); // Logs "Your doggie is 30 years old in your custom conversion rate!"
 * calculateDogAge(7); // Logs "Your doggie is 49 years old in dog years!"
 */
function calculateDogAge(age, conversionRate = 7) {
  let dogYears = age * conversionRate;
  if (conversionRate === 7) {
    console.log(`Your doggie is ${dogYears} years old in dog years!`);
  } else {
    console.log(`Your doggie is ${dogYears} years old in your custom conversion rate!`);
  }
}

// Calling the function with different arguments to see the dog's age in dog years.
calculateDogAge(3); // "Your doggie is 21 years old in dog years!"
calculateDogAge(3, 10); // "Your doggie is 30 years old in your custom conversion rate!"
calculateDogAge(7); // "Your doggie is 49 years old in dog years!"