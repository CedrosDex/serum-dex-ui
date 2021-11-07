import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 10px;
  padding: 20px;
  background-color: #1a2029;
  border-radius: 2%;
  border: 1px solid #303B4B;
`;

export default function FloatingElement({
  style = undefined,
  children,
  stretchVertical = false,
}) {
  return (
    <Wrapper
      style={{
        height: stretchVertical ? 'calc(100% - 10px)' : undefined,
        ...style,
      }}
    >
      {children}
    </Wrapper>
  );
}
