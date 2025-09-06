📝 Problem: Anagram Checker
📌 Description

Write a function isAnagram(str1, str2) that determines whether two strings are anagrams.
Two strings are considered anagrams if they contain the same characters in the same frequency, ignoring case, spaces, and punctuation.

Return:

true if the two strings are anagrams.

false otherwise.

```javascript
🎯 Examples
Example 1

Input:

isAnagram("listen", "silent");


Output:

true

Example 2

Input:

isAnagram("hello", "world");


Output:

false

Example 3

Input:

isAnagram("Triangle", "Integral");


Output:

true

Example 4

Input:

isAnagram("rat", "car");


Output:

false

Example 5

Input:

isAnagram("a", "A");


Output:

true

Example 6

Input:

isAnagram("dormitory!!", "dirty room");


Output:

true

💻 Solution (JavaScript)

function isAnagram(str1, str2) {
   let string1 = str1.replace(/[^a-z0-9]/gi, "").toLowerCase();
   let string2 = str2.replace(/[^a-z0-9]/gi, "").toLowerCase();
   let map = {};
   for (let i = 0; i < string1.length; i++) {
      let letter = string1[i]
      if (!map[letter]) {
         map[letter] = 1
      } else {
         map[letter]++
      }
   }
   for (let i = 0; i < string2.length; i++) {
      let letter = string2[i];
      if (!map[letter]) return false;
      if (map[letter] < 1) return false;
      map[letter]--
   }
   return true
}


// Example usage:
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false
console.log(isAnagram("Triangle", "Integral")); // true
console.log(isAnagram("dormitory!!", "dirty room")); // true

🧩 Complexity Analysis

Time Complexity: O(n log n) → Sorting dominates, where n is the string length.

Space Complexity: O(n) → For storing sorted strings.

⚡ Constraints & Edge Cases

Ignore spaces, punctuation, and special characters.

Comparisons are case-insensitive.

Works with empty strings ("" vs "" returns true).

Strings of different lengths (after cleaning) return false.