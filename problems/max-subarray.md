# 📝 Problem: Maximum Subarray (Kadane's Algorithm)

## 📌 Description
Find the contiguous subarray with the **largest sum** and return its sum.

---

## 🎯 Example

### Input
```javascript
nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

Output
6

Explanation

The subarray [4, -1, 2, 1] has the largest sum = 6.

💻 Solution (JavaScript)
function maxSubArray(nums) {
  let maxSum = nums[0];
  let currSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // Either start fresh from nums[i] or extend the previous subarray
    currSum = Math.max(nums[i], currSum + nums[i]);
    maxSum = Math.max(maxSum, currSum);
  }

  return maxSum;
}

// Example usage:
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray([1])); // 1
console.log(maxSubArray([5, 4, -1, 7, 8])); // 23
