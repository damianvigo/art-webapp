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
    color: var(--first-color);
    font-weight: bold;
    font-size: var(--step-0);
    text-decoration: none;
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
