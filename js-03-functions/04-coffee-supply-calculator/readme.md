# Coffee Supply Calculator ☕

This exercise demonstrates how to calculate the total amount of coffee in cups and liters needed for the rest of your life using simple JavaScript functions.

## Assignment 📝

> 1. Write a function named `calculateSupply` that:
  > - Takes 2 parameters: age and amount per day.
  > - calculates the amount consumed for rest of the life (based on a constant max age).
  > - outputs the result to the screen like so: "You will need NN cups of coffee to last you until the age of X"
> 2. Call that function three times, passing in different values each time
  >
  > **Bonus**  
  > Calculate in liters, accepting floating point values for amount per day (0.3 liters of coffee)
  > Round the result to a round number

## Usage 🛠️

1. Open the local `index.html` file in a web browser.
2. The script in `script.js` will run automatically and log the main outputs to the console.

## Constants and Variables 📊

| Name         | Type     | Description                                                                 |
|--------------|----------|-----------------------------------------------------------------------------|
| `maxAge`     | Constant | Global constant. Represents the maximum age used in the calculations. It is set to 99.        |
| `totalAmount`| Variable | Stores the total amount of coffee needed for the rest of your life, calculated based on the provided age and daily consumption. |

## Functions 📋

### `calculateSupply(age, amountPerDay)`

- **Description**: This function calculates the total amount of coffee needed for the rest of your life based on the provided age and daily consumption.
- **Parameters**:
  - `age` (number): Your current age.
  - `amountPerDay` (number): The amount of coffee you drink per day.
- **Output**: Logs the total amount of coffee needed to the console.

### `calculateSupplyLiters(age, litersPerDay)`

- **Description**: This function calculates the total amount of liters of coffe for the rest of your life based on the provided age and daily consumption.
- **Parameters**:
  - `age` (number): Your current age.
  - `litersPerDay` (number): The amount of coffee you drink per day in liters.
- **Output**: Logs the total amount of liters of coffee needed to the console.

## Example Output 📜

>*You will need 53900 cups of coffee to last you until the age of 99*  
>*You will need 53900 liters of water to last you until the age of 99*

## Author ✍️

**Luca Montanaro** `WDV 24-26`  
*luca.montanaro@edu-its.it*