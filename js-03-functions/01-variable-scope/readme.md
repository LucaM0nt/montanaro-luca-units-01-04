# Variable Scope in JavaScript 🌐

This exercise demonstrates the difference between local and global variable scope in JavaScript. Two functions are created: one that uses a local variable and one that uses a global variable.

## Assignment 📝

> Write a .js file that uses both local and global variables in the same project
> - Recreate the local and global scope examples in your browser
> - Try to call the function “addNumbers” a few more times
> - Make sure that you understand exactly what’s happening at every stage


## Usage 🛠️

1. Open the local `index.html` file in a web browser.
2. The script in `script.js` will run automatically and log the main outputs to the console.

## Functions 📋

### `addNumbersLocal(num1, num2)`

- **Description**: This function demonstrates the use of local scope. The variable `localResult` is declared inside the function and is not accessible outside of it.
- **Parameters**:
  - `num1` (number): The first number to add.
  - `num2` (number): The second number to add.
- **Output**: Logs the local result to the console.

### `addNumbersGlobal(num1, num2)`

- **Description**: This function demonstrates the use of global scope. The variable `globalResult` is declared in the global scope and is modified inside the function.
- **Parameters**:
  - `num1` (number): The first number to add.
  - `num2` (number): The second number to add.
- **Output**: Logs the global result to the console.

## Variables 📊

| Variable       | Description                                      |
|----------------|--------------------------------------------------|
| `localResult`  | The result of adding `num1` and `num2` within the local scope of `addNumbersLocal`. |
| `globalResult` | The result of adding `num1` and `num2` within the global scope, modified by `addNumbersGlobal`. |

## Example Output 📜

>*The local result is: 15*  
>*The global result is: 15*

## Author ✍️

**Luca Montanaro** `WDV 24-26`  
*luca.montanaro@edu-its.it*