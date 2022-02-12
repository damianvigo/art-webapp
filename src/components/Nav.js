import { useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const NavStyled = styled.nav`
  position: fixed;
  left: 0;
  bottom: var(--header-height);
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--second-color);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.5s ease;

  a {
    padding: 1rem;
    font-size: var(--step-0);
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    color: var(--first-color);
    cursor: pointer;
    &:hover {
      color: var(--second-color);
      background-color: var(--first-color);
    }
  }

  &.is-active {
    opacity: 1;
    pointer-events: auto;
  }

  @media screen and (min-width: 1024px) {
    position: static;
    width: auto;
    flex-direction: row;
    opacity: 1;
    pointer-events: auto;
    a {
      padding: 0 1rem;
      &:hover {
        color: var(--white-color);
        background-color: transparent;
      }
      &.active {
        color: var(--white-color);
        font-weight: bold;
      }
      &:last-child {
        padding-right: 0;
      }
    }
  }
`;

const Nav = ({ showNavMenu, showChangeBtn, setChangeBtn }) => {
  let btnMenu = useRef();

  const closeMenu = (e) => {
    if (btnMenu) {
      setChangeBtn(!showChangeBtn);
      e.target.classList.add('active');
    }
  };

  const path = useLocation();
  const { pathname } = path;

  return (
    <NavStyled ref={btnMenu} className={`${showNavMenu && 'is-active'}`}>
      {pathname === '/' ? (
        <Link
          onClick={closeMenu}
          activeClass="active"
          to="conoceme"
          offset={-50}
        >
          Conoceme
        </Link>
      ) : (
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/"
        >
          Conoceme
        </NavLink>
      )}

      {/*   <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/">
        Conoceme
      </NavLink> */}

      <NavLink
        className={({ isActive }) => (isActive ? 'active' : '')}
        to="/mis-obras"
        onClick={() =>
          pathname === '/mis-obras' ? setChangeBtn(!showChangeBtn) : null
        }
      >
        Mis obras
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'active' : '')}
        to="/exposiciones"
        onClick={() =>
          pathname === '/exposiciones' ? setChangeBtn(!showChangeBtn) : null
        }
      >
        Exposiciones
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'active' : '')}
        to="/contacto"
        onClick={() =>
          pathname === '/contacto' ? setChangeBtn(!showChangeBtn) : null
        }
      >
        Contacto
      </NavLink>
    </NavStyled>
  );
};

export default Nav;
