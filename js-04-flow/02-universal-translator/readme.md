# Universal Translator 🌐

This exercise demonstrates the use of function parameters and switch statements in JavaScript.
The function `HelloWorld` takes one parameter and returns a greeting in different languages based on the provided language code.

## Assignment 📝

> Write a function named helloWorld that:
> - takes 1 parameter, a language code (e.g. "es", "de", "en")
> - returns "Hello, World" for the given language, for at least 3 languages. It should default to
returning English.
> Call that function for each of the supported languages and log the result to
make sure it works.


## Usage 🛠️

1. Open the local `index.html` file in a web browser.
2. The script in `script.js` will run automatically and log the main outputs to the console.

## Functions 📋

### `HelloWorld(lang)`

- **Description**: This function returns a greeting in different languages based on the provided language code.
- **Parameters**:
  - `lang` (string): The language code (e.g., 'en' for English, 'it' for Italian).
- **Output**: Returns the greeting in the corresponding language.

## Example Output 📜

```javascript
console.log(HelloWorld('en')); // "Hello, World"
console.log(HelloWorld('it')); // "Ciao, Mondo"
console.log(HelloWorld('fr')); // "Bonjour tout le monde"
console.log(HelloWorld('es')); // "Hola, Mundo"
console.log(HelloWorld('de')); // "Hallo Welt"
```

## Author ✍️

**Luca Montanaro** `WDV 24-26`  
*luca.montanaro@edu-its.it*