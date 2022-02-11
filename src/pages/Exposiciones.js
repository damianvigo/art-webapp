import Footer from '../components/Footer';
import Header from '../components/Header';
import { v4 as uuidv4 } from 'uuid';
import { Helmet } from 'react-helmet';
import './Exposiciones.css';
import { useContext, useState } from 'react';
import ThemeContext from '../context/ThemeContext';
import ExpoCards from '../components/ExpoCards';
import { useModal } from '../hooks/useModal';
import Modal from '../components/Modal';

const dbExpo = [
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/mYVvsvu.jpg',
    titleCard: 'Arte en el Pasaje',
    description: 'Buenos Aires - 2022',
    fadeLeft: 'fade-left',
    duration: '2000',
    easing: 'ease-in',
  },

  {
    id: uuidv4(),
    img: 'https://i.imgur.com/S3ZDq6G.jpg',
    titleCard: 'Arte en el Pasaje',
    description: 'Buenos Aires - 2022',
    fadeRight: 'fade-right',
    duration: '2000',
    easing: 'ease-in',
  },

  {
    id: uuidv4(),
    img: 'https://i.imgur.com/PkIB8OG.jpg',
    titleCard: 'Arte en el Pasaje',
    description: 'Buenos Aires - 2021',
    zoomIn: 'zoom-in',
    duration: '2000',
  },

  {
    id: uuidv4(),
    img: 'https://i.imgur.com/iOuTQbN.jpg',
    titleCard: 'Arte en el Pasaje',
    description: 'Buenos Aires - 2021',
    zoomInLeft: 'zoom-in-left',
    duration: '2000',
  },

  {
    id: uuidv4(),
    img: 'https://i.imgur.com/HOmlvCk.jpg',
    titleCard: 'MEEBA',
    description: 'Buenos Aires - 2021',
    zoomInRight: 'zoom-in-right',
    duration: '2000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/IJriA33.jpg',
    titleCard: 'Arte en el Pasaje',
    description: 'Buenos Aires - 2021',
    zoomOut: 'zoom-out',
    duration: '2000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/Fw6Bfip.jpg',
    titleCard: 'MEEBA',
    description: 'Buenos Aires - 2021',
    fadeUp: 'fade-up',
    duration: '2000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/YapCF80.jpg',
    titleCard: 'Arte en el Pasaje',
    description: 'Buenos Aires - 2021',
    fadeRight: 'fade-right',
    duration: '2000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/4Zi8vb8.jpg',
    titleCard: 'Arte en el Pasaje',
    description: 'Buenos Aires - 2021',
    fadeLeft: 'fade-left',
    duration: '2000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/uVw5utN.jpg',
    titleCard: 'Arte en el Pasaje',
    description: 'Buenos Aires - 2021',
    fadeDownRight: 'fade-down-right',
    duration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/dqKwgh3.jpg',
    titleCard: 'Arte en el Pasaje',
    description: 'Buenos Aires - 2022',
    fadeDownLeft: 'fade-down-left',
    duration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/FeCnzH1.jpg',
    titleCard: 'Palermo Soho',
    description: 'Buenos Aires - 2019',
    fadeUpRight: 'fade-up-right',
    duration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/n2XLwsn.jpg',
    titleCard: 'MEEBA',
    description: 'Buenos Aires - 2021',
    fadeUpLeft: 'fade-up-left',
    duration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/VCsRx5m.jpg',
    titleCard: 'Arte en el Pasaje',
    description: 'Buenos Aires - 2022',
    flipLeft: 'flip-left',
    duration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/z5dvxV3.jpg',
    titleCard: 'Los Vikingos  Gustavo Linares',
    description: 'Buenos Aires - 2019',
    flipRight: 'flip-right',
    duration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/PJOdjax.jpg',
    titleCard: 'MEEBA',
    description: 'Buenos Aires - 2021',
    flipUp: 'flip-up',
    duration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/wVOMVAe.jpg',
    titleCard: 'Hipódromo de Palermo',
    description: 'Buenos Aires - 2019',
    zoomOutUp: 'zoom-out-up',
    duration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/EdDM3Sg.jpg',
    titleCard: 'Tigre',
    description: 'Buenos Aires - 2021',
    zoomOutDown: 'zoom-out-down',
    duration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/KrZTzta.jpg',
    titleCard: 'Tigre',
    description: 'Buenos Aires - 2021',
    zoomOutRight: 'zoom-out-right',
    duration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/q25hp3b.jpg',
    titleCard: 'Manchas Plein Air',
    description: 'Buenos Aires - 2022',
    zoomOutLeft: 'zoom-out-left',
    duration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/T15WQIQ.jpg',
    titleCard: 'Casa de Galicia',
    description: 'Buenos Aires - 2015',
    flipDown: 'flip-down',
    easing: 'linear',
    duration: '3000',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/1T43Rd2.jpg',
    titleCard: 'Casa de Galicia',
    description: 'Buenos Aires - 2015',
    zoomInLeft: 'zoom-in-left',
    duration: '3000',
    easing: 'ease-in-out',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/b7nNwmy.jpg',
    titleCard: 'Palermo Soho',
    description: 'Buenos Aires - 2019',
    zoomInRight: 'zoom-in-right',
    duration: '3000',
    easing: 'ease-in-out',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/mot1krn.jpg',
    titleCard: 'Palermo Soho',
    description: 'Buenos Aires - 2019',
    flipLeft: 'flip-left',
    duration: '2000',
    easing: 'ease-out-cubic',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/V39GTiO.jpg',
    titleCard: 'Arte en el Pasaje',
    description: 'Buenos Aires - 2021',
    zoomIn: 'zoom-in',
    duration: '3000',
    easing: 'ease-in',
  },
];

console.log(dbExpo);

const Exposiciones = () => {
  const [idModalExpo, setIdModalExpo] = useState('');
  const [isOpen, isOpenModal, closeModal] = useModal();

  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Helmet>
        <title>Exposiciones</title>
        <meta
          name="description"
          content="En esta sección estás véras mis exposiciones"
        />
      </Helmet>
      <Header />
      <main>
        <article className="bg">
          {/* <img className="bg-img" src={img} alt="" /> */}
          <div className="bg-title-container">
            <h1 className="bg-title">Exposiciones</h1>
          </div>
        </article>
        <div className="bg-gallery">
          <section
            className={`${
              theme === 'dark' ? theme : theme === 'light' ? 'bg-gallery' : ''
            } section`}
          >
            <ExpoCards
              dbExpo={dbExpo}
              isOpenModal={isOpenModal}
              setIdModalExpo={setIdModalExpo}
            />
          </section>
        </div>
      </main>
      <Footer theme={theme} />
      {true && (
        <Modal
          dbExpo={dbExpo}
          idModalExpo={idModalExpo}
          closeModal={closeModal}
          isOpen={isOpen}
        />
      )}
    </>
  );
};

export default Exposiciones;
