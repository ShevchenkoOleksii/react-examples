import React, {useState} from 'react';

const TextInput = () => {
    const [value, setValue] = useState('')

    const changeValue = (event) => {
        setValue(event.target.value)
    }

    return (
        <div className={'text-input border-black'}>
            <p
                className={'text-value'}
            >
                {value}
            </p>
            <input
                className={'text-input-value'}
                type="text"
                value={value}
                onChange={changeValue}
            />
        </div>
    );
};

export default TextInput;