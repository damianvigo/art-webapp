import styled from 'styled-components';
import tango from '../assets/img/img-5.jpg';
import ragnar from '../assets/img/img-6.jpg';

const CardsHomeSection = styled.section`
  background-color: var(--first-alpha-color);
  h3 {
    padding-top: 5rem;
    padding-bottom: 2rem;
    border-bottom: thin solid var(--black-color);
    margin: 0 auto;
  }
`;

const CardsHome = styled.section`
  text-align: center;
  article {
    width: 100%;
    min-width: 200px;
    max-width: 400px;
    margin: 2rem auto;
    border: thin solid var(--black-color);
  }
  figure {
    background-color: var(--high-black-alpha-color);
    img {
      width: 100%;
      transition: opacity 0.5s ease-out;
      :hover {
        opacity: 0.5;
      }
    }
  }

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 45%);
    justify-content: space-around;
    align-content: center;
    img {
      height: 400px;
      object-fit: cover;
      object-position: 50% 50%;
    }
    img:hover {
    }
    h3 {
      grid-column: span 2;
    }
  }
`;

const CardsHomeDescription = styled.p`
  padding: 1rem;
`;

const PinturasHome = () => {
  return (
    <CardsHomeSection className="section">
      <CardsHome className="container full-lg-screen">
        <h3 className="text-center">Mis Pinturas destacadas</h3>
        <article
          data-aos-duration="3000"
          data-aos="fade-down-right"
          className="box-shadow-card"
        >
          <a href="">
            <figure>
              <img src={ragnar} alt="" />
            </figure>
          </a>
          <h4>Ragnar</h4>
          <CardsHomeDescription>
            Oleo sobre tela. 80 x 70cm
          </CardsHomeDescription>
        </article>
        <article
          data-aos-duration="3000"
          data-aos="fade-up-right"
          className="box-shadow-card"
        >
          <a href="">
            <figure>
              <img src={tango} alt="" />
            </figure>
          </a>
          <h4>Tango</h4>
          <CardsHomeDescription>
            Oleo sobre tela. 80 x 70cm
          </CardsHomeDescription>
        </article>
      </CardsHome>
    </CardsHomeSection>
  );
};

export default PinturasHome;
