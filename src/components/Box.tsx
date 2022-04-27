import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

interface BoxProps {
  children: React.ReactNode;
}

const Box = ({children}: BoxProps): JSX.Element => {
  return <Container>{children}</Container>;
};

export default Box;
