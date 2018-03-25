import { createStore } from 'redux';
import { PersonRecord, StoreState } from '../types';
import { reducer } from '../reducers';

export const defaultState: StoreState = {
  person: new PersonRecord({
    name: 'World'
  })
};

export const store = createStore<StoreState>(reducer, defaultState);
