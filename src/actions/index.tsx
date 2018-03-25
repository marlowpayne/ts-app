import { UPDATE_NAME, DEFAULT_NAME } from '../constants';

export interface UpdateName {
  type: UPDATE_NAME;
  newName: string;
}

export interface DefaultName {
  type: DEFAULT_NAME;
}

export type Action = UpdateName | DefaultName;

export const updateName = (newName: string): UpdateName => ({ type: UPDATE_NAME, newName });
export const defaultName = (): DefaultName => ({ type: DEFAULT_NAME });
