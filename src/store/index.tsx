import { createStore } from 'redux';
import { StoreState } from '../types';
import { rootReducer } from '../reducers';
import { defaultState } from './default-state';

export const store = createStore<StoreState>(rootReducer, defaultState);
