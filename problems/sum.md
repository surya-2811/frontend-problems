# 📝 Problem: Sum of Numbers (Using Rest Parameters)

## 📌 Description
Write a function `sum` that takes any number of arguments and returns their **total sum**.  
If no arguments are provided, it should return `0`.

This problem demonstrates the use of **rest parameters** (`...args`) in JavaScript.

---

## 🎯 Examples

### Example 1
#### Input

sum(1, 2, 3, 4, 5);

Output
15

Example 2
Input
sum(10, 20);

Output
30

Example 3
Input
sum();

Output
0

Explanation

No numbers are provided, so the result is 0.

💻 Solution (JavaScript)
function sum(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}

// Example usage:
console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum(10, 20));        // 30
console.log(sum());              // 0