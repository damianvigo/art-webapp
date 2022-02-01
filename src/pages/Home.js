import Banner from '../components/Banner';
import Conoceme from '../components/Conoceme';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroImage from '../components/HeroImage';
import PinturasHome from '../components/PinturasHome';
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
  const initialDbHome = [
    {
      id: uuidv4(),
      title: 'Mis Pinturas destacadas',
      img: 'https://placeimg.com/600/600/tech',
      titleCard: 'Ragnar',
      description: 'Oleo sobre tela. 80 x 70cm',
      animateOnScroll: 'fade-down-right',
      animateonScrollDuration: '3000',
    },
    {
      id: uuidv4(),
      img: 'https://placeimg.com/600/600/any',
      titleCard: 'Tango',
      description: 'Oleo sobre tela. 80 x 70cm',
      animateOnScroll: 'fade-up-right',
      animateonScrollDuration: '3000',
    },
  ];

  return (
    <main>
      <Header />
      <HeroImage />
      <Conoceme />
      <Banner />
      <PinturasHome dbHome={initialDbHome} />
      <Footer />
    </main>
  );
};

export default Home;
