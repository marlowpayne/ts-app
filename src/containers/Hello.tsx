import React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Hello as VisualComp } from '../visuals/Hello';
import { TextField } from './TextField';
import { StoreState } from '../types';
import { defaultName, updateName, Action } from '../actions';

export interface Props {
  name: string;
  onSubmit: Function;
  onEmptySubmit: Function;
}

// exporting for testing purposes
export const Visual = (props: Props) => {
  const onSubmit = (text: string) => {
    if (!text) {
      props.onEmptySubmit();
    } else {
      props.onSubmit(text);
    }
  };

  return (
    <div>
      <VisualComp name={props.name} />
      <TextField {...{ onSubmit }} />
    </div>
  );
};

const mapStateToProps = ({ person }: StoreState) => ({
  name: person.get('name')
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) =>
  ({
    onSubmit: (text: string) => dispatch(updateName(text)),
    onEmptySubmit: () => dispatch(defaultName()),
  });

export const Hello = connect(mapStateToProps, mapDispatchToProps)(Visual);
