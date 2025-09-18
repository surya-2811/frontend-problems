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


## 🏆 Goal

Solve **30 Days of LeetCode JavaScript problems** to strengthen
problem-solving skills.