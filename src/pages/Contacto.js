import Header from '../components/Header';
import HeroImage from '../components/HeroImage';
import Footer from '../components/Footer';
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const backgroundImage = 'https://i.imgur.com/OkR2OTl.jpg';

const Contacto = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Header />
      <main>
        <HeroImage contact backgroundImage={backgroundImage} />
      </main>
      <Footer theme={theme} />
    </>
  );
};

export default Contacto;
