import React from 'react';
import styled from 'styled-components';
import { Hello } from '../containers/Hello';

const AppWrapper = styled.div`
  text-align: center;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
`;

export class App extends React.Component {
  render() {
    return (
      <AppWrapper className="App">
        <Hello/>
      </AppWrapper>
    );
  }
}
