# 📝 Problem: Valid Palindrome

## 📌 Description
Given a string `s`, determine if it is a **palindrome**, considering only **alphanumeric characters** and ignoring cases.  
Return `true` if it is a palindrome, otherwise return `false`.

---

## 🎯 Examples

### Example 1
#### Input
```javascript
isPalindrome("A man, a plan, a canal: Panama");

Output
true

Explanation

After removing non-alphanumeric characters and ignoring cases, the string becomes "amanaplanacanalpanama", which is a palindrome.

Example 2
Input
isPalindrome("race a car");

Output
false

Explanation

After cleaning, the string becomes "raceacar", which is not the same when reversed.

Example 3
Input
isPalindrome(" ");

Output
true

Explanation

An empty string (after cleaning) is considered a palindrome.

💻 Solution (JavaScript)
function isPalindrome(s) {
    let cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, "")
   
    return cleaned === cleaned.split("").reverse().join("")
}


// Examples
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome(" ")); // true