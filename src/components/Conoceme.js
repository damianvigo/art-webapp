import styled from 'styled-components';
import adri from '../assets/img/adri-perfil-1.jpg';
import ragnar from '../assets/img/resplandor.jpg';

const ConocemeStyledBackground = styled.div`
  background-color: var(--third-alpha-color);
  img {
    border: medium solid var(--black-color);
    /* filter: grayscale(1); */
    /* filter: sepia(1); */
  }
`;

const ConocemeStyled = styled.article``;

const FlipCard = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  max-width: 300px;
  min-height: 300px;
  margin: 0 auto;
  perspective: 10rem;
  cursor: pointer;
  transform-style: preserve-3d;
  transition: transform 1s ease-in-out;
  &:hover {
    transform: rotateY(180deg);
  }
`;

const FlipFace = styled.figure`
  position: absolute;
  width: 100%;
  height: inherit;
  backface-visibility: hidden;
  img {
    filter: brightness(1.2);
  }
`;

const ConocemeSectionStyled = styled.section`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 47%);
    justify-content: space-between;
    align-content: center;
    article:nth-child(3) {
      grid-column: span 2;
    }
  }

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 30%);
    justify-content: space-between;
    align-content: center;
    article:nth-child(3) {
      grid-column: span 1;
    }
  }
`;

const Conoceme = () => {
  return (
    <ConocemeStyledBackground>
      <ConocemeSectionStyled
        id="conoceme"
        className="conoceme section container full-lg-screen"
      >
        <ConocemeStyled className="text-center text-lg-left">
          <h2 className="conoceme-title text-right">¿Quién soy?</h2>
          <p className="conoceme-description text-right">
            Pinto al óleo y al acrílico. Mi temática es variada realizo
            paisajes, retratos, marinas y abstractos.
          </p>
          <p className="text-right">
            Amo pintar y lo hago en mi taller y también en espacios libres, para
            estar más en contacto con la naturaleza.
          </p>
        </ConocemeStyled>
        <article>
          <FlipCard>
            <FlipFace className="flip-face flip-front">
              <img src={adri} alt="Adriana Stigliano" />
            </FlipFace>
            <FlipFace className="flip-face flip-back">
              <img src={ragnar} alt="Adriana Stigliano" />
            </FlipFace>
          </FlipCard>
        </article>
        <article>
          <p>
            Trabaje toda mi vida como docente. Estuve en la escuela de Bellas
            Artes General Urquiza,
          </p>
          <p>
            En ella realicé proyectos de arte vinculados a la formación de niños
            y adultos
          </p>
          <p>
            Siempre me gustó dibujar y por tal motivo concurrí a diferentes
            seminarios de arte, donde aprendí la técnica del óleo y pintura
            hiperrealista.
          </p>
          <p>
            En la actualidad continúo con la actividad artística y expongo en
            diferentes espacios
          </p>
        </article>
      </ConocemeSectionStyled>
    </ConocemeStyledBackground>
  );
};

export default Conoceme;
