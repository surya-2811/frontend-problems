📝 Problem: Check if a Number Can Be Expressed as Sum of Consecutive Integers
📌 Description

Given a number n, determine whether it can be expressed as the sum of two or more consecutive positive integers.
Return true if possible, otherwise return false.

🎯 Example Inputs & Outputs
Input: n = 9
Output: true
Explanation: 9 = 2 + 3 + 4

Input: n = 15
Output: true
Explanation: 15 = 4 + 5 + 6 OR 1 + 2 + 3 + 4 + 5

Input: n = 10
Output: true
Explanation: 10 = 1 + 2 + 3 + 4

Input: n = 8
Output: false
Explanation: 8 cannot be expressed as sum of consecutive integers

Input: n = 1
Output: false
Explanation: 1 cannot be expressed as sum of two or more consecutive integers

✅ Constraints

1 ≤ n ≤ 10⁹

n is an integer.

Must check for two or more consecutive integers (not just one).

💡 Solution (Mathematical Insight)

👉 A number cannot be expressed as a sum of two or more consecutive integers if and only if it is a power of 2.

This works because:

Consecutive sum formula:

n = k + (k+1) + ... + (k+m-1)
  = m*k + (m*(m-1))/2


which means n must be divisible in a certain way.

If n is a power of 2, it cannot be broken into such a sequence.

```javascript

💻 Implementation
function isSumOfConsecutive(n) {
  if (n < 2) return false;
  while (n % 2 === 0) {
    n = n / 2
  }
  return n > 1
}

// Example usage:
console.log(isSumOfConsecutive(9));  // true
console.log(isSumOfConsecutive(15)); // true
console.log(isSumOfConsecutive(10)); // true
console.log(isSumOfConsecutive(8));  // false
console.log(isSumOfConsecutive(1));  // false

📚 Explanation

If n is odd, it can always be expressed as a sum of consecutive numbers.
Example: 9 = 2 + 3 + 4.

If n is even but not a power of 2, it can still be expressed.
Example: 10 = 1 + 2 + 3 + 4.

If n is a power of 2, it cannot be expressed.
Example: 8 → ❌.