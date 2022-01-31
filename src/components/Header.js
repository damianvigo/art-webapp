import { Link } from 'react-router-dom';
import HamburgerButton from './HamburgerButton';
import Nav from './Nav';
import styled from 'styled-components';
import { useState } from 'react';

const HeaderStyled = styled.header`
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 999;
  padding: 0.5rem;
  width: 100%;
  height: var(--header-height);
  background-color: var(--second-color);

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
    position: sticky;
    top: 0;
    height: calc(var(--header-height) - 1rem);
  }
`;

const Logo = styled.div`
  a {
    background: #f4c4f3; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #fc67fa,
      #f4c4f3
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #fc67fa,
      #f4c4f3
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    font-size: var(--step-0);
    text-decoration: none;
    -ms-background-clip: text;
    -moz-background-clip: text;
    -webkit-background-clip: text;
    background-clip: text;
    -ms-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
    transition: opacity 0.2s ease-in-out;
    &:hover {
      opacity: 0.85;
    }
  }
`;

const Header = () => {
  const [showChangeBtn, setChangeBtn] = useState(false);
  const showNavMenu = showChangeBtn;

  return (
    <HeaderStyled>
      <section className="container">
        <Logo>
          <Link to="/">Adriana Stigliano</Link>
        </Logo>
        <HamburgerButton
          showChangeBtn={showChangeBtn}
          setChangeBtn={setChangeBtn}
        />
        <Nav
          showChangeBtn={showChangeBtn}
          setChangeBtn={setChangeBtn}
          showNavMenu={showNavMenu}
        />
      </section>
    </HeaderStyled>
  );
};

export default Header;
