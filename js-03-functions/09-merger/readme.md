# Merger ​🤝

This exercise demonstrates the use of function parameters in JavaScript and how we combine number and string variables.  
The function `merger` takes two parameters and performs different operations based on their types.
Why a operator with the same symbol might behave differently based on the type of the parameters, is explained in the `coercion and overload.md` file in the `09-merger` folder.

## Assignment 📝

> Write a function called merger() that takes two parameters and performs the
following operation:
> - If both parameters are numbers, return the sum
> - If both parameters are strings, return the concatenation of the strings
> - If the parameters are anything else, return `null`
> Include a doc file in which you explain why two operators might have the same
symbol but work differently based on the type of the parameters

## Usage 🛠️

1. Open the local `index.html` file in a web browser.
2. The script in `script.js` will run automatically and log the main outputs to the console.

## Functions 📋

### `merger(first, second)`

- **Description**: This function performs different operations based on the types of the parameters.
- **Parameters**:
  - `first` (number|string): The first parameter.
  - `second` (number|string): The second parameter.
- **Output**: Logs the result to the console.

## Example Output 📜

```javascript
console.log(merger(5, 10)); // 15
console.log(merger("Hello", "World")); // "HelloWorld"
console.log(merger(5, "World")); // "5World"
console.log(merger({}, [])); // null
```

## Author ✍️

**Luca Montanaro** `WDV 24-26`  
*luca.montanaro@edu-its.it*