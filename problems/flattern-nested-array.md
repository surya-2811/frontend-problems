📝 Problem: Flatten Nested Array
📌 Description

Implement a function flattenArray that takes a nested array as input and returns a single flattened array containing all the elements in order.

The function should handle arrays nested at any depth.

```javascript
🎯 Examples
Example 1
Input
flattenArray([1, [2, [3, 4], 5], 6]);

Output
[1, 2, 3, 4, 5, 6]

Example 2
Input
flattenArray([[["a"]], ["b", ["c", ["d"]]]]);

Output
["a", "b", "c", "d"]

Example 3
Input
flattenArray([1, [2, 3], 4]);

Output
[1, 2, 3, 4]

💻 Solution (JavaScript)

function flattenArray(arr) {
    let result =[];
    for(let i =0; i<arr.length; i++){
       if(Array.isArray(arr[i])){
        result = result.concat(flattenArray(arr[i]))
       }else{
        result.push(arr[i])
       }    
    }
    return result
}

// Example usage:
console.log(flattenArray([1, [2, [3, 4], 5], 6])); // [1, 2, 3, 4, 5, 6]

🧩 Complexity Analysis

Time Complexity: O(n) → Each element is visited once, where n is the total number of elements (including nested).

Space Complexity: O(n) → Flattened array stores all elements, and recursion uses call stack proportional to depth.