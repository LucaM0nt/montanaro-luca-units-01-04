/**
 * @file script.js
 * @date February 2025
 * @author Luca Montanaro
 * 
 * @description This file contains the JavaScript code for the Merger exercise.
 * 
 * @remarks
 * This exercise demonstrates the use of function parameters in JavaScript and how we combine number and string variables.
 * The function merger takes two parameters and performs different operations based on their types.
 * 
 * function merger - Uses function parameters to perform different operations.
 * 
 * The merger function takes two parameters: first and second.
 * It checks the types of the parameters and performs the following operations:
 * - If both parameters are numbers, it returns the sum.
 * - If both parameters are strings, it returns the concatenation of the strings.
 * - If the parameters are anything else, it returns null.
 * It logs the result to the console.
 * 
 * By calling the function with different arguments, you can see the results of the different operations.
 */

/**
 * This function performs different operations based on the types of the parameters.
 * @param {number|string} first - The first parameter.
 * @param {number|string} second - The second parameter.
 * @returns {number|string|null} - Returns the sum if both parameters are numbers, the concatenation if both are strings, or null otherwise.
 * @example
 * merger(5, 10); // 15
 * merger("Hello", "World"); // "HelloWorld"
 * merger(5, "World"); // "5World"
 * merger({}, []); // null
 */
function merger(first, second) {
    let result;
    if ((typeof first === 'number' || typeof first === 'string') &&
        (typeof second === 'number' || typeof second === 'string')) {
        result = first + second;
    } else {
        result = null;
    }
    console.log(result);
    return result;
}

// Calling the function with different arguments to see the results of the different operations.
console.log(merger(5, 10)); // 15
console.log(merger("Hello", "World")); // "HelloWorld"
console.log(merger(5, "World")); // "5World"
console.log(merger({}, [])); // null