import Banner from '../components/Banner';
import Conoceme from '../components/Conoceme';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroImage from '../components/HeroImage';
import PinturasHome from '../components/PinturasHome';

const Home = () => {
  return (
    <main>
      <Header />
      <HeroImage />
      <Conoceme />
      <Banner />
      <PinturasHome />
      <Footer />
    </main>
  );
};

export default Home;
