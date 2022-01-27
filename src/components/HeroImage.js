import styled from 'styled-components';
import img from '../assets/img/img-12.jpg';
import Btn from './Btn';

const HeroImageStyled = styled.article`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 60%;
  background-attachment: fixed;
`;

const HeroImageOpacity = styled.aside`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: var(--black-alpha-color);
`;

const HeroImageTitle = styled.h1`
  color: var(--white-color);
  font-weight: 900;
`;

const HeroImageSubtitle = styled.h2`
  color: var(--white-color);
  font-weight: 400;
`;

const HeroImageContent = styled.div`
  h1,
  h2 {
    margin-bottom: var(--step-1);
  }
`;

const HeroImage = () => {
  return (
    <>
      <HeroImageStyled>
        <HeroImageOpacity>
          <HeroImageContent>
            <HeroImageTitle className="box-shadow-down">
              ¡Hola! Soy Adriana Stigliano
            </HeroImageTitle>
            <HeroImageSubtitle>Artista Plástica</HeroImageSubtitle>
            <Btn />
          </HeroImageContent>
        </HeroImageOpacity>
      </HeroImageStyled>
    </>
  );
};

export default HeroImage;
