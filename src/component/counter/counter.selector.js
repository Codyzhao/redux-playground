import { createSelector } from 'reselect'

const moduleSelector = state => state.counter;

export const countSelector = createSelector(
  moduleSelector,
  module => module.count
);
