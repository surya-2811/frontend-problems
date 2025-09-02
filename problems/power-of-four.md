# 📝 Problem: Power of Four

## 📌 Description
Write a function that checks whether a given integer `n` is a **power of 4**.  
Return `true` if it is, otherwise return `false`.

---

## 🎯 Examples

### Example 1
#### Input
```javascript
isPowerOfFour(16);


Output
true

Explanation

16 = 4^2, so it is a power of four.

Example 2
Input
isPowerOfFour(64);

Output
true

Explanation

64 = 4^3, so it is a power of four.

Example 3
Input
isPowerOfFour(8);

Output
false

Explanation

8 = 2^3, not a power of four.

Example 4
Input
isPowerOfFour(0);

Output
false

Explanation

0 cannot be expressed as a power of four.

💻 Solution (JavaScript)
function isPowerOfFour(n) {
  if (n <= 0) return false;
  while (n % 4 === 0) {
    n = n / 4;
  }
  return n === 1;
}

// Examples
console.log(isPowerOfFour(16)); // true (4^2)
console.log(isPowerOfFour(64)); // true (4^3)
console.log(isPowerOfFour(8));  // false
console.log(isPowerOfFour(0));  // false