# Remove Duplicates

## 📝 Problem

Implement a function `removeDuplicates(arr)` that removes duplicate values from an array.  
The function should return a **new array** with only unique elements while preserving the **original order** of first occurrences.

---

## 🎯 Examples

```javascript
removeDuplicates([1, 2, 2, 3, 4, 4]);
// Output: [1, 2, 3, 4]

removeDuplicates(["a", "b", "a", "c"]);
// Output: ["a", "b", "c"]

removeDuplicates([1, "1", 1]);
// Output: [1, "1"]

removeDuplicates([]);
// Output: []

removeDuplicates([true, false, true]);
// Output: [true, false]
```

---

## ✅ Constraints & Edge Cases

- The function should not mutate the original array.
- Array may contain **different data types** (numbers, strings, booleans, etc.).
- Comparison is **strict (`===`)**, so `"1"` and `1` are considered different.
- Order of first occurrences must be preserved.

---

## 💡 Approach

We can use a `Set` in JavaScript, which only stores **unique values**.  
Then, convert it back into an array.

---

## 💻 Solution (JavaScript)

```javascript
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Example usage:
console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); //[ 1, 2, 3, 4 ]
console.log(removeDuplicates(["a", "b", "a", "c"])); //[ 'a', 'b', 'c' ]
console.log(removeDuplicates([1, "1", 1])); // [1, "1]
console.log(removeDuplicates([])); //[]
console.log(removeDuplicates([true, false, true])); // [true, false]
```

---

## 🧩 Complexity Analysis

- **Time Complexity:** O(n) → Each element is inserted into the Set once.
- **Space Complexity:** O(n) → The Set stores at most n unique elements.
