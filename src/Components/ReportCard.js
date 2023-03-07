import React, { useState } from 'react';

function ReportCard() {
  const [name, setName] = useState('');
  const [maths, setMaths] = useState('');
  const [science, setScience] = useState('');
  const [history, setHistory] = useState('');

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleMathsChange = e => {
    setMaths(e.target.value);
  };

  const handleScienceChange = e => {
    setScience(e.target.value);
  };

  const handleHistoryChange = e => {
    setHistory(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const total = parseInt(maths) + parseInt(science) + parseInt(history);
    const percentage = (total / 300) * 100;
    alert(`${name} scored a total of ${total} marks out of 300 and got ${percentage.toFixed(2)}%`);
  };

  return (
    <div>
      <h1>Student Report Card</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label htmlFor="maths">Maths: </label>
          <input type="number" id="maths" value={maths} onChange={handleMathsChange} />
        </div>
        <div>
          <label htmlFor="science">Science: </label>
          <input type="number" id="science" value={science} onChange={handleScienceChange} />
        </div>
        <div>
          <label htmlFor="history">History: </label>
          <input type="number" id="history" value={history} onChange={handleHistoryChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ReportCard;
