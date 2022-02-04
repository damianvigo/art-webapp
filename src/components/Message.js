import React from 'react';
import styled from 'styled-components';

const MessageStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${({ response }) => response || '10vh'};
  padding: 1rem;
  margin-top: ${({ marginTop }) => marginTop};
  background-color: var(--second-color);
  color: var(--third-color);
  grid-column: span 2;
  text-align: left;
  p {
    font-size: var(--step-0);
  }
`;

const Message = ({ msg, response }) => {
  return (
    <MessageStyled response={response}>
      <p>{msg}</p>
    </MessageStyled>
  );
};

export default Message;
