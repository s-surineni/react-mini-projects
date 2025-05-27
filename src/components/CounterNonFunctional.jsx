import React, { useState } from 'react';

function CounterNonFunctional() {
  const [counter, setCounter] = useState(0);

  const handleDoubleIncrement = () => {
    setCounter(counter + 1);
    setCounter(counter + 1);
  };

  return (
    <div>
      <h3>Counter (Non-Functional Update)</h3>
      <p>Value: {counter}</p>
      <button onClick={handleDoubleIncrement}>
        Increment Twice (but only increases by 1)
      </button>
      <p style={{ color: 'gray', fontSize: '0.9em' }}>
        Clicking the button calls setCounter(counter + 1) twice, but the value only increases by 1 due to React's batching.
      </p>
    </div>
  );
}

export default CounterNonFunctional; 