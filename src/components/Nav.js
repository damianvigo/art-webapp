import { NavLink } from 'react-router-dom';
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
    padding: 1.6rem;
    font-size: 2.4rem;
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
      &:last-child {
        padding-right: 0;
      }
    }
  }
`;

const Nav = ({ showNavMenu }) => {
  return (
    <NavStyled className={`${showNavMenu && 'is-active'}`}>
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/conoceme">Conoceme</NavLink>
      <NavLink to="/mis-obras">Mis obras</NavLink>
      <NavLink to="/contacto">Contacto</NavLink>
    </NavStyled>
  );
};

export default Nav;
