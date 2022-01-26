import styled from 'styled-components';
import adri from '../assets/img/adri-perfil-1.jpg';

const ConocemeStyledBackground = styled.div`
  background-color: var(--third-alpha-color);
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
          <h2 className="conoceme-title">Quien Soy?</h2>
          <p className="conoceme-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta,
            mollitia ipsa. Doloremque quibusdam delectus aperiam veniam
            laudantium ipsum nostrum possimus asperiores. Dolorem aspernatur,
            totam exercitationem rem libero veritatis ex itaque.
          </p>
        </ConocemeStyled>
        <article>
          <figure>
            <img src={adri} alt="Adriana Stigliano" />
          </figure>
        </article>
        <article>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
            harum, sed quos quod quidem maxime delectus ullam eligendi ex
            debitis, omnis laudantium! Perferendis tempore sunt voluptates?
            Fugiat reprehenderit nulla quaerat.
          </p>
        </article>
      </ConocemeSectionStyled>
    </ConocemeStyledBackground>
  );
};

export default Conoceme;
