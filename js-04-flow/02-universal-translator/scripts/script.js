/**
 * @file script.js
 * @date February 2025
 * @author Luca Montanaro
 * 
 * @description This file contains the JavaScript code for the Universal Translator exercise.
 * 
 * @remarks
 * This exercise demonstrates the use of function parameters and switch statements in JavaScript.
 * The function HelloWorld takes one parameter and returns a greeting in different languages based on the provided language code.
 * 
 * function HelloWorld - Uses function parameters and switch statements to return a greeting in different languages.
 * 
 * The HelloWorld function takes one parameter: lang.
 * It returns a greeting in the corresponding language based on the provided language code.
 * 
 * By calling the function with different arguments, you can see the greetings in different languages.
 */

/**
 * This function returns a greeting in different languages based on the provided language code.
 * @param {string} lang - The language code (e.g., 'en' for English, 'it' for Italian).
 * @returns {string} - Returns the greeting in the corresponding language.
 * @example
 * HelloWorld('en'); // "Hello, World"
 * HelloWorld('it'); // "Ciao, Mondo"
 * HelloWorld('fr'); // "Bonjour tout le monde"
 * HelloWorld('es'); // "Hola, Mundo"
 * HelloWorld('de'); // "Hallo Welt"
 */
function HelloWorld(lang) {
    switch (lang) {
        case 'en':
            return 'Hello, World';
        case 'it':
            return 'Ciao, Mondo';
        case 'fr':
            return 'Bonjour tout le monde';
        case 'es':
            return 'Hola, Mundo';
        case 'de':
            return 'Hallo Welt';
        default:
            return 'Language not supported';
    }
}

// Calling the function with different arguments to see the greetings in different languages.
console.log(HelloWorld('en')); // "Hello, World"
console.log(HelloWorld('it')); // "Ciao, Mondo"
console.log(HelloWorld('fr')); // "Bonjour tout le monde"
console.log(HelloWorld('es')); // "Hola, Mundo"
console.log(HelloWorld('de')); // "Hallo Welt"