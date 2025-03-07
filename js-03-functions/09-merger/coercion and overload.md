# Coercion and overload

## Why two operators with the same symbol might work differently?
In js, operators can behave differently depending on the types of their operands due to type coercion and operator overloading.  

## What is type coercion?
Type coercion is JavaScript’s automatic conversion of one data type to another when necessary. This happens when an operator or function expects a certain type but receives another.

## What is type overload?
Operator overloading means that the same operator behaves differently depending on the types of the operands.

## *Example*:  
If one operand is a `string` and I'm trying to perform a sum, JavaScript converts the other operand to a `string` due to **type coercion**, but, if the `+` operator has two strings as operands, it performs concatenation instead of addition, due to **type overload**.

```javascript
console.log(5 + 3) // 8  
console.log("5" + 3);   // "53" (Number 3 is converted to a string)  
console.log(5 + "3");   // "53" (Number 5 is converted to a string)
```