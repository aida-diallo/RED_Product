
'use client'; 
import React, { useContext } from 'react';
import MyContext from './MyContext';

const SomeComponent: React.FC = () => {
    const context = useContext(MyContext);

    if (!context) {
        throw new Error('SomeComponent must be used within a MyProvider');
    }

    const { value, setValue } = context;

    return (
        <div>
            <h1>Current Value: {value}</h1>
            <button onClick={() => setValue('New Value')}>Change Value</button>
        </div>
    );
};

export default SomeComponent;