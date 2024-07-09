
import React, { useState, useEffect, useRef } from 'react';

export function Counter({ initialValue }) {
  const [count, setCount] = useState(initialValue);
  const prevCountRef = useRef(initialValue);

  useEffect(() => {
    // Calculate the direction of change
    const direction = count > prevCountRef.current ? 'up' : 'down';

    // Update the ref with the current count
    prevCountRef.current = count;

    // Print the direction to the console if it's different from the previous value
    if (direction !== 'up' && direction !== 'down') {
      console.log('Direction:', direction);
    }
  }, [count]);

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
