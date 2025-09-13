
# Reduce Intermediate Problems

This document contains several **JavaScript problems** solved using the `reduce` method.  
Each section contains the **problem statement, input, output, and solution**.

---

## 1. Group People by Age

**Problem:**  
Given an array of people objects, group them by age.

**Input:**
```js
const people = [
  { name: 'Alice', age: 21 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 21 }
];
```

**Output:**
```js
{ 21: ['Alice','Charlie'], 25: ['Bob'] }
```

**Solution:**
```js
const groupByAge = (people) => {
  return people.reduce((acc, item) => {
    if (acc[item.age]) {
      acc[item.age].push(item.name);
    } else {
      acc[item.age] = [item.name];
    }
    return acc;
  }, {});
};
```

---

## 2. Remove Duplicates

**Problem:**  
Remove duplicates from an array using `reduce`.

**Input:**
```js
[1,2,3,2,4,1,5]
```

**Output:**
```js
[1,2,3,4,5]
```

**Solution:**
```js
const removeDuplicates = (array) => {
  return array.reduce((acc, item) => {
    if (!acc.includes(item)) {
      acc.push(item);
    }
    return acc;
  }, []);
};
```

---

## 3. Convert Array to Object

**Problem:**  
Convert an array into an object where keys are indices.

**Input:**
```js
['a', 'b', 'c']
```

**Output:**
```js
{ 0:'a', 1:'b', 2:'c' }
```

**Solution:**
```js
const arrayToObj = (arr) => {
  return arr.reduce((acc, item, index) => {
    acc[index] = item;
    return acc;
  }, {});
};
```

---

## 4. Find Average of Array

**Problem:**  
Find the average of numbers in an array.

**Input:**
```js
[10, 20, 30, 40]
```

**Output:**
```js
25
```

**Solution:**
```js
const findAverage = (arr) => {
  let sum = arr.reduce((acc, item) => acc + item, 0);
  return sum / arr.length;
};
```

---

## 5. Implement Map Using Reduce

**Problem:**  
Implement the behavior of `map` using `reduce`.

**Input:**
```js
[1, 2, 3]
```

**Output (x2):**
```js
[2, 4, 6]
```

**Solution:**
```js
const mapReduce = (arr) => {
  return arr.reduce((acc, item) => {
    acc.push(item * 2);
    return acc;
  }, []);
};
```

---

## 6. Implement Filter Using Reduce

**Problem:**  
Filter out only even numbers using `reduce`.

**Input:**
```js
[1,2,3,4,5]
```

**Output:**
```js
[2,4]
```

**Solution:**
```js
const filterReduce = (arr) => {
  return arr.reduce((acc, item) => {
    if (item % 2 === 0) {
      acc.push(item);
    }
    return acc;
  }, []);
};
```

---

## 7. Word Frequency Counter

**Problem:**  
Count frequency of each word in a string.

**Input:**
```js
"this is a test this is"
```

**Output:**
```js
{ this: 2, is: 2, a: 1, test: 1 }
```

**Solution:**
```js
const wordFrequency = (str) => {
  return str.split(" ").reduce((acc, item) => {
    if (!acc[item]) {
      acc[item] = 1;
    } else {
      acc[item] += 1;
    }
    return acc;
  }, {});
};
```

---

✅ These problems strengthen understanding of how `reduce` can mimic `map`, `filter`, and handle more advanced transformations.
