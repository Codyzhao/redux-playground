import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addCounter } from './counter.duck';
import CounterComp from './Counter.component';
import * as selectors from './counter.selector';

const handleClick = (value, addCounter) => e => {
  e.preventDefault();
  addCounter(value);
};

const Counter = props => <CounterComp {...props} handleClick={handleClick} />;

/***************
 **** Redux ****
 ***************/

const mapStateToProps = state => ({
  count: selectors.countSelector(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ addCounter }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
