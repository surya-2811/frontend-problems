📝 Problem: Missing Number
📌 Description

You are given an array containing n distinct numbers taken from the range [0, n].
The task is to find the one number missing from the sequence.

🎯 Examples

```javascript
Example 1
Input
findMissingNumber([3, 0, 1]);

Output
2

Example 2
Input
findMissingNumber([0, 1]);

Output
2

Example 3
Input
findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]);

Output
8

Example 4
Input
findMissingNumber([0]);

Output
1

💻 Solution (JavaScript)
function findMissingNumber(nums) {
   let n = nums.length;
   let totalCount =( n *(n + 1 )) / 2;
   let actualCount = nums.reduce((acc, item) => acc + item , 0)
   return totalCount - actualCount
}
// Example usage
console.log(findMissingNumber([3, 0, 1]));       // 2
console.log(findMissingNumber([0, 1]));          // 2
console.log(findMissingNumber([9,6,4,2,3,5,7,0,1])); // 8
console.log(findMissingNumber([0]));             // 1

🧩 Complexity Analysis

Time Complexity: O(n) → We iterate through the array once.

Space Complexity: O(1) → Constant extra space used.

⚡ Constraints & Edge Cases

The array contains exactly n numbers.

All numbers are unique.

Numbers are in the range [0, n].

Only one number is missing.

The array may be in any order.

Missing number could be 0 or n.