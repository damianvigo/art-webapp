import styled from 'styled-components';
import tango from '../assets/img/img-5.jpg';
import ragnar from '../assets/img/img-6.jpg';

const CardsHomeSection = styled.section`
  background-color: var(--first-alpha-color);
`;

const CardsHome = styled.section`
  text-align: center;
  article {
    margin: 2rem 0;
    border: thin solid #000;
  }
  img {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 40%);
    justify-content: space-around;
    align-content: center;
    img {
      height: 400px;
      object-fit: cover;
      object-position: 50% 50%;
      object-position: left top;
    }
  }
`;

const CardsHomeDescription = styled.figcaption`
  padding: 1rem;
`;

const PinturasHome = () => {
  return (
    <CardsHomeSection className="section">
      <h3 className="text-center">Mis Pinturas destacadas</h3>
      <CardsHome className="container full-lg-screen">
        <article>
          <figure>
            <img src={tango} alt="" />
            <CardsHomeDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              tempore quaerat, incidunt consectetur alias labore perspiciatis
              illo reiciendis, voluptas id explicabo a ea iure consequatur
              architecto, ducimus deleniti enim rem.
            </CardsHomeDescription>
          </figure>
        </article>
        <article>
          <figure>
            <img src={ragnar} alt="" />
            <CardsHomeDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              tempore quaerat, incidunt consectetur alias labore perspiciatis
              illo reiciendis, voluptas id explicabo a ea iure consequatur
              architecto, ducimus deleniti enim rem.
            </CardsHomeDescription>
          </figure>
        </article>
      </CardsHome>
    </CardsHomeSection>
  );
};

export default PinturasHome;
