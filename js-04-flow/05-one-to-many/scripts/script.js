/**
 * @file script.js
 * @date February 2025
 * @author Luca Montanaro
 * 
 * @description This file contains the JavaScript code for the One to Many exercise.
 * 
 * @remarks
 * This exercise demonstrates the use of function parameters and switch statements in JavaScript.
 * The function oneToMany takes two parameters and returns a string that represents the plural form of a noun based on the provided quantity.
 * 
 * function oneToMany - Uses function parameters and switch statements to return the plural form of a noun.
 * 
 * The oneToMany function takes two parameters: noun and howMany.
 * It returns the plural form of the noun based on the provided quantity.
 * 
 * By calling the function with different arguments, you can see the plural forms of different nouns.
 */

/**
 * This function returns the plural form of a noun based on the provided quantity.
 * @param {string} noun - The noun to be pluralized.
 * @param {number} howMany - The quantity of the noun.
 * @returns {string} - Returns the plural form of the noun based on the provided quantity.
 * @example
 * oneToMany('apple', 1); // "1 apple"
 * oneToMany('apple', 5); // "5 apples"
 * oneToMany('child', 2); // "2 children"
 * oneToMany('person', 1); // "1 person"
 */
function oneToMany(noun, howMany) {
    
    if (howMany === 1) {
        return `${howMany} ${noun}`;
    }

    switch (noun) {
        case 'goose':
            return `${howMany} geese`;
        case 'child':
            return `${howMany} children`;
        case 'person':
            return `${howMany} people`;
        default:
            return `${howMany} ${noun}s`;
    }
}

// Example usage
console.log(oneToMany('apple', 1)); // "1 apple"
console.log(oneToMany('apple', 5)); // "5 apples"
console.log(oneToMany('child', 2)); // "2 children"
console.log(oneToMany('person', 1)); // "1 person"