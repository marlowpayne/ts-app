import React from 'react';
import styled from 'styled-components';

export interface Props {
  name?: string;
  enthusiasmLevel?: number;
}

const Wrapper = styled.div`
  text-align: center;
  margin: 20px;
  font-size: 48px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

export const Hello = ({ name = 'World', enthusiasmLevel = 1 }: Props) => {
  const getExclamationMarks = (numChars: number) => {
    return Array(numChars + 1).join('!');
  };

  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <Wrapper>
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
    </Wrapper>
  );
};
