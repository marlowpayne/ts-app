import React from 'react';
import { shallow } from 'enzyme';

import { App } from './App';

describe('App container comp', () => {
  it('shallow renders without crashing', () => {
    const el = shallow(<App />);
    expect(el.length).toEqual(1);
  });
});
