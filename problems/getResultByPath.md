# 📝 Problem: Get Value by Path

## 📌 Description
Implement a function `getResultByPath(path, obj)` that retrieves the value from a nested object based on a string path.  
The path can include:
- **Dot notation** (`.`) for object properties.
- **Bracket notation** (`[index]`) for accessing array elements.

If the path does not exist in the object, return `undefined`.

---

## 🎯 Examples

### Example 1
**Input**
```javascript
path: "data.results.status"
obj: {
  data: {
    results: {
      status: "completed",
      error: "",
    }
  }
}
Output

javascript
Copy code
"completed"
Example 2
Input

javascript
Copy code
path: "data.results[1].status[0].type"
obj: {
  data: {
    results: [
      {
        status: "completed",
        error: "",
      },
      {
        status: [{ type: "done" }, { type: "start" }],
        error: "",
      },
    ],
  },
}
Output

javascript
Copy code
"done"
Example 3
Input

javascript
Copy code
path: "user.address.city"
obj: {
  user: {
    profile: {
      name: "Alice",
    }
  }
}
Output

javascript
Copy code
undefined
💻 Solution (JavaScript)
javascript
Copy code
function getResultByPath(path, obj) {
    // Split path into keys (handle both dot and bracket notations)
    const keys = path.replace(/\[(\d+)\]/g, '.$1').split('.');
    let result = obj;
    for (let key of keys) {
        if (result === undefined || result === null) return undefined;
        result = result[key]
    }
    return result;
}

// Example usage
const path = "data.results.status";
const obj = {
  data: {
    results: {
      status: "completed",
      error: "",
    }
  },
}
console.log(getResultByPath(path, obj)); // "completed"

module.exports = getResultByPath;
🧩 Complexity Analysis
Time Complexity: O(n) → where n is the number of keys in the path.

Space Complexity: O(1) → constant extra space used.

yaml
Copy code
