import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  // useEffect(() => {
  //   console.log("Component loaded");
  // }, []);
  useEffect(() => {
    console.log("Count changed to:", count);
  }, [count]);
  return (
    <div className="counter-card">
      <p>Current count: {count}</p>

      <button className="liquid-glass-btn" onClick={() => setCount(count + 1)}>
        <span className="liquid-shine"></span>
        Increment
      </button>
    </div>
  );
}

export default Counter;
