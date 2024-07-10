import React, { useState, useRef, useEffect } from 'react';

export const Counter = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue);
  const directionRef = useRef('');

  useEffect(() => {
    if (count > initialValue) {
      directionRef.current = 'up';
    } else if (count < initialValue) {
      directionRef.current = 'down';
    }

    console.log(`The counter is going: ${directionRef.current}`);
  }, [count, initialValue]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
};