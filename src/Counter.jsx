import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count++)}>Add to the Count: {count}</button>
  );
}

export default Counter;
