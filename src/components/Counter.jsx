import './counter.module.css';
import React, { useState } from 'react';

const Counter = () => {

    const initialValue = 0;

    const [count, setCount] = useState(initialValue);

    const handleIncrease = () => {
        setCount(count + 1)
    }
    const handleDecrease = () => {
        setCount(count - 1)
    }
    const handleReset = () => {
        setCount(initialValue)
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={handleIncrease}>Increment</button>
            <button onClick={handleDecrease}>Decrement</button>
            <button onClick={handleReset}>Reset</button>

        </div>
        )
}

export default Counter;