import { useContext } from 'react';
import styled from 'styled-components';
import SvgMoon from '../assets/icon/elements/SvgMoon';
import SvgSun from '../assets/icon/elements/SvgSun';
import ThemeContext from '../context/ThemeContext';

const Btn = styled.button`
  position: fixed;
  cursor: pointer;
  background-color: var(--high-black-alpha-color);
  svg {
    position: fixed;
    width: 4rem;
    height: 4rem;
    left: 1vw;
    bottom: 1vh;
    transition: opacity 0.5s ease-out;
    :hover {
      opacity: 0.8;
    }
    @media screen and (max-width: 1024px) {
      bottom: 9vh;
    }
  }
`;

const BtnDarkMode = () => {
  const { handleTheme, btnSvg } = useContext(ThemeContext);
  return (
    <>
      {btnSvg ? (
        <Btn>
          <SvgSun onClick={handleTheme} />
        </Btn>
      ) : (
        <Btn>
          <SvgMoon onClick={handleTheme} />
        </Btn>
      )}
    </>
  );
};

export default BtnDarkMode;
