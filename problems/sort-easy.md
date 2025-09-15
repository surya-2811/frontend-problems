# JavaScript Sorting Problems

This document contains solutions to common JavaScript sorting interview problems.  
We use the `Array.prototype.sort()` method with **custom comparator functions**.

---

## 1. Sort Strings by Length and Lexicographically

### Problem
Sort an array of strings by their **length**.  
If two strings have the same length, sort them **lexicographically**.

### Example
```js
Input:  ["apple", "dog", "banana", "cat"]
Output: ["cat", "dog", "apple", "banana"]
Solution
javascript
Copy code
const sortString = (arr) => {
  return arr.sort((a, b) => {
    if (a.length === b.length) {
      return a.localeCompare(b); // lexicographic if same length
    }
    return a.length - b.length;   // shorter length first
  });
};

console.log(sortString(["apple", "dog", "banana", "cat"]));
2. Sort by Custom Order
Problem
You are given an array of characters and a string representing custom order.
Sort the array based on this custom order.

Example
js
Copy code
Input:  arr = ["c", "b", "a", "d"], order = "bdac"
Output: ["b", "d", "a", "c"]
Solution
javascript
Copy code
const sortCustomOrder = (arr, order) => {
  let orderMap = {};
  for (let i = 0; i < order.length; i++) {
    orderMap[order[i]] = i;
  }
  return arr.sort((a, b) => orderMap[a] - orderMap[b]);
};

console.log(sortCustomOrder(["c", "b", "a", "d"], "bdac"));
Explanation
Custom order = "bdac"

orderMap = { b:0, d:1, a:2, c:3 }

Sort compares indices: e.g., "b"(0) comes before "d"(1).

3. Sort Array of Objects by Multiple Keys
Problem
You have an array of student objects with name, age, and marks.
Sort them:

By marks (descending).

If marks are equal → By age (ascending).

Example
js
Copy code
Input:  
[
  { name: "Alice", age: 25, marks: 90 },
  { name: "Bob", age: 20, marks: 90 },
  { name: "Charlie", age: 23, marks: 85 }
]

Output:  
[
  { name: "Bob", age: 20, marks: 90 },
  { name: "Alice", age: 25, marks: 90 },
  { name: "Charlie", age: 23, marks: 85 }
]
Solution
javascript
Copy code
let arr = [
  { name: "Alice", age: 25, marks: 90 },
  { name: "Bob", age: 20, marks: 90 },
  { name: "Charlie", age: 23, marks: 85 }
];

const sortArrofObj = (arr) => {
  return arr.sort((a, b) => {
    if (a.marks === b.marks) {
      return a.age - b.age;  // ascending age
    }
    return b.marks - a.marks; // descending marks
  });
};

console.log(sortArrofObj(arr));
Complexity Analysis
Time Complexity:

Sorting uses O(n log n) in all three problems.

Building a map (in problem 2) takes O(k) where k = length of order string.

Space Complexity:

Problem 1 & 3 → O(1) (in-place sorting).

Problem 2 → O(k) for the order map.