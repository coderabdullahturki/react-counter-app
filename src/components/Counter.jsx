import './counter.module.css';
import React, { useState } from 'react';

const Counter = () => {

    const [count, setCount] = useState(0);

    const handleIncrease = () => {
        setCount(count + 1)
    }
    const handleDecrease = () => {
        setCount(count - 1)
    }
    const handleReset = () => {
        setCount(0)
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => handleIncrease}>Increment</button>
            <button onClick={() => handleDecrease}>Decrement</button>
            <button onClick={() => handleReset}>Reset</button>

        </div>
        )
}

export default Counter;