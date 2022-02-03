import Header from '../components/Header';
import HeroImage from '../components/HeroImage';
import Footer from '../components/Footer';

const backgroundImage = 'https://i.imgur.com/OkR2OTl.jpg';

const Contacto = () => {
  return (
    <>
      <Header />
      <main>
        <HeroImage contact backgroundImage={backgroundImage} />
      </main>
      <Footer />
    </>
  );
};

export default Contacto;
