import React, { useState } from 'react';

const Counter = () => {

  const initialState = 0;

    const [count, setCount] = useState(initialState);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onclick={() => setCount(count - 1)}>Decrease</button>
            <button onClick={() => setCount(count)}>Reset</button>

        </div>
        )
}

export default Counter;