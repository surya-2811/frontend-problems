📝 Problem: Form the Largest Number
📌 Description

Given an array of non-negative integers, arrange them in such an order that they form the largest possible number when concatenated.

⚡ The tricky part is deciding the order of numbers.
For example:

30 should come after 3 because:
"330" > "303" → so "3" should come before "30".

```javascript

🎯 Examples
Example 1

Input:

const arr = [3, 30, 34, 5, 9];


Output:

"9534330"

Example 2

Input:

const arr = [54, 546, 548, 60];


Output:

"6054854654"

💻 Solution (JavaScript)
function formLargestNumber(arr) {
   if(arr.length === 0) return ""
   let array = arr.map((item)=> String(item));
   let result = array[0];
  for(let i =0; i<array.length -1; i++){
     if(result + array[i +1] > array[i+ 1] + result){
        result = result + array[i+ 1]
     }else{
       result = array[i+ 1] + result
     }
  }
  return result 
}

// Example usage
console.log(formLargestNumber([3, 30, 34, 5, 9]));   // "9534330"
console.log(formLargestNumber([54, 546, 548, 60]));  // "6054854654"

🧩 Complexity Analysis

Time Complexity: O(n log n) → Sorting takes dominant time.

Space Complexity: O(n) → Extra space for string conversion.

⚡ Constraints & Edge Cases

Array may contain large numbers.

If all elements are 0, return "0".

Must handle numbers with different digit lengths correctly.