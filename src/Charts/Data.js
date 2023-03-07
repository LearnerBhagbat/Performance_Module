import React from 'react';
import Table from './Table';

const Data = () => {

    const info = [
        { id: 1, name: 'John', age: 30, gender: 'Male' },
        { id: 2, name: 'Jane', age: 25, gender: 'Female' },
        { id: 3, name: 'Bob', age: 40, gender: 'Male' },
        { id: 1, name: 'John', age: 30, gender: 'Male' },
        { id: 2, name: 'Jane', age: 25, gender: 'Female' },
        { id: 3, name: 'Bob', age: 40, gender: 'Male' },
    ];

    return (

        <div>
            <Table data={info} />
        </div>

    );
}

export default Data;