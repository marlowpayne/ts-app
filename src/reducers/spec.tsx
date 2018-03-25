import { rootReducer } from './index';
import { PersonRecord, StoreState } from '../types';
import { DEFAULT_NAME, UPDATE_NAME } from '../constants';
import { defaultState } from '../store/default-state';

describe('Reducer', () => {
  let state: StoreState;

  beforeEach(() => {
    state = {
      person: new PersonRecord({
        name: 'Tester'
      })
    };
  });

  it('Default name case returns expected state', () => {
    state = rootReducer(state, { type: DEFAULT_NAME });
    expect(state).toEqual(defaultState);
  });

  it('Update name case returns expected state', () => {
    state = rootReducer(state, { type: UPDATE_NAME, newName: 'newTester' });
    expect(state).toEqual({
      person: new PersonRecord({
        name: 'newTester'
      })
    });
  });
});
