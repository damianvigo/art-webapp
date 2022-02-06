import { Helmet } from 'react-helmet';
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
      <Helmet>
        <title>Contacto</title>
        <meta
          name="description"
          content="En esta sección esta mi formulario para que nos pongamos en contacto"
        />
      </Helmet>
      <Header />
      <main>
        <HeroImage contact backgroundImage={backgroundImage} />
      </main>
      <Footer theme={theme} />
    </>
  );
};

export default Contacto;
