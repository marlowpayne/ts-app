import { StoreState, PersonRecord } from '../types';
import { Action } from '../actions';
import { UPDATE_NAME, DEFAULT_NAME } from '../constants';
import { defaultState } from '../store/default-state';

export const rootReducer = (state: StoreState, action: Action): StoreState => {
  switch (action.type) {
    case UPDATE_NAME:
      return { ...state, person: new PersonRecord({ name: action.newName }) };
    case DEFAULT_NAME:
      return { ...state, person: new PersonRecord({ name: defaultState.person.name }) };
    default:
      return state;
  }
};
