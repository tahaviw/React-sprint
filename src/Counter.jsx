import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Component loaded");
  }, []);
  return (
    <div className="counter-card">
      <p>Current count: {count}</p>

      <button
        onClick={() => setCount(count + 1)}
        className="liquid-glass-btn counter-btn"
      >
        <span className="liquid-shine"></span>
        Increment
      </button>
    </div>
  );
}

export default Counter;