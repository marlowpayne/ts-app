import { PersonRecord, StoreState } from '../types';

export const defaultState: StoreState = {
  person: new PersonRecord({
    name: 'World'
  })
};
