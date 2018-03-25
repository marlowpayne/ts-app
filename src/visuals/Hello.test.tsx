import React from 'react';
import { render } from 'enzyme';
import renderer from 'react-test-renderer';

import { Hello } from './Hello';

describe('Hello visual comp', () => {
  it('renders the correct text when no enthusiasm level is given', () => {
    const hello = render(<Hello name="Tester" />);
    expect(hello.find('.greeting').text()).toEqual('Hello Tester!');
  });

  it('renders the correct text with an explicit enthusiasm of 1', () => {
    const hello = render(<Hello name="Tester" enthusiasmLevel={1} />);
    expect(hello.find('.greeting').text()).toEqual('Hello Tester!');
  });

  it('renders the correct text with an explicit enthusiasm level of 5', () => {
    const hello = render(<Hello name="Tester" enthusiasmLevel={5} />);
    expect(hello.find('.greeting').text()).toEqual('Hello Tester!!!!!');
  });

  it('throws when the enthusiasm level is 0', () => {
    expect(() => {
      render(<Hello name="Tester" enthusiasmLevel={0} />);
    }).toThrow();
  });

  it('throws when the enthusiasm level is negative', () => {
    expect(() => {
      render(<Hello name="Tester" enthusiasmLevel={-1} />);
    }).toThrow();
  });
});

describe('Hello visual comp -- Snapshot', () => {
  it('captures a snapshot', () => {
    const rendered = renderer.create(<Hello name="Tester" enthusiasmLevel={5} />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
