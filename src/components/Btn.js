import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const BtnStyled = styled.button`
  /* General Styles */
  display: inline-block;
  position: relative;
  top: ${({ topBtn }) => topBtn};
  width: clamp(200px, 20vw, 300px);
  padding: 1rem;
  background-color: var(--second-alpha-color);
  color: var(--first-color);
  font-size: var(--step-0);
  text-align: center;
  font-weight: 700;
  cursor: pointer;
  border: none;
  border-radius: 0.5rem;
  overflow: hidden;
  transition: all 0.3s ease;
  span {
    position: relative;
    z-index: 2;
    transition: all 0.3s ease;
  }
  /* effect curtain */
  ${(props) =>
    props.one &&
    css`
      &::after {
        content: '';
        position: absolute;
        top: -60px;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--second-alpha-color);
        z-index: 1;
        transition: all 0.3s ease-in-out;
      }
      &:hover::after {
        top: 0;
      }
    `}
  /* effect border-right */
  ${(props) =>
    props.two &&
    css`
      &::after {
        content: '';
        width: 130%;
        position: absolute;
        z-index: 1;
        top: 0;
        left: -130%;

        border-bottom: 60px solid var(--second-color);
        border-right: 60px solid transparent;
        transition: all 0.3s ease-in-out;
      }
      &:hover::after {
        left: 0;
      }
    `}
    /* effect circle up */
    ${(props) =>
    props.three &&
    css`
      &::after {
        content: '';
        width: 100%;
        height: 200px;
        position: absolute;
        z-index: 1;
        top: -200px;
        left: 0;
        background-color: var(--second-color);

        transition: all 0.4s ease-in-out;
        border-radius: 0px 0px 300px 300px;
      }
      &:hover::after {
        top: 0;
      }
    `}
    /* effect circle */
    ${(props) =>
    props.four &&
    css`
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 1px;
        height: 1px;
        background-color: none;
        z-index: 1;
        transition: all 0.3s ease-in-out;
        border-radius: 50%;
        transform-origin: center;
      }
      &:hover::after {
        transform: scale(150);
        background-color: #cc1010;
      }
      &:hover {
        background-color: #960909;
      }
    `}
    /* text and arrow */
    ${(props) =>
    props.five &&
    css`
      &:hover {
        background-color: var(--second-color);
      }
      &:hover span {
        left: 5px;
      }
      height: 60px;
      &:hover .icono {
        left: calc(100% - 40px);
        opacity: 1;
      }
      .icono {
        display: flex;
        align-items: center;
        position: absolute;
        z-index: 2;
        top: 30%;
        left: -40px;
        transition: all 0.3s ease-in-out;
        opacity: 0;

        svg {
          fill: var(--first-color);
          width: 25px;
          height: 25px;
        }
      }
      span {
        transition: all 0.3s ease-in-out;
        position: absolute;
        width: 70%;
        left: 15%;
        top: 25%;
      }
    `}
    ${(props) =>
    props.six &&
    css`
      background: none;
      color: #000;
      &:hover rect {
        stroke-dashoffset: 0;
      }
      svg {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        fill: none;
        rect {
          width: 100%;
          height: 100%;
          stroke: #000;
          stroke-width: 10px;
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          transition: all 0.6s ease;
        }
      }
    `}
`;

const Btn = ({
  one,
  two,
  three,
  four,
  five,
  six,
  submit,
  enviar,
  topBtn,
  txt,
  route,
}) => {
  console.log(topBtn);
  console.log(route);

  return (
    <>
      <Link
        style={{ textDecoration: 'none' }}
        to={route ? '/contacto' : '/mis-obras'}
      >
        {one && (
          <BtnStyled one /* data-aos="fade-up" data-aos-duration="3000" */>
            <span>Contactame</span>
          </BtnStyled>
        )}
        {two && (
          <BtnStyled two data-aos="fade-up" data-aos-duration="3000">
            <span>Contactame</span>
          </BtnStyled>
        )}
        {three && (
          <BtnStyled three /* data-aos="fade-up" data-aos-duration="3000" */>
            <span>{txt}</span>
          </BtnStyled>
        )}
        {four && (
          <BtnStyled four /* data-aos="fade-up" data-aos-duration="3000" */>
            <span>Contactame</span>
          </BtnStyled>
        )}
        {six && (
          <BtnStyled six /* data-aos="fade-up" data-aos-duration="3000" */>
            <span>Contactame</span>
            <svg>
              <rect x="0" y="0" fill="none"></rect>
            </svg>
          </BtnStyled>
        )}
      </Link>
      {five && (
        <BtnStyled
          type={submit}
          five /* data-aos="fade-up" data-aos-duration="3000" */
          topBtn={topBtn}
        >
          <div className="icono">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#fff"
            >
              <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            </svg>
          </div>
          <span>{enviar}</span>
        </BtnStyled>
      )}
    </>
  );
};

export default Btn;
