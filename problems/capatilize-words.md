📝 Title Case Conversion
📌 Problem Statement

Given a string, write a function to convert it into Title Case, where:

The first letter of each word is capitalized.

All other letters are lowercase.

Multiple spaces are trimmed and reduced to a single space.
```javascript

🔹 Example Inputs & Outputs
// Example 1:
Input: "hello world"
Output: "Hello World"

// Example 2:
Input: "javaScript is FUN"
Output: "Javascript Is Fun"

// Example 3:
Input: "   multiple   spaces   "
Output: "Multiple Spaces"

// Example 4:
Input: ""
Output: ""

🚀 Approach

Trim extra spaces from the input.

Split the string into words using spaces.

Convert the first character of each word to uppercase and the rest to lowercase.

Join the processed words back with a single space.

💻 Solution (JavaScript)
function capitalizeWords(sentence) {
    return sentence.trim().split(/\s+/).map((word)=> word.charAt(0).toUpperCase()+ word.slice(1).toLowerCase()).join(" ")
}

// ✅ Test Cases
console.log(capitalizeWords("hello world"));        // "Hello World"
console.log(capitalizeWords("javaScript is FUN")); // "Javascript Is Fun"
console.log(capitalizeWords("   multiple   spaces   ")); // "Multiple Spaces"
console.log(capitalizeWords("")); // ""

🧩 Complexity Analysis

Time Complexity: O(n), where n is the length of the string.

Space Complexity: O(n), for storing the processed words.