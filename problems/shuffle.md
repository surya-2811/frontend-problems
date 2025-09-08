📝 Problem: Shuffle Array  
📌 Description  

Implement a function `shuffle` that takes an array and returns a new array with its elements randomly shuffled.  

The function must **not mutate the original array**.  
This is useful when you want to randomize order (e.g., shuffling a deck of cards, randomizing quiz questions).  

```javascript
🎯 Examples  

Example 1  
Input  
shuffle([1, 2, 3, 4, 5]);  

Possible Output  
[3, 1, 5, 2, 4]  

Example 2  
Input  
shuffle(['a', 'b', 'c']);  

Possible Output  
['b', 'c', 'a']  

Example 3  
Input  
shuffle([]);  

Output  
[]  
💻 Solution (JavaScript)

javascript
Copy code
function shuffle(array) {
    let result = array.slice(); // create copy of new array
    for(let i = array.length -1; i>=0; i--){
     let j = Math.floor(Math.random() * (i +1));
     [result[i], result[j]] = [result[j], result[i]]
     }
    return result;
}

// Example usage:
console.log(shuffle([1, 2, 3, 4, 5]));
console.log(shuffle(['a', 'b', 'c']));
console.log(shuffle([]));
🧩 Complexity Analysis

Time Complexity: O(n) → Each element is swapped once in the loop.

Space Complexity: O(n) → A new array is created to avoid mutating the original.