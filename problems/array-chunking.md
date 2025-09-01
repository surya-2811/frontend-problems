# 📝 Problem: Array Chunking

## 📌 Description
Write a function that splits an array into **chunks** of a given size `n`.  
Each chunk should be returned as a subarray.

---

## 🎯 Example

### Input
```javascript
arr = [1, 2, 3, 4, 5, 6, 7]
n = 3

Output
[[1, 2, 3], [4, 5, 6], [7]]

Explanation

The array is divided into groups of size 3.

First chunk → [1, 2, 3]

Second chunk → [4, 5, 6]

Remaining element → [7]

💻 Solution (JavaScript)
function chunkArray(arr, n) {
  let result =[];
  for(let i =0; i< arr.length; i = i+n){
    result.push(arr.slice(i, i+n))
  }
  return result
}


// Example usage:
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3)); // [[1,2,3],[4,5,6],[7]]
console.log(chunkArray([1, 2, 3, 4, 5], 2));       // [[1,2],[3,4],[5]]
console.log(chunkArray([1, 2, 3], 4));             // [[1,2,3]]

🧩 Complexity Analysis

Time Complexity: O(n) → Each element is processed once.

Space Complexity: O(n) → Stores the chunked subarrays.