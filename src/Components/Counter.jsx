import React, { useState } from 'react';
import CounterDisplay from './CounterDisplay'; // Import the CounterDisplay component

const Counter = ({ initialCount, decrementAmount }) => {
  const [count, setCount] = useState(initialCount);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount(prevCount => prevCount - decrementAmount); // Decrement by the specified amount
  };

  const handleReset = () => {
    setCount(initialCount); // Reset to the initial value
  };

  return (
    <div>
      <CounterDisplay count={count} /> {/* Render the CounterDisplay component */}
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;