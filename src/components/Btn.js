import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BtnStyled = styled.button`
  border-radius: 0.5rem;
  padding: 1rem;
  display: inline-block;
  width: clamp(200px, 20vw, 400px);
  font-size: var(--step-0);
  font-weight: bold;
  text-align: center;
  color: var(--second-color);
  background-color: var(--first-color);
  outline: none;
  border: none;
`;

const Btn = () => {
  return (
    <>
      <Link to="/contacto">
        <BtnStyled className="btn">Contactame</BtnStyled>
      </Link>
    </>
  );
};

export default Btn;
