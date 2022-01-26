import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
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
    }
  };

  return (
    <NavStyled ref={btnMenu} className={`${showNavMenu && 'is-active'}`}>
      <Link onClick={closeMenu} activeClass="active" to="conoceme" offset={-50}>
        Conoceme
      </Link>
      <NavLink
        className={({ isActive }) => (isActive ? 'active' : '')}
        to="/mis-obras"
      >
        Mis obras
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'active' : '')}
        to="/contacto"
      >
        Contacto
      </NavLink>
    </NavStyled>
  );
};

export default Nav;
