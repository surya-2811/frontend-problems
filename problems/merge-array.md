# 📝 Problem: Merge Array

## 📌 Description

You are given two arrays of objects. Each object contains an `id` field
and other key-value data.\
The goal is to **merge the data by `id`**.

-   If an `id` exists in both arrays, merge the properties.\
-   If it exists only in one, include it as is.\
-   In case of conflict (same key but different values), prefer values
    from the **second array**.

------------------------------------------------------------------------

## 🔹 Input

-   Two arrays of objects (each object has at least an `id` key).

## 🔹 Output

-   A new array with merged objects based on `id`.

------------------------------------------------------------------------

## 🎯 Example

**Input:**

``` javascript
arr1 = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]
arr2 = [{ id: 2, age: 30 }, { id: 3, name: "Charlie" }]
```

**Output:**

``` javascript
[
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie" }
]
```

------------------------------------------------------------------------

## ⚡ Constraints & Edge Cases

-   Arrays can be of different lengths.\
-   Objects may have overlapping or unique fields.\
-   Duplicate `id`s within a single array should not occur.\
-   If the same field exists in both and differs, use the value from the
    second array.

------------------------------------------------------------------------

## 💡 Hints

-   Use a `Map` or an object to keep track of merged items by `id`.\
-   Iterate through both arrays and merge properties.

------------------------------------------------------------------------

## ✅ Sample Implementation (JavaScript)

``` javascript
function mergeData(arr1, arr2){
  let map =new Map();
  for(let obj of arr1){
    map.set(obj.id, { ...obj });
  }
  for(let obj of arr2){
   if(map.has(obj.id)){
    map.set(obj.id, {...map.get(obj.id), ...obj})
   }else{
    map.set(obj.id,{...obj})
   }
  }
  return Array.from(map.values())
}


const arr1 = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];
const arr2 = [{ id: 2, age: 30 }, { id: 3, name: "Charlie" }];

console.log(mergeData(arr1, arr2));

```

------------------------------------------------------------------------

## 🕒 Time Complexity

-   **O(n + m)** → where `n` and `m` are lengths of the two arrays.

## 💾 Space Complexity

-   **O(n + m)** → extra space for the map.

------------------------------------------------------------------------
