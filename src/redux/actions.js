/*
 * action types
 */

export const ADD_COUNTER = 'ADD_COUNTER';

/*
 * action creators
 */

export const addCounter = payload => ({ type: ADD_COUNTER, payload });
