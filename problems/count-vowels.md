📝 Problem: Count Vowels
📌 Description

Write a function countVowels(str) that takes a string as input and returns the number of vowels in that string.

Vowels include both lowercase and uppercase characters:
a, e, i, o, u, A, E, I, O, U

```javascript

🎯 Examples
Example 1

Input:

countVowels("hello");


Output:

2 // (e, o)

Example 2

Input:

countVowels("JavaScript");


Output:

3 // (a, a, i)

Example 3

Input:

countVowels("bcd");


Output:

0

Example 4

Input:

countVowels("AEIOU");


Output:

5

Example 5

Input:

countVowels("");


Output:

0

💻 Solution (JavaScript)
function countVowels(str) {
   let vowels = "aeiou"
   let string = str.toLowerCase();
   let count = 0;
   for(let i =0; i<string.length; i++){
      if(vowels.includes(string[i])){
          count ++
      }
   }
   return count
}

// Example usage:
console.log(countVowels("hello"));      // 2
console.log(countVowels("JavaScript")); // 3
console.log(countVowels("bcd"));        // 0
console.log(countVowels("AEIOU"));      // 5
console.log(countVowels(""));           // 0

🧩 Complexity Analysis

Time Complexity: O(n) → We scan each character once.

Space Complexity: O(1) → Constant extra space.

⚡ Constraints & Edge Cases

Input will always be a string.

String may contain spaces, punctuation, or numbers (ignore these).

Function should be case-insensitive.

An empty string should return 0.