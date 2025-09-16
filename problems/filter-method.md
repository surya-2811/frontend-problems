# JavaScript Filter Method Problems

This document contains various problems solved using the **filter()**
method in JavaScript.\
Each problem includes **Input**, **Solution**, and **Output**.

------------------------------------------------------------------------

## 1. Get Unique Values from an Array

**Input:**

``` javascript
const arr = [1, 2, 3, 2, 4, 1, 5];
```

**Solution:**

``` javascript
const uniqueArr = arr.filter((item, index, shelf)=>{
  return shelf.indexOf(item) === index
})
console.log(uniqueArr);
```

**Output:**

``` javascript
[1, 2, 3, 4, 5]
```

------------------------------------------------------------------------

## 2. Get Unique Objects by ID

**Input:**

``` javascript
const list =[
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "C" },
  { id: 3, name: "D" }
];
```

**Solution:**

``` javascript
function filterList(arr){
   return arr.filter((item, index, shelf)=>{
      return shelf.findIndex((e)=> e.id === item.id) === index
   })
}
console.log(filterList(list))
```

**Output:**

``` javascript
[ { id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 3, name: 'D' } ]
```

------------------------------------------------------------------------

## 3. Filter Anagrams of a Word

**Input:**

``` javascript
const words = ["listen", "silent", "enlist", "rat", "tar", "art", "hello"];
const target = "listen";
```

**Solution:**

``` javascript
const filterAnagram =(words, target)=>{
   const targetWord = target.split("").sort().join("");
   return words.filter((item)=>{
    return target !== item && item.split("").sort().join("") === targetWord
   })
}

console.log(filterAnagram(words, target));
```

**Output:**

``` javascript
[ 'silent', 'enlist' ]
```

------------------------------------------------------------------------

## 4. Employees with Greater than Average Salary

**Input:**

``` javascript
const Employee = [
  { name: "A", salary: 3000 },
  { name: "B", salary: 6000 },
  { name: "C", salary: 5000 },
  { name: "D", salary: 7000 }
];
```

**Solution:**

``` javascript
const filterEmployee =(arr)=>{
   const totalSalary = arr.reduce((acc, item) => acc + item.salary , 0)
   const averageSalary = totalSalary / arr.length;
   return arr.filter((item)=> item.salary > averageSalary)
}

console.log(filterEmployee(Employee))
```

**Output:**

``` javascript
[ { name: 'B', salary: 6000 }, { name: 'D', salary: 7000 } ]
```

------------------------------------------------------------------------

## 5. Filter Palindromes

**Input:**

``` javascript
["madam", "racecar", "hello", "level", "world"]
```

**Solution:**

``` javascript
const filterPalindromes =(arr) =>{
   return arr.filter((item)=> item === item.split("").reverse().join(""))
}
console.log(filterPalindromes(["madam", "racecar", "hello", "level", "world"]))
```

**Output:**

``` javascript
[ 'madam', 'racecar', 'level' ]
```

------------------------------------------------------------------------

## 6. Active Employees in IT Department

**Input:**

``` javascript
const array = [
  { name: "John", dept: "IT", active: true },
  { name: "Asha", dept: "HR", active: false },
  { name: "Raj", dept: "IT", active: true },
  { name: "Kiran", dept: "Finance", active: true }
];
```

**Solution:**

``` javascript
function activeItEmployees(array){
   return array.filter((item)=> item.dept === "IT" && item.active)
}
console.log(activeItEmployees(array))
```

**Output:**

``` javascript
[ { name: 'John', dept: 'IT', active: true }, { name: 'Raj', dept: 'IT', active: true } ]
```

------------------------------------------------------------------------

## 7. Filter Subarrays Containing a Target

**Input:**

``` javascript
[[1,2,3], [4,5], [6,7,8], [9]], target = 5
```

**Solution:**

``` javascript
function filterSubArray(arr, target){
  return arr.filter((item)=> item.includes(target))
}

console.log(filterSubArray([[1,2,3], [4,5], [6,7,8], [9]], 5))
```

**Output:**

``` javascript
[ [4, 5] ]
```

------------------------------------------------------------------------

## 8. Filter by Index Range

**Input:**

``` javascript
[10, 20, 30, 40, 50, 60, 70]
```

**Solution:**

``` javascript
const filterRange = [10, 20, 30, 40, 50, 60, 70].filter((item, index)=> index >= 2 && index <= 4)

console.log(filterRange)
```

**Output:**

``` javascript
[30, 40, 50]
```

------------------------------------------------------------------------
