📝 Problem: Fibonacci Sequence
📌 Description

Implement a function that generates the Fibonacci sequence up to n terms.

The Fibonacci sequence starts with 0 and 1.

Each next number is the sum of the previous two numbers.

If n = 0, return an empty array.

If n = 1, return [0].

```javascript

🎯 Examples
Example 1
Input
n = 5

Output
[0, 1, 1, 2, 3]

Example 2
Input
n = 8

Output
[0, 1, 1, 2, 3, 5, 8, 13]

Example 3
Input
n = 1

Output
[0]

Example 4
Input
n = 0

Output
[]

💻 Solution (JavaScript)
function fibonacci(n) {
   if(n === 0) return []
   if(n === 1) return [0]
   let seq =[0,1]
   for(let i =2; i <n; i++){
    seq.push(seq[i -1] + seq[i -2])
   }
   return seq
}

// Usage
console.log(fibonacci(5)); // [0, 1, 1, 2, 3]
console.log(fibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibonacci(1)); // [0]
console.log(fibonacci(0)); // []

🧩 Complexity Analysis

Time Complexity: O(n) → Loop runs n-2 times.

Space Complexity: O(n) → Array stores n Fibonacci numbers.