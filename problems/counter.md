# 📝 Problem: Counter (Using Closures)

## 📌 Description
Implement a **counter** using **JavaScript closures**.  
The counter should support the following operations:
- `increment()` → Increases the count by 1 and returns the updated value.  
- `decrement()` → Decreases the count by 1 and returns the updated value.  
- `reset()` → Resets the count to `0` and returns `0`.  
- `getValue()` → Returns the current count value.  

---

## 🎯 Examples

### Example 1
#### Input
```javascript
const counter = createCounter();

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
console.log(counter.getValue());

Output
1
2
1
0
0

💻 Solution (JavaScript)
function createCounter() {
 let count =0;
 return {
    increment: ()=>{
        count = count +1
        return count
    },
    decrement: ()=>{
        count --
        return count
    },
    reset: ()=>{
        count =0;
        return count
    },
    getValue: ()=>{
        return count
    }
 }
}

// Usage
const counter = createCounter();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.reset());     // 0
console.log(counter.getValue());  // 0

🧩 Complexity Analysis

Time Complexity: O(1) → Each operation is constant time.

Space Complexity: O(1) → Uses one variable (count) stored in closure.