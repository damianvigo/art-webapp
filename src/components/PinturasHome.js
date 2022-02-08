import { useState } from 'react';
import { useModal } from '../hooks/useModal';
import styled from 'styled-components';
import CardsHome from './CardsHome';
import Modal from './Modal';
import { v4 as uuidv4 } from 'uuid';
import Btn from './Btn';

const initialDbHome = [
  {
    id: uuidv4(),
    title: 'Mis Pinturas destacadas',
    img: 'https://i.imgur.com/HWhhrlP.jpg',
    titleCard: 'Ragnar',
    description: 'Oleo sobre tela. 70 x 80 cm',
    animateOnScroll: 'fade-down-right',
    animateonScrollDuration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/5rasjAM.jpg',
    titleCard: 'Desde mi sentir',
    description: 'Oleo sobre tela. 70 x 80 cm',
    animateOnScroll: 'fade-up-right',
    animateonScrollDuration: '3000',
  },
];

const CardsHomeSection = styled.section`
  background-color: var(--first-alpha-color);
  border-bottom: thin solid var(--first-color);
  h3 {
    padding: 5rem 0;
    margin: 0 auto;
  }
`;

const ContainerBtn = styled.div`
  text-align: center;
  padding: 4rem;
`;

const CardsHomeStyled = styled.section`
  text-align: center;
  article {
    width: 100%;
    min-width: 200px;
    max-width: 400px;
    margin: 2rem auto;
    border: thin solid var(--text-color);
    border: ${({ theme }) => {
      // console.log(theme);
      if (theme === 'dark') {
        return 'thin solid var(--white-color)';
      } else {
        return;
      }
    }};
  }
  figure {
    background-color: ${({ theme }) => {
      console.log(theme);
      if (theme === 'dark') {
        return 'var(--white-color)';
      } else {
        return 'var(--text-color)';
      }
    }};
    img {
      width: 100%;
      transition: opacity 0.5s ease-out;
      :hover {
      }
    }
  }

  @media screen and (min-width: 830px) {
    display: grid;
    grid-template-columns: repeat(2, 45%);
    justify-content: space-around;
    align-content: center;
    img {
      cursor: pointer;
      height: 400px;
      object-fit: cover;
      object-position: 50% 50%;
    }
    img:hover {
      opacity: 0.5;
    }
    h3 {
      grid-column: span 2;
    }
    hr {
      grid-column: span 2;
    }
  }
`;

const PinturasHome = ({ theme }) => {
  const [idModal, setIdModal] = useState('');
  const [isOpen, isOpenModal, closeModal] = useModal(false);
  return (
    <CardsHomeSection className={`${theme} section`}>
      <CardsHomeStyled theme={theme} className="container full-lg-screen">
        <h3 className="text-center">Pinturas destacadas</h3>
        <hr style={{ width: '100%', maxWidth: '800px' }} />
        <CardsHome
          dbHome={initialDbHome}
          setIdModal={setIdModal}
          isOpenModal={isOpenModal}
        />
      </CardsHomeStyled>
      <ContainerBtn>
        <Btn to="/mis-obras" three txt="ver más" />
      </ContainerBtn>
      {idModal && (
        <Modal
          idModal={idModal}
          dbHome={initialDbHome}
          closeModal={closeModal}
          isOpen={isOpen}
        />
      )}
    </CardsHomeSection>
  );
};

export default PinturasHome;
