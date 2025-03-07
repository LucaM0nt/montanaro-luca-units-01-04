/**
 * @file script.js
 * @date February 2025
 * @author Luca Montanaro
 * 
 * @description This file contains the JavaScript code for the Easy Multiplication exercise.
 * 
 * @remarks
 * This exercise demonstrates the use of loops in JavaScript.
 * The script iterates through numbers from 0 to 10 and logs the multiplication table of 9.
 * Additionally, it uses a nested loop to show the tables for every multiplier from 1 to 10.
 */

/**
 * Logs the multiplication table of 9 from 0 to 10.
 * @example
 * // Logs: "9 * 0 = 0", "9 * 1 = 9", "9 * 2 = 18", ..., "9 * 10 = 90"
 */
for (let i = 0; i <= 10; i++) {
    let num = i * 9;
    console.log(`9 * ${i} = ${num}`);
}

/**
 * Logs the multiplication tables from 1 to 10 for each multiplier from 0 to 10.
 * @example
 * // Logs: "1 * 0 = 0", "1 * 1 = 1", ..., "10 * 10 = 100"
 */
for (let i = 1; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
        let num = i * j;
        console.log(`${i} * ${j} = ${num}`);
    }
}