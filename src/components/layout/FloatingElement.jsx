import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 5px 10px 19px;
  padding: 24px;
  background-color: #1a2029;
  border-radius: 16px;
  border: 1px solid #303b4b;
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
