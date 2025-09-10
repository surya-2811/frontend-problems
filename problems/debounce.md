📝 Problem: Debounce Function in JavaScript
📌 Definition

A debounce function ensures that a given function executes only after a certain amount of time has passed without it being called again.

👉 In other words:

Debounce = "Wait until things stop happening, then run once."

Common use cases:

Search inputs (wait until user stops typing before API call)

Window resize events

Button click spam prevention

```javascript

🚀 Solution
const debounce = (cb, delay) => {
    let timer;
    return (...args) => {
        if (timer) clearTimeout(timer); // cancel previous call
        timer = setTimeout(() => {
            cb(...args); // execute after delay
        }, delay);
    };
};

const myFun = (args) => {
    console.log("Debounce executed with:", args, "at", new Date().toLocaleTimeString());
};

const debounceFn = debounce(myFun, 2000);

let i = 0;
let interval = setInterval(() => {
    i++;
    console.log("called at", new Date().toLocaleTimeString());
    debounceFn("hello world");
    if (i > 5) clearInterval(interval); // stop after 6 calls
}, 300);

🎯 Explanation

Every call to debounceFn resets the timer with clearTimeout.

Since calls are made every 300ms, the timer keeps getting reset.

Only after no calls for 2000ms (2s), myFun executes once.

✅ Expected Console Output

Even though the function is called 6 times quickly (every 300ms), the actual execution happens only once, 2 seconds after the last call.

called at 10:25:01
called at 10:25:01
called at 10:25:02
called at 10:25:02
called at 10:25:03
called at 10:25:03
Debounce executed with: hello world at 10:25:05


👉 This output proves the debounce works: multiple rapid calls → only one final execution.