📝 Problem: Throttle Function in JavaScript
📌 Definition

A throttle function ensures that a given function executes at most once every specified time interval, even if it is called multiple times.

👉 In other words:

Throttle = "Run at regular intervals no matter how often it’s triggered."

Useful for events like scroll, resize, mousemove, where firing too often can slow performance.
```javascript

🚀 Solution
const throttle = (cb, delay) => {
  let last = 0;
  return (...args) => {
    let now = new Date().getTime();
    console.log("Time since last call:", now - last);
    if (now - last > delay) {
      last = now;
      cb(...args);
    }
  };
};

const myFun = (args) => {
  console.log("Throttle executed:", args, "at", new Date().toLocaleTimeString());
};

const throttledFn = throttle(myFun, 2000);

// Call function multiple times quickly
setInterval(() => {
  throttledFn("scroll event fired");
}, 500);

🎯 Explanation

last stores the timestamp of the last execution.

Every call checks the difference between current time and last.

If the difference is greater than the delay, the callback executes.

Extra calls within the delay window are ignored.

✅ Expected Console Output

Even though throttledFn is triggered every 500ms, it executes only once every 2000ms (2s).

Time since last call: 1729632347150
Throttle executed: scroll event fired at 10:20:01

Time since last call: 500
Time since last call: 500
Time since last call: 500
Time since last call: 2001
Throttle executed: scroll event fired at 10:20:03

Time since last call: 500
Time since last call: 500
Time since last call: 500
Time since last call: 2002
Throttle executed: scroll event fired at 10:20:05


👉 The log proves that the function is throttled — executing once every 2 seconds, despite being called every 0.5s.