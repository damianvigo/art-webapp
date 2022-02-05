import Footer from '../components/Footer';
import Header from '../components/Header';
import { v4 as uuidv4 } from 'uuid';
import CardsMisObras from '../components/CardsMisObras';
import styled, { css } from 'styled-components';
import { useContext, useState } from 'react';
import { useModal } from '../hooks/useModal';
import Modal from '../components/Modal';
import Message from '../components/Message';
import ThemeContext from '../context/ThemeContext';

const initialDbMisObras = [
  {
    id: uuidv4(),
    title: 'Mis Pinturas destacadas',
    img: 'https://i.imgur.com/3rvxNOb.jpg',
    titleCard: 'Animals',
    description: 'Oleo sobre tela. 80 x 70cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/kEMCZjO.jpg',
    titleCard: 'Architecture',
    description: 'Oleo sobre tela. 80 x 70cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/oes8FxG.jpg',
    titleCard: 'Nature',
    description: 'Oleo sobre tela. 80 x 70cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/y3QGWUW.jpg',
    titleCard: 'People',
    description: 'Oleo sobre tela. 80 x 70cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/zm7i3JC.jpg',
    titleCard: 'Tech',
    description: 'Oleo sobre tela. 80 x 70cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/WhdHJXi.jpg',
    titleCard: 'Grayscale',
    description: 'Oleo sobre tela. 80 x 70cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/t60VFKZ.jpg',
    titleCard: 'Sepia',
    description: 'Oleo sobre tela. 80 x 70cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/PYtrxbU.jpg',
    titleCard: 'Animals',
    description: 'Oleo sobre tela. 80 x 70cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/crXbgFR.jpg',
    titleCard: 'Architecture',
    description: 'Oleo sobre tela. 80 x 70cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/bYzmSVs.jpg',
    titleCard: 'Nature',
    description: 'Oleo sobre tela. 80 x 70cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/mxS5BBj.jpg',
    titleCard: 'People',
    description: 'Oleo sobre tela. 80 x 70cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/Jjirsbg.jpg',
    titleCard: 'Tech',
    description: 'Oleo sobre tela. 80 x 70cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/ecgGWbz.jpg',
    titleCard: 'Tech',
    description: 'Oleo sobre tela. 80 x 70cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/udv7WYm.jpg',
    titleCard: 'Tech',
    description: 'Oleo sobre tela. 80 x 70cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/P71bs32.jpg',
    titleCard: 'Tech',
    description: 'Oleo sobre tela. 80 x 70cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/9ho3VpQ.jpg',
    titleCard: 'Tech',
    description: 'Oleo sobre tela. 80 x 70cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/GObvzsm.jpg',
    titleCard: 'Tech',
    description: 'Oleo sobre tela. 80 x 70cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/Ww2q1iT.jpg',
    titleCard: 'Tech',
    description: 'Oleo sobre tela. 80 x 70cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/NvT8PTn.jpg',
    titleCard: 'Tech',
    description: 'Oleo sobre tela. 80 x 70cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/VXSCI2m.jpg',
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
    border: thin solid var(--text-color);
    text-align: center;
    ${({ theme }) =>
      theme === 'dark' &&
      css`
        border: thin solid var(--white-color);
      `}
    p {
      font-size: var(--step--2);
    }
  }
  figure {
    background-color: var(--high-black-alpha-color);
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
      object-position: 0 50%;
      transition: opacity 0.5s ease-out;
    }
  }
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 3rem;

  @media screen and (min-width: 600px) {
    article figure img {
      height: 300px;
      object-fit: cover;
      object-position: 0 20%;
      :hover {
        opacity: 0.5;
      }
    }
  }
`;

const MisObras = () => {
  const [idModal, setIdModal] = useState('');
  const [isOpen, isOpenModal, closeModal] = useModal(false);

  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Header />
      <main className={theme}>
        <TitleMisObras>
          <h1 className="text-center">Mis Obras</h1>
        </TitleMisObras>
        <MisObrasSection className="section">
          <MisObrasContainer theme={theme} className="container">
            {initialDbMisObras.length > 0 ? (
              initialDbMisObras.map((el) => (
                <CardsMisObras
                  key={el.id}
                  el={el}
                  isOpenModal={isOpenModal}
                  setIdModal={setIdModal}
                />
              ))
            ) : (
              <Message msg={`Error al cargar las imágenes`} />
            )}
          </MisObrasContainer>
        </MisObrasSection>
        {isOpen && (
          <Modal
            isOpen={isOpen}
            closeModal={closeModal}
            idModal={idModal}
            dbHome={initialDbMisObras}
          />
        )}
      </main>
      <Footer theme={theme} />
    </>
  );
};

export default MisObras;
