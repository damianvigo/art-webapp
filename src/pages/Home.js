import ico from '../assets/icon/favicon.ico';
import homeImg from '../assets/img/homeImg.jpg';
import Banner from '../components/Banner';
import Conoceme from '../components/Conoceme';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroImage from '../components/HeroImage';
import PinturasHome from '../components/PinturasHome';
import { Helmet } from 'react-helmet';

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
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Hola bienvenid@ a mi portafolio artístico Soy Adriana Stigliano, Artista Plástica"
        />
        <link rel="canonical" href="https://adrianastiglianoarte.netlify.app" />
        <link rel="icon" type="image/x-icon" href={ico} />
        <link rel="apple-touch-icon" href={ico} />
        <meta name="theme-color" content="#e0aaff" />

        <meta name="twitter:card" content="summary" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          name="twitter:title"
          content="Portafolio Artístico Adriana Stigliano"
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
        <meta
          property="og:description"
          name="twitter:description"
          content="Portafolio Artístico Adriana Stigliano"
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
