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
          content="Hola bienvenid@ a mi Portafolio artístico"
        />
        {/*     <meta name="twitter:card" content="summary" /> */}
        <meta name="og:type" content="website" />
        <meta
          name="og:title"
          /*       name="twitter:title" */
          content="Portafolio Artístico | Adriana Stigliano"
        />
        <meta
          name="og:image"
          /* name="twitter:image" */ content={`${homeImg}`}
        />
        <meta
          name="og:url"
          /*        name="twitter:url" */
          content={`https://adrianastiglianoarte.netlify.app#`}
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
