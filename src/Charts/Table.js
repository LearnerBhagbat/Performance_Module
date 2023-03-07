import React from 'react';

function Table(props) {
  return (
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map(item => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.gender}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
