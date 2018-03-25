import React from 'react';
import { connect, Dispatch } from 'react-redux';
import styled from 'styled-components';

import { Hello as VisualComp } from '../visuals/Hello';
import { TextField } from '../visuals/TextField';
import { StoreState } from '../types';
import { defaultName, updateName, Action } from '../actions';

export interface Props {
  name: string;
  onSubmit: Function;
  onEmptySubmit: Function;
}

const Wrapper = styled.div``;

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
    <Wrapper>
      <VisualComp name={props.name} />
      <TextField {...{ onSubmit }} />
    </Wrapper>
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
