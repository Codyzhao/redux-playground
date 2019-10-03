import React from 'react';
import { connect } from 'react-redux';

import { addCounter } from '../../redux/actions';
import { useUpdateCounter } from '../../hooks/useUpdateCounter';

const Counter = () => {
  const countButton = useUpdateCounter(1);

  return (
    <>
      <h1>Have a look at my button {countButton}</h1>
    </>
  );
};

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
