import Banner from '../components/Banner';
import Conoceme from '../components/Conoceme';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroImage from '../components/HeroImage';
import PinturasHome from '../components/PinturasHome';
import homeImg from '../assets/img/homeImg.jpg';
import { Helmet } from 'react-helmet';

const backgroundImage = 'https://i.imgur.com/wiGrmK5.jpg',
  title = '¡Hola! Soy Adriana Stigliano',
  subtitle = 'Artista Plástica',
  resplandor = 'https://i.imgur.com/NjJ00Po.jpg',
  avatar = 'https://i.imgur.com/xOfTOvB.jpg',
  banner = 'https://i.imgur.com/Veoqbq1.jpg';

const Home = ({ theme }) => {
  <Helmet>
    <meta
      name="description"
      content="Hola bienvenid@ a mi portafolio artístico Soy Adriana Stigliano, Artista Plástica"
    />
    <meta name="twitter:card" content="summary" />
    <meta property="og:type" content="website" />
    <meta
      property="og:title"
      name="twitter:title"
      content="Portafolio Artístico | Adriana Stigliano"
    />
    <meta
      property="og:description"
      name="twitter:description"
      content="Artista Plástica"
    />
    <meta
      property="og:image"
      name="twitter:image"
      content={`https://adrianastiglianoarte.netlify.app${homeImg}`}
    />
    <meta
      property="og:url"
      name="twitter:url"
      content={`https://adrianastiglianoarte.netlify.app${homeImg}`}
    />
  </Helmet>;
  return (
    <>
      <Header />
      <main>
        <HeroImage
          backgroundImage={backgroundImage}
          title={title}
          subtitle={subtitle}
        />
        <Conoceme theme={theme} avatar={avatar} resplandor={resplandor} />
        <Banner banner={banner} />
        <PinturasHome theme={theme} />
      </main>
      <Footer theme={theme} />
    </>
  );
};

export default Home;
