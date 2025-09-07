📝 Problem: Power of Three

## 📌 Description
Write a function `isPowerOfThree(n)` that determines whether a given integer `n` is a power of three.  
An integer is a power of three if there exists an integer `x` such that:  

n === 3^x


Return:
- `true` → if `n` is a power of three.  
- `false` → otherwise.

---

## 🎯 Examples

### Example 1
**Input:**
```javascript
isPowerOfThree(1);
Output:
true
Explanation:
3⁰ = 1

Example 2
Input:

javascript
isPowerOfThree(9);
Output:

javascript
true
Explanation:
3² = 9

Example 3
Input:

javascript
isPowerOfThree(10);
Output:

javascript
false
Explanation:
10 is not a power of 3.

Example 4
Input:

javascript
isPowerOfThree(0);
Output:

javascript
false
Explanation:
0 is not a power of 3.

💻 Solution (JavaScript)
javascript


function isPowerOfThree(n) {
   if(n === 0) return false;
   while(n % 3 === 0){
      n = n /3
   }
   return n === 1? true : false;
}

// Example usage:
console.log(isPowerOfThree(1));  // true
console.log(isPowerOfThree(9));  // true
console.log(isPowerOfThree(10)); // false
console.log(isPowerOfThree(0));  // false
🧩 Complexity Analysis
Time Complexity: O(log₃ n) → Each division reduces n by a factor of 3.

Space Complexity: O(1) → No extra space used.

⚡ Constraints & Edge Cases
Input range: -2³¹ ≤ n ≤ 2³¹ - 1

Return false for:

n ≤ 0

Non-integer inputs (if applicable)

Works only with integers.

