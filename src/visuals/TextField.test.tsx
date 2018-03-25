import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import { TextField, Props } from './TextField';

const testProps: Props = {
  onSubmit: () => null,
};

describe('TextField visual comp', () => {
  it('shallow renders without crashing', () => {
    const el = shallow(<TextField {...testProps} />);
    expect(el.length).toEqual(1);
  });
});

describe('TextField visual comp -- Snapshot', () => {
  it('captures a snapshot', () => {
    const rendered = renderer.create(<TextField {...testProps} />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
