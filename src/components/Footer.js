import styled from 'styled-components';

const FooterStyled = styled.footer`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  color: var(--text-color);
  font-weight: 700;
  width: 100%;
  margin-bottom: var(--header-height);
  background-color: var(--third-alpha-color);
  p {
    font-size: var(--step--0);
  }

  @media screen and (min-width: 1024px) {
    margin-bottom: 0;
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <article>
        <p>Adriana Stigliano © 2022 </p>
      </article>
      <article>
        <p>Desarrollado con por @dvdev</p>
      </article>
    </FooterStyled>
  );
};

export default Footer;
