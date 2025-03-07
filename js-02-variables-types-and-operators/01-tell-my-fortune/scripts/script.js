/**
 * @file script.js
 * @date February 2025
 * @author Luca Montanaro
 * 
 * @description This file contains the JavaScript code for the Tell My Fortune exercise.
 * 
 * @remarks
 * This exercise demonstrates the use of variables in JavaScript.
 * The program takes four variables: number of children, partner's name, location, and job,
 * and outputs a fun string about your future using these variables.
 */

/**
 * The number of children you will have.
 * @type {number}
 */
let numChildren = 3;

/**
 * The name of your partner.
 * @type {string}
 */
let partnerName = "Osvaldo";

/**
 * The location where you will live.
 * @type {string}
 */
let location = "Ontario";

/**
 * Your future job title.
 * @type {string}
 */
let job = "Ostetrician";

/**
 * Logs a fun string about your future using the provided variables.
 * @example
 * // Logs: "You will be a Ostetrician in Ontario, and married to Osvaldo with 3 kids."
 */
console.log(`You will be a ${job} in ${location}, and married to ${partnerName} with ${numChildren} kids.`);