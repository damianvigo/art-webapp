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
      <Header />
      <Helmet>
        <title>Bienvenida/o</title>
        <meta name="twitter:card" content="summary" />
        <meta name="og:type" content="website" />
        <meta
          property="og:title"
          name="twitter:title"
          content="Artista Plástica | Adriana Stigliano"
        />
        <meta
          property="og:description"
          content="Hola bienvenida/o a mi portafolio artístico donde verás todas mis obras"
        />
        <meta
          property="og:image"
          name="twitter:image"
          content="https://i.imgur.com/OkR2OTl.jpg"
        />
        <meta
          property="og:url"
          name="twitter:url"
          content="https://adrianastiglianoarte.netlify.app"
        />
      </Helmet>
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
