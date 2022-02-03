import Banner from '../components/Banner';
import Conoceme from '../components/Conoceme';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroImage from '../components/HeroImage';
import PinturasHome from '../components/PinturasHome';

const backgroundImage = 'https://i.imgur.com/wiGrmK5.jpg',
  title = '¡Hola! Soy Adriana Stigliano',
  subtitle = 'Artista Plástica',
  resplandor = 'https://i.imgur.com/NjJ00Po.jpg',
  avatar = 'https://i.imgur.com/xOfTOvB.jpg',
  banner = 'https://i.imgur.com/Veoqbq1.jpg';

const Home = () => {
  return (
    <main>
      <Header />
      <HeroImage
        backgroundImage={backgroundImage}
        title={title}
        subtitle={subtitle}
      />
      <Conoceme avatar={avatar} resplandor={resplandor} />
      <Banner banner={banner} />
      <PinturasHome />
      <Footer />
    </main>
  );
};

export default Home;
