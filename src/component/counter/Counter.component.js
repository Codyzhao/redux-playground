import React from 'react';
import { connect } from 'react-redux';

import { addCounter } from '../../redux/actions';

const handleClick = (value, addCounter) => e => {
  e.preventDefault();
  addCounter(value);
};

const Counter = ({ count, addCounter }) => (
  <>
    <h1>Number is currently {count}</h1>
    <button onClick={handleClick(5, addCounter)}>Set number to 5</button>
  </>
);

/**************
**** Redux ****
***************/

const mapStateToProps = state => ({
  count: state.count
});

const mapDispatchToProps = { addCounter };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
