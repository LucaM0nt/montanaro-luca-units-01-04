# One to Many 🍎🍏

This exercise demonstrates the use of function parameters and switch statements in JavaScript.
The function `oneToMany` takes two parameters and returns a string that represents the plural form of a noun based on the provided quantity.

## Assignment 📝

> Write a function named oneToMany() that:
> - takes 2 parameters, a noun and a number.
> - returns the number and pluralized form, like "5 cats" or "1 dog".
> Call that function for a few different scores and log the result to make sure it
works.  
>  
> **Bonus**:   
> - Make it handle a few collective nouns like "sheep" and "geese".


## Usage 🛠️

1. Open the local `index.html` file in a web browser.
2. The script in `script.js` will run automatically and log the main outputs to the console.

## Functions 📋

### `oneToMany(noun, howMany)`

- **Description**: This function returns the plural form of a noun based on the provided quantity.
- **Parameters**:
  - `noun` (string): The noun to be pluralized.
  - `howMany` (number): The quantity of the noun.
- **Output**: Returns the plural form of the noun based on the provided quantity.

## Example Output 📜

```javascript
console.log(oneToMany('apple', 1)); // "1 apple"
console.log(oneToMany('apple', 5)); // "5 apples"
console.log(oneToMany('child', 2)); // "2 children"
console.log(oneToMany('person', 1)); // "1 person"
console.log(oneToMany('goose', 3)); // "3 geese"
```

## Author ✍️

**Luca Montanaro** `WDV 24-26`  
*luca.montanaro@edu-its.it*