📝 Problem: Chunk Array
📌 Description

Given an array and a chunk size n, split the array into subarrays (chunks) of size n.
If the array cannot be split evenly, the last chunk may contain fewer elements.

```javascript
🎯 Examples
Example 1
Input
chunkArray([1, 2, 3, 4], 2);

Output
[[1, 2], [3, 4]]

Example 2
Input
chunkArray([1, 2, 3, 4, 5], 2);

Output
[[1, 2], [3, 4], [5]]

Example 3
Input
chunkArray([], 3);

Output
[]

Example 4
Input
chunkArray([1, 2, 3], 5);

Output
[[1, 2, 3]]

💻 Solution (JavaScript)
function chunkArray(arr, n) {
  let result = [];
  for(let i =0; i< arr.length; i = i +n){
     result.push(arr.slice(i, i+ n))
  }
  return result
}

// Example usage:
console.log(chunkArray([1, 2, 3, 4], 2)); // [[1, 2], [3, 4]]
console.log(chunkArray([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]
console.log(chunkArray([], 3)); // []
console.log(chunkArray([1, 2, 3], 5)); // [[1, 2, 3]]

🧩 Complexity Analysis

Time Complexity: O(n) → We traverse the array once.

Space Complexity: O(n) → The output array holds all elements in chunks.

⚡ Constraints & Edge Cases

n must be a positive integer greater than 0.

The input array can be empty.

If n is larger than the array length, return the array as a single chunk.

If n is 1, return an array of single-element arrays.