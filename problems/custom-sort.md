:

📝 Problem: Custom Sort
📌 Description

Implement a function customSort(arr) that sorts an array containing both numbers and strings such that:

Strings (alphabets) are sorted in alphabetical order.

Numbers are sorted in ascending order.

The final result should place all strings first, followed by all numbers.

🎯 Examples
```javascript
Example 1
Input
const input = ["g", "s", 5, 2, "c", "e", 6, 1, "a"];
console.log(customSort(input));

Output
["a", "c", "e", "g", "s", 1, 2, 5, 6]

Example 2
Input
const input = [9, "z", "b", 3, "a", 1];
console.log(customSort(input));

Output
["a", "b", "z", 1, 3, 9]

Example 3
Input
const input = ["apple", "dog", 10, 2, "cat"];
console.log(customSort(input));

Output
["apple", "cat", "dog", 2, 10]

💻 Solution (JavaScript)
function customSort(input) {
  let sortedNumbers = input.filter((item) => typeof item ==="number").sort((a,b)=>a-b)
  let sortedletters = input.filter((item) => typeof item ==="string").sort()
  return sortedletters.concat(sortedNumbers)
}

// Usage
const input = ["g", "s", 5, 2, "c", "e", 6, 1, "a"];
console.log(customSort(input)); 
// ["a", "c", "e", "g", "s", 1, 2, 5, 6]

🧩 Complexity Analysis

Time Complexity:

Sorting strings → O(m log m)

Sorting numbers → O(n log n)

Combining → O(n + m)
Overall: O(k log k) where k is total elements.

Space Complexity: O(n + m) → Extra arrays for strings and numbers.