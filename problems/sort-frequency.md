# Sort Array by Frequency

## Problem Statement
Given an array of integers, write a function that sorts the array in **descending order of frequency**.  
- If two numbers have the same frequency, they should be sorted in **ascending numerical order**.  

---

## Approach
1. **Count frequency**  
   - Use an object (`freq`) to store the frequency of each element in the array.  
   - Example: `[4, 5, 6, 5, 4, 3]` → `{4: 2, 5: 2, 6: 1, 3: 1}`  

2. **Sort with custom comparator**  
   - Primary key: frequency (higher first).  
   - Secondary key: numerical value (smaller first).  

3. **Return the sorted array**.

---

## Code

```javascript
const sortByFrequency = (arr) => {
  const freq = {};
  for (let i = 0; i < arr.length; i++) {
    if (freq[arr[i]]) {
      freq[arr[i]]++;
    } else {
      freq[arr[i]] = 1;
    }
  }
  return arr.sort((a, b) => {
    if (freq[a] === freq[b]) {
      return a - b; // ascending order if same frequency
    } else {
      return freq[b] - freq[a]; // higher frequency first
    }
  });
};

console.log(sortByFrequency([4, 5, 6, 5, 4, 3]));


Example 1

Input

[4, 5, 6, 5, 4, 3]


Output

[4, 4, 5, 5, 3, 6]


Explanation:

Frequency → 4 → 2, 5 → 2, 6 → 1, 3 → 1

Both 4 and 5 have frequency 2 → sorted as [4, 4, 5, 5]

Then 3 and 6 (frequency 1) → [3, 6]

Example 2

Input

[9, 9, 8, 7, 7, 7, 8, 9]


Output

[9, 9, 9, 8, 8, 7, 7, 7]


Explanation:

Frequency → 9 → 3, 7 → 3, 8 → 2

9 and 7 both have frequency 3, but 7 < 9 → 7s come first in sorted list.

Final order → [7, 7, 7, 9, 9, 9, 8, 8].

Example 3

Input

[1, 2, 2, 3, 3, 3, 4]


Output

[3, 3, 3, 2, 2, 1, 4]


Explanation:

Frequency → 3 → 3, 2 → 2, 1 → 1, 4 → 1

Highest is 3 → [3, 3, 3]

Then 2 → [2, 2]

Then 1 and 4 (frequency 1) → sorted ascending [1, 4]

Complexity Analysis

Time Complexity:

Frequency counting → O(n)

Sorting → O(n log n)

Total → O(n log n)

Space Complexity:

Frequency object → O(k) (where k = unique elements).