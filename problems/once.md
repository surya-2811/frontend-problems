📝 Problem: Once Function
📌 Description

Implement a once function in JavaScript.
The once function should take another function fn as input and return a new function that can only be executed once.

On the first call, it executes the original function and stores the result.

On subsequent calls, it returns the stored result without executing the function again.

This is useful for cases like initialization functions, database connections, or expensive computations that should only run once.

```javascript
🎯 Examples
Example 1: Basic usage
function add(a, b) {
  return a + b;
}

const onceAdd = once(add);

console.log(onceAdd(2, 3)); // Output: 5 (fn executed)
console.log(onceAdd(4, 5)); // Output: 5 (cached result)
console.log(onceAdd(10, 20)); // Output: 5 (cached result)

Example 2: Function with no arguments
function greet() {
  return "Hello Namaste Dev!";
}

const onceGreet = once(greet);

console.log(onceGreet());  // Output: "Hello Namaste Dev!" (fn executed)
console.log(onceGreet());  // Output: "Hello Namaste Dev!" (cached result)

💻 Solution (JavaScript)
function once(fn) {
  let called = false;
  let result;

  return function(...args) {
    if (!called) {
      result = fn.apply(this, args);
      called = true;
    }
    return result;
  };
}

🧩 Complexity Analysis

Time Complexity:

First call → O(1) (executes function).

Subsequent calls → O(1) (returns cached result).

Space Complexity: O(1) → Stores only one result and a boolean flag.