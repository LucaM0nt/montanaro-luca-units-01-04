/**
 * @file script.js
 * @date February 2025
 * @author Luca Montanaro
 * 
 * @description This file contains the JavaScript code for the Grade Checker exercise.
 * 
 * @remarks
 * This exercise demonstrates the use of functions and loops in JavaScript.
 * The script uses the assignGrade function previously created and uses it to log grades for scores from 60 to 100.
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

/**
 * Iterates through numbers from 60 to 100 and logs the grade for each score using the assignGrade function.
 * @example
 * // Logs: "For 60 you got a E", "For 61 you got a E", ..., "For 100 you got a A"
 */
for (let i = 60; i <= 100; i++) {
  console.log(`For ${i} you got a ${assignGrade(i)}`);
}