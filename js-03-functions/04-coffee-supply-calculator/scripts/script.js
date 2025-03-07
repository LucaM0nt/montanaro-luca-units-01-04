/**
 * @file script.js
 * @date February 2025
 * @author Luca Montanaro
 * 
 * @description This file contains the JavaScript code for the Coffee Supply Calculator exercise.
 * 
 * @remarks
 * This exercise demonstrates the use of function parameters in JavaScript.
 * The function calculateSupply takes two parameters and logs the total amount of coffee needed for the rest of the life.
 * The function calculateSupplyLiters takes two parameters and logs the total amount of liters of coffee needed for the rest of the life.
 * 
 * Functions included:
 * - function calculateSupply - Uses function parameters to calculate and log the total amount of coffee needed.
 * - function calculateSupplyLiters - Uses function parameters to calculate and log the total amount of liters of coffee needed.
 * 
 * The calculateSupply function takes two parameters: age and amountPerDay.
 * The calculateSupplyLiters function takes two parameters: age and litersPerDay.
 * They calculate the total amount of coffee cups or liters of coffee needed, based on the provided age and daily consumption.
 * They log the result to the console.
 * 
 * By calling the functions with different arguments, you can see the total amount of coffee cups or liters of coffee needed for different ages and daily consumption rates.
 */

/**
 * This is a global constant that represents the maximum age, to be used across all the document.
 * @constant {number}
 * @default 99
 */
const maxAge = 99;

/**
 * This function calculates the total amount of coffee needed for the rest of the life based on the provided age and daily consumption.
 * @param {number} age - The current age.
 * @param {number} amountPerDay - The amount of coffee consumed per day.
 * @returns {void}
 * @example
 * calculateSupply(25, 2); // Logs "You will need 53900 cups of coffee to last you until the age of 99"
 */
function calculateSupply(age, amountPerDay) {
  let totalAmount = (maxAge - age) * 365 * amountPerDay;
  console.log(`You will need ${totalAmount} cups of coffee to last you until the age of ${maxAge}`);
}

// Calling the function with different arguments to see the total amount of coffee needed.
calculateSupply(25, 2); 
calculateSupply(40, 3);
calculateSupply(60, 1);

/**
 * This function calculates the total amount of liters of coffee needed for the rest of the life based on the provided age and daily consumption.
 * @param {number} age - The current age.
 * @param {number} litersPerDay - The amount of liters of coffee consumed per day in liters.
 * @returns {void}
 * @example
 * calculateSupplyLiters(25.3, 2); // Logs "You will need 53900 liters of coffee to last you until the age of 99"
 */
function calculateSupplyLiters(age, litersPerDay) {
  let totalAmount = (maxAge - age) * 365 * litersPerDay;
  console.log(`You will need ${totalAmount} liters of coffee to last you until the age of ${maxAge}`);
}

// Calling the function with different arguments to see the total amount of liters of coffee needed.
calculateSupplyLiters(25.3, 2);
calculateSupplyLiters(40.7, 3);
calculateSupplyLiters(60.2, 1);