import React from 'react';
import styled from 'styled-components';

const MessageStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  width: 100%;
  padding: 1rem;
  margin-top: ${({ marginTop }) => marginTop};
  background-color: var(--second-color);
  color: var(--third-color);
  grid-column: span 2;
  text-align: center;
  p {
    font-size: var(--step-2);
  }
`;

const Message = ({ msg }) => {
  return (
    <MessageStyled>
      <p>{msg}</p>
    </MessageStyled>
  );
};

export default Message;
