import * as actions from './actions';

const initialState = {
  count: 0
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  const reducer = {
    [actions.ADD_COUNTER]: (state, payload) => ({
      ...state,
      count: payload
    }),
  }[type];

  return reducer ? reducer(state, payload) : state;
};
