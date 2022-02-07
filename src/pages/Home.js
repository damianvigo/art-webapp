import Banner from '../components/Banner';
import Conoceme from '../components/Conoceme';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroImage from '../components/HeroImage';
import PinturasHome from '../components/PinturasHome';
import { Helmet } from 'react-helmet';
import homeImg from '../assets/img/homeImg.jpg';

const backgroundImage = 'https://i.imgur.com/wiGrmK5.jpg',
  title = '¡Hola! Soy Adriana Stigliano',
  subtitle = 'Artista Plástica',
  resplandor = 'https://i.imgur.com/NjJ00Po.jpg',
  avatar = 'https://i.imgur.com/xOfTOvB.jpg',
  banner = 'https://i.imgur.com/Veoqbq1.jpg';

const Home = ({ theme }) => {
  return (
    <>
      <Helmet>
        <title>Portafolio Artístico | Adriana Stigliano</title>
        <meta name="title" content="Portafolio Artístico | Adriana Stigliano" />
        <meta
          name="description"
          content="Hola bienvenid@ a mi portafolio artístico Soy Adriana Stigliano, Artista Plástica"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://adrianastiglianoarte.netlify.app${window.location.hash}`}
        />
        <meta
          property="og:title"
          content="Portafolio Artístico | Adriana Stigliano"
        />
        <meta
          property="og:description"
          content="Hola bienvenid@ a mi portafolio artístico Soy Adriana Stigliano, Artista Plástica"
        />
        <meta
          property="og:image"
          content={`https://adrianastiglianoarte.netlify.app${homeImg}`}
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://adrianastiglianoarte.netlify.app${window.location.hash}`}
        />
        <meta
          property="twitter:title"
          content="Portafolio Artístico | Adriana Stigliano"
        />
        <meta
          property="twitter:description"
          content="Hola bienvenid@ a mi portafolio artístico Soy Adriana Stigliano, Artista Plástica"
        />
        <meta
          property="twitter:image"
          content={`https://adrianastiglianoarte.netlify.app${homeImg}`}
        />
      </Helmet>
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
