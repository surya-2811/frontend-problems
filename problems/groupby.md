📝 Problem: Group By Property
📌 Description

Implement a function groupBy that takes an array of objects and a key (string).
It should return an object where elements are grouped by the given key.

This is useful for organizing data based on shared attributes (like age, department, category, etc.).

```javascript

🎯 Examples
Example 1
Input
groupBy([
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 }
], 'age');

Output
{
  25: [
    { name: 'Alice', age: 25 },
    { name: 'Charlie', age: 25 }
  ],
  30: [
    { name: 'Bob', age: 30 }
  ]
}

Example 2
Input
groupBy([
  { name: 'Apple', type: 'fruit' },
  { name: 'Carrot', type: 'vegetable' },
  { name: 'Banana', type: 'fruit' }
], 'type');

Output
{
  fruit: [
    { name: 'Apple', type: 'fruit' },
    { name: 'Banana', type: 'fruit' }
  ],
  vegetable: [
    { name: 'Carrot', type: 'vegetable' }
  ]
}

Example 3
Input
groupBy([], 'category');

Output
{}

💻 Solution (JavaScript)
function groupBy(arr, key) {
    let obj = {}
    for(let i =0; i<arr.length; i++){
    if(!obj[arr[i][key]]){
       obj[arr[i][key]] = [arr[i]]
    }else{
       obj[arr[i][key]].push(arr[i])
    }
      
    }
    return obj
}

// Example usage:
console.log(groupBy([
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 }
], 'age'));

🧩 Complexity Analysis

Time Complexity: O(n) → Each element is processed once.

Space Complexity: O(n) → Output object stores all items grouped by keys.