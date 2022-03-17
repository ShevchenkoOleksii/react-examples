import React, {useState} from 'react';
import TextInput from "./TextInput";

const Counter = () => {
    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(counter + 1)
    }

    const decrement = () => {
        setCounter(counter - 1)
    }

    return (
        <div className={'counter-component border-black'}>
            <p className={'counter-value'}>{counter}</p>
            <button
                className={'btn-counter'}
                onClick={increment}
            >
                increment
            </button>
            <button
                className={'btn-counter'}
                onClick={decrement}
            >
                decrement
            </button>
            <TextInput />
        </div>
    );
};

export default Counter;