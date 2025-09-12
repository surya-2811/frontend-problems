📝 Problem: Memoization Function
📌 Description

Memoization is an optimization technique used to speed up function calls by caching the results of expensive function calls and returning the cached result when the same inputs occur again.

Your task is to implement a memoization function that takes a function as an argument and returns a memoized version of that function.
The memoized function should cache results based on the arguments passed to it.

🎯 Example Inputs & Outputs
✅ Example 1:
function expensiveFunction(a, b) {
  return a + b;
}

const memoizedExpensiveFunction = memoize(expensiveFunction);

console.log(memoizedExpensiveFunction(1, 2)); // Output: 3 (calculated)
console.log(memoizedExpensiveFunction(1, 2)); // Output: 3 (cached)

✅ Example 2:
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5)); // Output: 120 (calculated)
console.log(memoizedFactorial(5)); // Output: 120 (cached)

⚙️ Constraints & Edge Cases

The function to be memoized can have any number of arguments.

Cached results should be returned only if the same arguments are passed again.

You must ensure efficient caching to avoid redundant calculations.

💡 Approach

Use a cache object to store computed results.

Convert function arguments into a unique key (like using JSON.stringify).

Before computing, check if the result exists in the cache:

If yes, return the cached result.

If no, compute the result, store it in cache, and return it.
```javascript


🖥️ Solution 
const memoize =(fn)=>{ 
  let  cache ={};
  return function(...args){
    let key = JSON.stringify(args);
    if(cache[key]){
      return cache[key]
    }else{
      let result = fn(...args);
      cache[key] = result;
      return result
    }
  }
}

function add(a, b) {

  return a + b;
}

function slowFunction(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      sum += i * j;
    }
  }
  return sum;
}
const memoizeSlowFn = memoize(slowFunction)
const memoizedAdd = memoize(add);

console.log(memoizedAdd(2, 3)); // 5 (calculated)
console.log(memoizedAdd(2, 3)); // 5 (cached)
const start = performance.now(); // start time
console.log(memoizeSlowFn(1000)); //249500250000
const end = performance.now(); // end time
console.log(`Execution time: ${(end - start).toFixed(2)} ms`); //Execution time: 8.25 ms

const start1 = performance.now(); // start1 time
console.log(memoizeSlowFn(1000)); //249500250000
const end1 = performance.now(); // end1 time
console.log(`Execution time2: ${(end1 - start1).toFixed(2)} ms`); //Execution time2: 0.28 ms


