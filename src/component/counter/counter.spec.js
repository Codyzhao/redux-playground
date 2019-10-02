import React from 'react';
import { shallow, mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import CounterDefault, { Counter } from './Counter.container';

const defaultStore = {
  counter: {
    count: 1
  }
};
const mockedStore = configureMockStore()(defaultStore);

describe('Counter', () => {
  it('renders without crashing', () => {
    shallow(<CounterDefault store={mockedStore} />);
  });

  it('should init counter with 0', () => {
    const props = {
      count: 0,
      actions: {
        addCounter: jest.fn()
      },
      handleClick: jest.fn()
    };
    const wrapper = mount(<Counter {...props} />);
    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper.find('h1>span').length).toBe(1);
    expect(wrapper.find('button').length).toBe(1);
    expect(wrapper.find('h1>span').text()).toBe('0');
    wrapper.unmount();
  });
});
