import React, { useState, useEffect } from 'react';

const CounterWithDelay = () => {
  const [count, setCount] = useState(0);

  // useEffect với delay
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('Count increased with delay');
      setCount(prevCount => prevCount + 1);  // Tăng count sau 2 giây
    }, 2000); // Delay 2 giây

    // Cleanup function để dọn dẹp timer nếu component unmount hoặc khi effect thay đổi
    return () => clearTimeout(timer);
  }, []);  // Chạy lần đầu tiên sau render đầu tiên

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase Count Immediately</button>
    </div>
  );
};

export default CounterWithDelay;
