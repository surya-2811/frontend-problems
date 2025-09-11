📝 Problem: Reverse Words in a String
📌 Description

Given a string s, reverse the order of the words.
A word is defined as a sequence of non-space characters. Multiple spaces between words should be reduced to a single space in the output. The returned string must not contain leading or trailing spaces.

🎯 Example Inputs & Outputs
// Example 1:
Input: s = "the sky is blue"
Output: "blue is sky the"

// Example 2:
Input: s = "  hello world  "
Output: "world hello"
Explanation: The reversed string should not contain leading or trailing spaces.

// Example 3:
Input: s = "a good   example"
Output: "example good a"
Explanation: Multiple spaces between words are reduced to a single space.

✅ Constraints & Edge Cases

1 <= s.length <= 10⁴

s contains English letters (upper-case and lower-case), digits, and spaces ' '.

There is at least one word in s.

An empty string or a string with only spaces should return an empty string.

A single word should return the word itself.

Multiple spaces between words should be reduced to a single space.

```javascript

💡 Solution
function reverseWords(s) {
 return s.split(" ").filter((item)=> item).reverse().join(" ")
}


// Example usage:
console.log(reverseWords("the sky is blue"));      // "blue is sky the"
console.log(reverseWords("  hello world  "));      // "world hello"
console.log(reverseWords("a good   example"));     // "example good a"
console.log(reverseWords("single"));               // "single"
console.log(reverseWords("     "));                // ""

📚 Explanation

s.trim() removes leading and trailing spaces.

split(/\s+/) splits the string by one or more spaces, reducing multiple spaces to a single delimiter.

reverse() reverses the word order.

join(" ") creates the final output with single spaces.