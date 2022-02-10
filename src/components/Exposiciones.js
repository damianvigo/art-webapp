import Footer from './Footer';
import Header from './Header';
import { v4 as uuidv4 } from 'uuid';
import './Exposiciones.css';
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const expo = [
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/mYVvsvu.jpg',
    titleCard: 'Arte en el Pasaje',
    description: 'Buenos Aires - 2022',
    animateOnScroll: '',
    animateonScrollDuration: '',
  },

  {
    id: uuidv4(),
    img: 'https://i.imgur.com/S3ZDq6G.jpg',
    titleCard: 'Arte en el Pasaje',
    description: 'Buenos Aires - 2022',
    animateOnScroll: '',
    animateonScrollDuration: '',
  },

  {
    id: uuidv4(),
    img: 'https://i.imgur.com/PkIB8OG.jpg',
    titleCard: 'Arte en el Pasaje',
    description: 'Buenos Aires - 2021',
    animateOnScroll: '',
    animateonScrollDuration: '',
  },

  {
    id: uuidv4(),
    img: 'https://i.imgur.com/iOuTQbN.jpg',
    titleCard: 'Arte en el Pasaje',
    description: 'Buenos Aires - 2021',
    animateOnScroll: '',
    animateonScrollDuration: '',
  },

  {
    id: uuidv4(),
    img: 'https://i.imgur.com/HOmlvCk.jpg',
    titleCard: 'MEEBA',
    description: 'Buenos Aires - 2021',
    animateOnScroll: '',
    animateonScrollDuration: '',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/IJriA33.jpg',
    titleCard: 'Arte en el Pasaje',
    description: 'Buenos Aires - 2021',
    animateOnScroll: '',
    animateonScrollDuration: '',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/VCsRx5m.jpg',
    titleCard: 'Arte en el Pasaje',
    description: 'Buenos Aires - 2022',
    animateOnScroll: '',
    animateonScrollDuration: '',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/Fw6Bfip.jpg',
    titleCard: 'MEEBA',
    description: 'Buenos Aires - 2021',
    animateOnScroll: '',
    animateonScrollDuration: '',
  },
  {
    id: uuidv4(),
    img: 'https://i.imgur.com/YapCF80.jpg',
    titleCard: 'Arte en el Pasaje',
    description: 'Buenos Aires - 2021',
    animateOnScroll: '',
    animateonScrollDuration: '',
  },
];

console.log(expo);

const Exposiciones = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <main>
      <Header />
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
          <div className="container">
            <div className="gallery">
              {expo.map((el) => (
                <article className="card-gallery">
                  <figure className="container-mobile">
                    <img className="card-gallery-img" src={el.img} alt="" />
                    <div className="description-mobile">
                      <h2>{el.titleCard}</h2>
                      <small>{el.description}</small>
                    </div>
                  </figure>
                  <div className="card-gallery-container">
                    <div className="card-gallery-txt">
                      <h2>{el.titleCard}</h2>
                      <p>{el.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer theme={theme} />
    </main>
  );
};

export default Exposiciones;
