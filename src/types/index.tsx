import { Record } from 'immutable';

const personDefaults = {
  name: 'World'
};

interface PersonInterface {
  name: string;
}

export class PersonRecord extends Record(personDefaults) implements PersonInterface {
  name: string;
  constructor(props: PersonInterface) {
    super(props);
  }
}

export interface StoreState {
  person: PersonRecord;
}
