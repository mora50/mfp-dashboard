import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: #000;
  color: #fff;
  font-size: 18px;
`;

function TestStyled({ children }) {
  return <Button>{children}</Button>;
}

export default TestStyled;
