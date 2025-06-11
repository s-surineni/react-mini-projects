import React, { useState, useCallback, memo } from 'react';

const ExpensiveChild = ({ onIncrement }) => {
  console.log('ExpensiveChild rendered');
  return (
    <div>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
};

// Memoize the child component with custom comparison
const MemoizedChild = memo(ExpensiveChild, (prevProps, nextProps) => {
  // Always re-render when count changes
  return prevProps.onIncrement === nextProps.onIncrement;
});

const UseCallbackExample = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // Memoized callback function using useCallback
  const handleIncrement = useCallback(() => {
    setCount(prev => prev + 1);
  }, []); // Empty dependency array means this callback won't change

  return (
    <div>
      <h2>UseCallback Example</h2>
      <p>Count: {count}</p>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <MemoizedChild onIncrement={handleIncrement} />
    </div>
  );
};

export default UseCallbackExample;
