import { useState } from "react";

// we can set initialState as '', {}, 0 etc
const useCounter = (initialState = 0) => {
  const [count, setCount] = useState<number>(initialState);
  const handleIncrement = (steps: number = 2) => {
    setCount(count + steps);
  };

  const handleDecrement = (steps = 2) => {
    setCount(count - steps);
  };

  return { count, handleIncrement, handleDecrement };
};

export default useCounter;
