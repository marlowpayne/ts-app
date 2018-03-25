import React from 'react';
import { shallow } from 'enzyme';

import { Visual, Props } from './Hello';

const testProps: Props = {
  name: 'Test',
  onSubmit: () => null,
  onEmptySubmit: () => null,
};

describe('Hello container comp', () => {
  it('shallow renders without crashing', () => {
    const el = shallow(<Visual {...testProps} />);
    expect(el.length).toEqual(1);
  });
});
