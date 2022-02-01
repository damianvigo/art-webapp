import Footer from '../components/Footer';
import Header from '../components/Header';
import { v4 as uuidv4 } from 'uuid';
import CardsMisObras from '../components/CardsMisObras';
import styled from 'styled-components';

const initialDbMisObras = [
  {
    id: uuidv4(),
    title: 'Mis Pinturas destacadas',
    img: 'https://placeimg.com/400/400/animals',
    titleCard: 'Animals',
    description: 'Oleo sobre tela. 80 x 70cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://placeimg.com/400/400/architecture',
    titleCard: 'Architecture',
    description: 'Oleo sobre tela. 80 x 70cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://placeimg.com/400/400/nature',
    titleCard: 'Nature',
    description: 'Oleo sobre tela. 80 x 70cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://placeimg.com/400/400/people',
    titleCard: 'People',
    description: 'Oleo sobre tela. 80 x 70cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://placeimg.com/400/400/tech',
    titleCard: 'Tech',
    description: 'Oleo sobre tela. 80 x 70cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://placeimg.com/400/400/grayscale',
    titleCard: 'Grayscale',
    description: 'Oleo sobre tela. 80 x 70cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://placeimg.com/400/400/sepia',
    titleCard: 'Sepia',
    description: 'Oleo sobre tela. 80 x 70cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://placeimg.com/400/400/animals',
    titleCard: 'Animals',
    description: 'Oleo sobre tela. 80 x 70cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://placeimg.com/400/400/architecture',
    titleCard: 'Architecture',
    description: 'Oleo sobre tela. 80 x 70cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://placeimg.com/400/400/nature',
    titleCard: 'Nature',
    description: 'Oleo sobre tela. 80 x 70cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://placeimg.com/400/400/people',
    titleCard: 'People',
    description: 'Oleo sobre tela. 80 x 70cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://placeimg.com/400/400/tech',
    titleCard: 'Tech',
    description: 'Oleo sobre tela. 80 x 70cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
];

const TitleMisObras = styled.div`
  margin: 0 auto;
  border-bottom: thin solid var(--black-color);
  padding-top: 6rem;
  padding-bottom: 6rem;
  background-color: var(--third-alpha-color);
`;

const MisObrasSection = styled.section`
  background-color: var(--first-alpha-color);
  border-top: thin solid var(--first-color);
  border-bottom: thin solid var(--first-color);
  padding: 7rem 0;
`;

const MisObrasContainer = styled.div`
  article {
    width: 100%;
    max-width: 400px;
    min-width: 200px;
    margin: 2rem auto;
    border: thin solid var(--black-color);
    text-align: center;
    p {
      font-size: var(--step--2);
    }
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 3rem;
`;

const MisObras = () => {
  return (
    <>
      <Header />
      <main>
        <TitleMisObras>
          <h1 className="text-center">Mis Obras</h1>
        </TitleMisObras>
        <MisObrasSection className="section">
          <MisObrasContainer className="container">
            {initialDbMisObras.length > 0
              ? initialDbMisObras.map((el) => (
                  <CardsMisObras key={el.id} el={el} />
                ))
              : 'No hay datos'}
          </MisObrasContainer>
        </MisObrasSection>
      </main>
      <Footer />
    </>
  );
};

export default MisObras;
