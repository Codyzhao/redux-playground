import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import App from './App';

const defaultStore = {
  counter: {
    count: 1
  }
};
const mockedStore = configureMockStore()(defaultStore);

it('renders without crashing', () => {
  shallow(<App store={mockedStore} />);
});
