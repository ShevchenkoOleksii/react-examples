import React from 'react';

const MySelect = ({options, defaultValue, value, onChange}) => {
    return (
        <select
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option disabled={true} value={''}>{defaultValue}</option>
            {options.map(item =>
                <option key={item.value + item.name} value={item.value}>
                    {item.name}
                </option>
            )}
        </select>
    );
};

export default MySelect;