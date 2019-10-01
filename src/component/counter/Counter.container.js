import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addCounter } from './counter.duck';
import CounterComp from './Counter.component';

const handleClick = (value, addCounter) => e => {
  e.preventDefault();
  addCounter(value);
};

const Counter = props => <CounterComp {...props} handleClick={handleClick} />;

/***************
 **** Redux ****
 ***************/

const mapStateToProps = state => ({
  count: state.counter.count
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ addCounter }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
