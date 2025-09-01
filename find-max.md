# 📝 Problem: Find Maximum Number in Array

## 📌 Description
Write a function that returns the **largest number** from a given array of integers.

---

## 🎯 Examples

### Example 1
#### Input
```javascript
arr = [1, 2, 3, 4, 5]
Output
5

Example 2
Input
arr = [-10, -20, -3, -7, -5]

Output
-3

Explanation

The largest number among the negatives is -3.

Example 3
Input
arr = [100]

Output
100

Explanation

Only one element exists, so it is the maximum.

Example 4
Input
arr = [7, 7, 7, 7]

Output
7

Explanation

All elements are equal, so the maximum is 7.

💻 Solution (JavaScript)
function findMaxNumber(arr) {
      let max = arr[0];
    for(let i =0; i <arr.length; i++){
         max = Math.max(max, arr[i])
    }
    return max
}

// Example usage:
console.log(findMaxNumber([1, 2, 3, 4, 5]));        // 5
console.log(findMaxNumber([-10, -20, -3, -7, -5])); // -3
console.log(findMaxNumber([100]));                  // 100
console.log(findMaxNumber([7, 7, 7, 7]));           // 7

🧩 Complexity Analysis

Time Complexity: O(n) → Iterates through all elements once.

Space Complexity: O(1) → Uses only one variable (max).