📝 Problem: Function Currying
📌 Description

Currying is the process of transforming a function with multiple arguments into a sequence of functions that each take a single argument (or a smaller group of arguments).

Your task is to implement a curry(fn) function that transforms a given function fn into its curried version.
When the number of arguments collected is equal to the original function's arity (the number of parameters it expects), the original function should be executed.

```javascript

🎯 Example Inputs & Outputs
function sum(a, b, c) {
  return a + b + c;
}

const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3));   // → 6
console.log(curriedSum(1, 2)(3));   // → 6
console.log(curriedSum(1)(2, 3));   // → 6
console.log(curriedSum(1, 2, 3));   // → 6

✅ Constraints & Edge Cases

The input fn can have any number of parameters.

The curried function should accept arguments one by one or in groups.

Execution should happen only when enough arguments are collected.

💡 Solution
function curry(fn) {
  return function curried(...args) {
    // If enough arguments are passed, call original function
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    // Otherwise, return a new function to collect more args
    return function (...nextArgs) {
      return curried(...args, ...nextArgs);
    };
  };
}

// Example usage:
function sum(a, b, c) {
  return a + b + c;
}

const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3));   // 6
console.log(curriedSum(1, 2)(3));   // 6
console.log(curriedSum(1)(2, 3));   // 6
console.log(curriedSum(1, 2, 3));   // 6

📚 Explanation

curry(fn) wraps the given function fn.

The returned function (curried) collects arguments.

If collected arguments are greater than or equal to fn.length, the original function is executed.

Otherwise, curried returns a new function to collect more arguments until enough are provided.