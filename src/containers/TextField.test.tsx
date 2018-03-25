import React from 'react';
import { shallow } from 'enzyme';

import { TextField, Props } from './TextField';

const testProps: Props = {
  onSubmit: () => null,
};

describe('TextField container comp', () => {
  it('shallow renders without crashing', () => {
    const el = shallow(<TextField {...testProps} />);
    expect(el.length).toEqual(1);
  });
});
