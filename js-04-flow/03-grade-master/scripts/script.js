/**
 * @file script.js
 * @date February 2025
 * @author Luca Montanaro
 * 
 * @description This file contains the JavaScript code for the Grade Master exercise.
 * 
 * @remarks
 * This exercise demonstrates the use of function parameters in JavaScript.
 * The function assignGrade takes one parameter and returns a grade based on the provided score.
 * 
 * function assignGrade - Uses function parameters to determine and return a grade based on the score.
 * 
 * The assignGrade function takes one parameter: score.
 * It returns a grade (A, B, C, D, or E) based on the provided score.
 * 
 * By calling the function with different arguments, you can see the grades for different scores.
 */

/**
 * This function determines the grade based on the provided score.
 * @param {number} score - The score to evaluate.
 * @returns {string} - Returns the grade corresponding to the score.
 * @example
 * assignGrade(98); // "A"
 * assignGrade(82); // "B"
 * assignGrade(66); // "D"
 */
function assignGrade(score) {
  if (score > 90) {
    return "A";
  } else if (score > 80) {
    return "B";
  } else if (score > 70) {
    return "C";
  } else if (score > 65) {
    return "D";
  } else {
    return "E";
  }
}

console.log(assignGrade(98)); 
console.log(assignGrade(82)); 
console.log(assignGrade(66));