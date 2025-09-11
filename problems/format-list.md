📝 Problem: Format List
📌 Description

Write a function formatList(items) that takes an array of strings and returns a formatted string where:

Items are separated by commas (,) when there are more than two.

The last two items are separated by " and " instead of a comma.

If the array is empty, return an empty string.

If the array has only one item, return that item directly.
```javascript


🎯 Example Inputs & Outputs
formatList([]);
// → ""

formatList(["apple"]);
// → "apple"

formatList(["apple", "banana"]);
// → "apple and banana"

formatList(["apple", "banana", "cherry"]);
// → "apple, banana and cherry"

formatList(["one", "two", "three", "four"]);
// → "one, two, three and four"

✅ Constraints & Edge Cases

Input will always be an array of strings.

If the array is empty, return an empty string.

If the array has one element, return that element directly.

If the array has two or more elements, format with commas and "and" before the last item.

💡 Solution
function formatList(items) {
    if (items.length === 0) return ""
    if (items.length === 1) return items[0]
    let string = "";
    for (let i = 0; i < items.length - 1; i++) {
        string = string + items[i];
        if (i < items.length - 2) {
            string += ", "
        } else {
            string += " "
        }
    }
    return string + "and " + items[items.length - 1]
}

// Example usage:
console.log(formatList([])); // ""
console.log(formatList(["apple"])); // "apple"
console.log(formatList(["apple", "banana"])); // "apple and banana"
console.log(formatList(["apple", "banana", "cherry"])); // "apple, banana and cherry"
console.log(formatList(["one", "two", "three", "four"])); // "one, two, three and four"

📚 Explanation

Empty array → Return "".

Single element → Return the element directly.

Two elements → Join with " and ".

Three or more elements → Use commas for all except the last, then " and " before the final item.