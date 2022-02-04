import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SvgFacebook from '../assets/icon/elements/SvgFacebook';
import SvgInstagram from '../assets/icon/elements/SvgInstagram';

const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: var(--text-color);
  font-weight: 400;
  width: 100%;
  margin-bottom: var(--header-height);
  background-color: var(--third-alpha-color);
  .dvdev {
    display: inline-block;
    color: var(--text-color);
    margin: 0 5px;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    text-decoration: underline;
    &:hover {
      transform: scale(1.1);
      opacity: 0.8;
    }
  }
  .heart {
    display: inline-block;
    width: var(--step--1);
    height: var(--step--1);
    animation: pulse 0.7s infinite both;
  }

  @keyframes pulse {
    0% {
      transform: scale(0.9);
    }
    50% {
      transform: scale(1.1);
    }

    100% {
      transform: scale(0.9);
    }
  }

  p {
    font-size: var(--step--2);
  }

  @media screen and (min-width: 1024px) {
    margin-bottom: 0;
    p {
      font-size: var(--step--1);
    }
  }
`;

const ContainerIcons = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    svg {
      :hover {
        filter: sepia(0.8);
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <article>
        <ContainerIcons>
          <div>
            <SvgFacebook />
            <SvgInstagram />
          </div>
          <p>Adriana Stigliano © 2022 </p>
        </ContainerIcons>
      </article>
      <article>
        <p>
          <span>Desarrollado con </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#d22809"
            className="heart"
          >
            <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
          </svg>
          <span> por </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M24 10.935v2.131l-10 4.934v-2.23l7.64-3.77-7.64-3.779v-2.221l10 4.935zm-24 0v2.131l10 4.934v-2.23l-7.64-3.77 7.64-3.779v-2.221l-10 4.935z" />
          </svg>
          <Link to="/">
            <span className="dvdev">
              <b>dvdev</b>
            </span>
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z" />
          </svg>
        </p>
      </article>
    </FooterStyled>
  );
};

export default Footer;
