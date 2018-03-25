import { updateName, UpdateName, defaultName, DefaultName } from './index';
import { UPDATE_NAME, DEFAULT_NAME } from '../constants';

describe('Actions - updateName', () => {
  it('returns the expected action', () => {
    const action: UpdateName = updateName('tester');
    expect(action).toEqual({ type: UPDATE_NAME, newName: 'tester' });
  });
});

describe('Actions - defaultName', () => {
  it('returns the expected action', () => {
    const action: DefaultName = defaultName();
    expect(action).toEqual({ type: DEFAULT_NAME });
  });
});
