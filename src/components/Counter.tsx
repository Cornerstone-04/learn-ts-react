import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(1);

  const handleCount = (dir: string): void => {
    if (dir === "up") {
      setCount((prev) => prev + 1);
    } else {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <div>
      <h1>Count is {count}</h1>
      <button onClick={() => handleCount("up")}>+</button>
      <button onClick={() => handleCount("down")}>-</button>
    </div>
  );
};

export default Counter;
