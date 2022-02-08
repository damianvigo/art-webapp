import Footer from '../components/Footer';
import Header from '../components/Header';
import { Helmet } from 'react-helmet';
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
    img: 'https://i.imgur.com/zm7i3JC.jpg',
    titleCard: 'SENTIR',
    description: 'Óleo sobre tela. 70 x 50 cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/WhdHJXi.jpg',
    titleCard: 'CALIDEZ',
    description: 'Óleo sobre tela. 70 x 60 cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/t60VFKZ.jpg',
    titleCard: 'ACTITUD ',
    description: 'Oleo sobre tela. 80 x 60 cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/PYtrxbU.jpg',
    titleCard: 'LUZ',
    description: 'Óleo sobre tela. 80 x 60 cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/NjJ00Po.jpg',
    titleCard: 'RESPLANDOR',
    description: 'Óleo sobre tela. 70 x 80 cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/5sOiYiA.jpg',
    titleCard: 'MORENA',
    description: 'Óleo sobre tela. 50 x 70 cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/crXbgFR.jpg',
    titleCard: 'EL VUELO',
    description: 'Óleo sobre tela. 50 x 70 cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/n1mhvX5.jpg',
    titleCard: 'VERDOR',
    description: 'Óleo sobre tela. 60 x 80 cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/643flwf.jpg',
    titleCard: 'PANDEMIA',
    description: 'Óleo sobre tela. 50 x 70 cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/baxhvS3.jpg',
    titleCard: 'MEDICHI',
    description: 'Óleo sobre tela. 60 x 80 cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/VXSCI2m.jpg',
    titleCard: 'GUERRA',
    description: 'Óleo sobre tela. 60 x 70 cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/ETq2geR.jpg',
    titleCard: 'CLARIDAD',
    description: 'Óleo sobre tela. 50 x 60 cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/NvT8PTn.jpg',
    titleCard: 'CALMA',
    description: 'Óleo sobre tela. 80 x 70 cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/Ww2q1iT.jpg',
    titleCard: 'LA VIDA',
    description: 'Óleo sobre tela. 80 x 70 cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/Dtgel1T.jpg',
    titleCard: 'ALMA MÍA',
    description: 'Óleo sobre tela. 70 x 80 cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/lypNC1e.jpg',
    titleCard: 'MIRADAS',
    description: 'Óleo sobre tela. 60 x 80 cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/dk1DS8Z.jpg',
    titleCard: 'RESPLANDOR 2',
    description: 'Óleo sobre tela. 60 x 60 cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/GObvzsm.jpg',
    titleCard: 'PASION',
    description: 'Óleo sobre tela. 70 x 90 cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/Jxvte43.jpg',
    titleCard: 'SUR',
    description: 'Óleo sobre tela. 60 x 50 cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/8uIVkfz.jpg',
    titleCard: 'PAZ',
    description: 'Óleo sobre tela. 60 x 60 cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/Veoqbq1.jpg',
    titleCard: 'LLEGADA',
    description: 'Óleo sobre tela. 60 x 80 cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/3rvxNOb.jpg',
    titleCard: 'SERENIDAD',
    description: 'Óleo sobre tela. 70 x 80 cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/kEMCZjO.jpg',
    titleCard: 'LA VERDAD',
    description: 'Óleo sobre tela. 50 x 70 cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/toAwoXy.jpg',
    titleCard: 'DESPERTAR',
    description: 'Óleo sobre tela. 80 x 60 cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/Ly9Yljh.jpg',
    titleCard: 'RENACER',
    description: 'Óleo sobre tela. 60 x 70 cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/RUygrVE.jpg',
    titleCard: 'MI AMOR',
    description: 'Óleo sobre tela. 60 x 70 cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/t22Lsxa.jpg',
    titleCard: 'MIRADAS',
    description: 'Óleo sobre tela. 80 x 60 cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/g9z8EVi.jpg',
    titleCard: 'RECUERDOS',
    description: 'Óleo sobre tela. 60 x 80 cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/d3NLSCg.jpg',
    titleCard: 'DIGNIDAD',
    description: 'Óleo sobre tela. 80 x 60 cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/udv7WYm.jpg',
    titleCard: 'DIGNIDAD 2',
    description: 'Óleo sobre tela. 70 x 50 cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/YkICwCn.jpg',
    titleCard: 'SOMETIDA',
    description: 'Óleo sobre tela. 60 x 60 cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/Xl9zC9F.jpg',
    titleCard: 'LIBERACION',
    description: 'Óleo sobre tela. 80 x 60 cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/ZV3OBWe.jpg',
    titleCard: 'DIGNIDAD 4',
    description: 'Óleo sobre tela. 50 x 70 cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/ctIfKlI.jpg',
    titleCard: 'MIRADAS 6',
    description: 'Óleo sobre tela. 80 x 60 cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/qsIjztc.jpg',
    titleCard: 'DULZURA',
    description: 'Óleo sobre tela. 50 x 50 cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/ecgGWbz.jpg',
    titleCard: 'AROMA',
    description: 'Óleo sobre tela. 60 x 70 cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/Q1myxoF.jpg',
    titleCard: 'PODER',
    description: 'Óleo sobre tela. 60 x 80 cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/xnHiLsr.jpg',
    titleCard: 'VÍNCULOS',
    description: 'Óleo sobre tela. 60 x 80 cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/qhXECRS.jpg',
    titleCard: 'EVALUACIÓN',
    description: 'Óleo sobre tela. 50 x 70 cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/HWhhrlP.jpg',
    titleCard: 'RAGNAR',
    description: 'Óleo sobre tela. 70 x 80 cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/V5lh3Wv.jpg',
    titleCard: 'MI SENTIR',
    description: 'Óleo sobre tela. 60 x 70 cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/9ho3VpQ.jpg',
    titleCard: 'ANHELO',
    description: 'Óleo sobre tela. 50 x 70 cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/0LwNJIU.jpg',
    titleCard: 'VIDA',
    description: 'Óleo sobre tela. 50 x 60 cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/V35IIqK.jpg',
    titleCard: 'SENSIBILIDAD',
    description: 'Óleo sobre tela. 50 x 60 cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/tyJYdo7.jpg',
    titleCard: 'El ABRAZO',
    description: 'Óleo sobre tela. 50 x 60 cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/Jjirsbg.jpg',
    titleCard: 'PLACER',
    description: 'Óleo sobre tela. 70 x 80 cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/oes8FxG.jpg',
    titleCard: 'PARA VOS',
    description: 'Óleo sobre tela. 50 x 70 cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/P71bs32.jpg',
    titleCard: 'AROMA',
    description: 'Óleo sobre tela. 60 x 70 cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/bYzmSVs.jpg',
    titleCard: 'LEALTAD',
    description: 'Óleo sobre tela. 60 x 70 cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/mxS5BBj.jpg',
    titleCard: 'EN PALACIO',
    description: 'Óleo sobre tela. 80 x 70 cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/wiGrmK5.jpg',
    titleCard: 'VOLARE',
    description: 'Óleo sobre tela. 70 x 90 cm',
    animateOnScroll: 'fade-up',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/3tzwPk6.jpg',
    titleCard: 'RESPLANDOR',
    description: 'Óleo sobre tela. 70 x 80 cm',
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
    h2 {
      margin-top: 1rem;
      font-size: var(--step-1);
    }
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
    background-color: ${({ theme }) => {
      console.log(theme);
      if (theme === 'dark') {
        return 'var(--white-color)';
      } else {
        return 'var(--high-black-alpha-color)';
      }
    }};
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
      cursor: pointer;
      height: 300px;
      object-fit: cover;
      object-position: 50% 50%;
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
      <Helmet>
        <title>Mis Obras</title>
        <meta
          name="description"
          content="En esta sección estás véras mis pinturas al óleo"
        />
      </Helmet>
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
