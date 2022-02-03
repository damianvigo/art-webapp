import styled from 'styled-components';

const ErrorsStyled = styled.p`
  display: inline-block;
  width: 100%;
  font-size: var(--step--1);
  color: var(--first-color);
  background-color: var(--second-color);
  transition: all 0.5s ease-in-out;
`;

const MessageErrorForm = ({
  errorName,
  errorEmail,
  errorSubject,
  errorComment,
}) => {
  return (
    <>
      {errorName ? (
        <ErrorsStyled>{errorName}</ErrorsStyled>
      ) : errorEmail ? (
        <ErrorsStyled>{errorEmail}</ErrorsStyled>
      ) : errorSubject ? (
        <ErrorsStyled>{errorSubject}</ErrorsStyled>
      ) : errorComment ? (
        <ErrorsStyled>{errorComment}</ErrorsStyled>
      ) : (
        ''
      )}
    </>
  );
};

export default MessageErrorForm;
