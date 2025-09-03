📝 Problem: Reverse Words
📌 Description

Write a function reverseWords that takes a sentence string as input and returns a new string where each word is reversed, but the order of the words remains the same.

Words are separated by spaces.

Preserve the original spacing.

🎯 Examples
```javascript
Example 1
Input
console.log(reverseWords("Hello World"));

Output
"olleH dlroW"

Example 2
Input
console.log(reverseWords("JavaScript is fun"));

Output
"tpircSavaJ si nuf"

Example 3
Input
console.log(reverseWords(" Lead  and Trail "));

Output
" daeL  dna liarT "

Example 4
Input
console.log(reverseWords(""));

Output
""

Example 5
Input
console.log(reverseWords("OneWord"));

Output
"droWenO"

💻 Solution (JavaScript)
function reverseWords(s) {
  return s.split(" ").map((item)=> item.split("").reverse().join("")).join(" ")
}

// Usage
console.log(reverseWords("Hello World"));       // "olleH dlroW"
console.log(reverseWords("JavaScript is fun")); // "tpircSavaJ si nuf"
console.log(reverseWords(" Lead  and Trail ")); // " daeL  dna liarT "
console.log(reverseWords(""));                  // ""
console.log(reverseWords("OneWord"));           // "droWenO"

🧩 Complexity Analysis

Time Complexity: O(n) → Each character is visited once.

Space Complexity: O(n) → Additional space for splitting and reversing words.