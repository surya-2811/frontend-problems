# 30 Days of JavaScript LeetCode

This repository contains JavaScript solutions for **30 Days of LeetCode
JavaScript problems**.\
Each problem is solved step by step with proper explanations and code
snippets.

------------------------------------------------------------------------

## Problems Covered

### 1. Create Hello World Function

**Problem:**\
Write a function `createHelloWorld`. It should return a new function
that always returns `"Hello World"`.

**Solution:**

``` javascript
var createHelloWorld = function() {
    return function(...args) {
        return "Hello World";
    }
};
const f = createHelloWorld();
console.log(f()); // "Hello World"
```

------------------------------------------------------------------------

### 2. Counter Function

**Problem:**\
Given an integer `n`, return a counter function. This counter function
initially returns `n` and then returns 1 more each time.

**Solution:**

``` javascript
var createCounter = function(n) {
    let count = n;
    return function() {
        let current = count;
        count = count + 1;
        return current;
    };
};

const counter = createCounter(10);
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12
```

------------------------------------------------------------------------

### 3. Expect Function

**Problem:**\
Write a function `expect` that helps developers test their code.

-   `toBe(val)` → returns true if equal, otherwise throws "Not Equal".\
-   `notToBe(val)` → returns true if not equal, otherwise throws
    "Equal".

**Solution:**

``` javascript
var expect = function(val) {
    const toBe = (arg) => {
        if (arg === val) return true;
        throw "Not Equal";
    };
    const notToBe = (arg) => {
        if (arg === val) throw "Equal";
        return true;
    };
    return { toBe, notToBe };
};

console.log(expect(5).toBe(5)); // true
// console.log(expect(5).notToBe(5)); // throws "Equal"
```

------------------------------------------------------------------------

### 4. Counter II

**Problem:**\
Write a function `createCounter`. It should accept an initial integer
`init` and return an object with three functions:

-   `increment()` → increases value by 1.\
-   `decrement()` → decreases value by 1.\
-   `reset()` → resets value to initial.

**Solution:**

``` javascript
var createCounter = function(init) {
    let count = init;
    const increment = () => ++count;
    const decrement = () => --count;
    const reset = () => { count = init; return count; };
    return { increment, decrement, reset };
};

const counter2 = createCounter(5);
console.log(counter2.increment()); // 6
console.log(counter2.reset());     // 5
console.log(counter2.decrement()); // 4
```

------------------------------------------------------------------------

### 5. Map Function

**Problem:**\
Recreate the `map` function.

**Solution:**

``` javascript
var map = function(arr, fn) {
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        array.push(fn(arr[i], i));
    }
    return array;
};

function plusone(n) { return n + 1; }
console.log(map([1, 2, 3], plusone)); // [2, 3, 4]
```

------------------------------------------------------------------------

### 6. Filter Function

**Problem:**\
Recreate the `filter` function.

**Solution:**

``` javascript
var filter = function(arr, fn) {
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            array.push(arr[i]);
        }
    }
    return array;
};

function greaterThan10(n) { return n > 10; }
console.log(filter([0, 10, 20, 30], greaterThan10)); // [20, 30]
```

------------------------------------------------------------------------

## 📌 Usage

Clone this repo and run each `.js` file with:

``` bash
node filename.js
```

### 7 Array Reduce Transformation

## 📘 Problem Statement
Given an integer array `nums`, a reducer function `fn`, and an initial value `init`,  
return the final result obtained by executing the `fn` function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

This result is achieved through the following operations:

val = fn(init, nums[0])
val = fn(val, nums[1])
val = fn(val, nums[2])


The ultimate value of `val` is then returned.

👉 If the length of the array is `0`, the function should return `init`.

**Note:** You must solve this without using the built-in `Array.reduce` method.

---

## 📌 Example 1

**Input:**
```javascript
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr; }
init = 0

Input:

nums = [1,2,3]
fn = function product(accum, curr) { return accum * curr; }
init = 1

Output:

6

var reduce = function(nums, fn, init) {
    let val = init;
    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i], i);
    }
    return val;
};

### 8. Function Composition  

**Problem:**  
Given an array of functions `[f1, f2, f3, ..., fn]`, return a new function `fn` that is the function composition of the array of functions.  

The function composition of `[f(x), g(x), h(x)]` is:  
```
fn(x) = f(g(h(x)))
```  

The function composition of an empty list of functions is the identity function:  
```
f(x) = x
```  

You may assume each function in the array accepts one integer as input and returns one integer as output.  

**Example:**  
```javascript
Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4  
Output: 65  

Explanation:  
Start with x = 4  
2 * 4 = 8  
8 * 8 = 64  
64 + 1 = 65  
```

**Solution:**  
```javascript
var compose = function(functions) {
    return function(x) {
        let result = x;
        for (let i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result);
        }
        return result;
    };
};

const functions = [x => x + 1, x => x * x, x => 2 * x], x = 4;
console.log(compose(functions)(x)); // 65
```  

---

### 9. Return Length of Arguments Passed  

**Problem:**  
Write a function `argumentsLength` that returns the count of arguments passed to it.  

**Example 1:**  
```javascript
Input: argumentsLength(5)  
Output: 1  
```

**Example 2:**  
```javascript
Input: argumentsLength({}, null, "3")  
Output: 3  
```

**Solution:**  
```javascript
const argumentsLength = (...args) => {
    return args.length;
};

const args = [{}, null, "3"];
console.log(argumentsLength(...args)); // 3
```  

---

### 10. Allow One Function Call  

**Problem:**  
Given a function `fn`, return a new function that ensures `fn` is called at most once.  

- The first time the returned function is called, it should return the same result as `fn`.  
- Every subsequent time it is called, it should return `undefined`.  

**Example 1:**  
```javascript
Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]  
Output: [{"calls":1,"value":6}]  

Explanation:  
const onceFn = once(fn);  
onceFn(1, 2, 3); // 6  
onceFn(2, 3, 6); // undefined  
```  

**Example 2:**  
```javascript
Input: fn = (a,b,c) => (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]  
Output: [{"calls":1,"value":140}]  

Explanation:  
const onceFn = once(fn);  
onceFn(5, 7, 4); // 140  
onceFn(2, 3, 6); // undefined  
onceFn(4, 6, 8); // undefined  
```  

**Solution:**  
```javascript
const once = (fn) => {
    let called = false;
    return function (...args) {
        if (called) return undefined;
        called = true;
        return fn(...args);
    };
};

const fn = (a, b, c) => a * b * c;
const onceFn = once(fn);

console.log(onceFn(5, 7, 4)); // 140
console.log(onceFn(2, 3, 6)); // undefined
console.log(onceFn(4, 6, 8)); // undefined


## 🏆 Goal

Solve **30 Days of LeetCode JavaScript problems** to strengthen
problem-solving skills