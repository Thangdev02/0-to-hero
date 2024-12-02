import React, { useState, useEffect } from 'react';

const CounterWithDelay = () => {
  const [count, setCount] = useState(0);

  // useEffect với delay
  useEffect(() => {
      console.log('Count increased with delay');
      setCount(count)

    },[count]); // Delay 2 giây

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase Count Immediately</button>
    </div>
  );
};

export default CounterWithDelay;
