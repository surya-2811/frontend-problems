# 📝 Problem: Power of Two

## 📌 Description

Implement a function `isPowerOfTwo` that checks whether a given number `n` is a power of 2.

A number is a power of 2 if it can be written as:

```
2^k for some integer k ≥ 0
```

## 🎯 Examples

### Example 1
**Input**
```js
isPowerOfTwo(8);
```
**Output**
```
true
```

### Example 2
**Input**
```js
isPowerOfTwo(16);
```
**Output**
```
true
```

### Example 3
**Input**
```js
isPowerOfTwo(18);
```
**Output**
```
false
```

### Example 4
**Input**
```js
isPowerOfTwo(1);
```
**Output**
```
true  // because 2^0 = 1
```

### Example 5
**Input**
```js
isPowerOfTwo(0);
```
**Output**
```
false
```

## 💻 Solution (JavaScript)

```javascript
function isPowerOfTwo(n) {
  if (n < 1) return false;
  while (n % 2 === 0) {
    n = n / 2;
  }
  return n === 1;
}

// Example usage
console.log(isPowerOfTwo(8));  // true
console.log(isPowerOfTwo(16)); // true
console.log(isPowerOfTwo(18)); // false
console.log(isPowerOfTwo(1));  // true
console.log(isPowerOfTwo(0));  // false
```

## 🧩 Complexity Analysis

- **Time Complexity:** `O(log n)` &rarr; We divide `n` by 2 until it becomes 1.
- **Space Complexity:** `O(1)` &rarr; No extra space