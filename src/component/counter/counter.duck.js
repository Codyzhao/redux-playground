import { createAction } from 'redux-actions';

/*********************
 *   INITIAL STATE   *
 *********************/

const initialState = {
  count: 0
};

/***************
 *   ACTIONS   *
 ***************/

export const ADD_COUNTER = 'ADD_COUNTER';

export const addCounter = createAction(ADD_COUNTER);

/***************
 *   REDUCER   *
 ***************/

export default (state = initialState, action) => {
  const { type, payload } = action;

  const reducer = {
    [ADD_COUNTER]: (state, payload) => ({
      ...state,
      count: payload
    }),
  }[type];

  return reducer ? reducer(state, payload) : state;
};
