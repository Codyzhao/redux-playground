import React from 'react';

export default ({ count, actions: { addCounter }, handleClick }) => (
  <>
    <h1>Number is currently <span className="no">{count}</span></h1>
    <button onClick={handleClick(5, addCounter)}>Set number to 5</button>
  </>
);
