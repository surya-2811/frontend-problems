# 📝 JavaScript Reduce Practice Problems

This repository contains beginner-friendly JavaScript problems to practice using the **`Array.prototype.reduce()`** method.

---

## 📌 Problem 1: Sum of Numbers

**Description**  
Write a function that uses `reduce` to calculate the sum of all numbers in an array.

**Example**
```javascript
Input: [1, 2, 3, 4]
Output: 10

Solution: 
const sumOfArray =(arr)=>{
  return arr.reduce((acc, item)=> acc+ item  ,0)
}

let arr = [1, 2, 3, 4]
console.log(sumOfArray(arr))

📌 Problem 2: Find Maximum Number
Description
Use reduce to find the maximum value in an array.


const arr =[5, 9, 2, 10, 7]
console.log(findMax(arr))

Example

javascript
Copy code
Input: [5, 9, 2, 10, 7]
Output: 10

Solution

const findMax =(arr)=>{
  return arr.reduce((acc, item)=>{
   return acc = acc > item ? acc : item
  } ,arr[0])
}

📌 Problem 3: Count Occurrences of Items
Description
Given an array of strings, use reduce to count how many times each item appears.

Example

javascript
Copy code
Input: ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']
Output: { apple: 3, banana: 2, orange: 1 }

Solution

const countOccurance =(arr)=>{
  return arr.reduce((acc, item)=> {
    if(acc[item]){
      acc[item] ++
    }else{
      acc[item] = 1
    }
    return acc;
  },{})
}
const arr =['apple', 'banana', 'apple', 'orange', 'banana', 'apple']
console.log(countOccurance(arr))


📌 Problem 4: Flatten an Array of Arrays
Description
Use reduce to flatten a nested array into a single array.

Example

javascript
Copy code
Input: [[1, 2], [3, 4], [5]]
Output: [1, 2, 3, 4, 5]

Solution

function flatternArray(arr){
  return arr.reduce((acc, item) => acc.concat(Array.isArray(item)? flatternArray(item) : item), [])
}

const arr = [[1, 2], [3, 4], [5]]
console.log(flatternArray(arr))