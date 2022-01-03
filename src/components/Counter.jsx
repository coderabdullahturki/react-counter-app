import './counter.module.css';
import React, { useState } from 'react';

const Counter = () => {

    const [count, setCount] = useState(0);

    const handleIncrease = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => handleIncrease}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>

        </div>
        )
}

export default Counter;