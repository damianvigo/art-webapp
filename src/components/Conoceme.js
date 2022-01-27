import styled from 'styled-components';
import adri from '../assets/img/adri-perfil-1.jpg';

const ConocemeStyledBackground = styled.div`
  background-color: var(--third-alpha-color);
  img {
    border: medium solid var(--black-color);
    /* filter: grayscale(1); */
    /* filter: sepia(1); */
  }
`;

const ConocemeStyled = styled.article``;

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
          <figure>
            <img src={adri} alt="Adriana Stigliano" />
          </figure>
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
