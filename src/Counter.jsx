import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {}, []);
  return (
    <button onClick={() => setCount(count + 1)}>
      Add to the Count: {count}
    </button>
  );
}

export default Counter;
