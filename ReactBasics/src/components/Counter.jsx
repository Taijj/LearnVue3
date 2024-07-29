import { useState } from "react";

export default function Counter() {
  // State are basically class fields
  // The variable and a setter, default as parameter
  const [count, setCount] = useState(0); // called a "hook"
  const [incrementor, _] = useState(5);

  function increment() {
    setCount(count + incrementor);
  }
  function decrement() {
    setCount(count - incrementor);
  }

  return (
    <div>
      <h3>Count is: {count}</h3>
      <button onClick={increment}>++</button>
      <button onClick={decrement}>--</button>
    </div>
  );
}
