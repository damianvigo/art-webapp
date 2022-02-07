import { HashRouter, Route, Routes } from 'react-router-dom';
import ico from './assets/icon/favicon.ico';
import Home from './pages/Home';
import MisObras from './pages/MisObras';
import Contacto from './pages/Contacto';
import Error404 from './pages/Error404';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BtnScrollTop from './components/BtnScrollTop';
import useScrollTop from './hooks/useScrollTop';
import ScrollToTop from './components/ScrollToTop';
import { useContext } from 'react';
import ThemeContext from './context/ThemeContext';
import BtnDarkMode from './components/BtnDarkMode';
import { GlobalStyle } from './components/CreateGlobalStyle';
import { Helmet } from 'react-helmet';
import homeImg from './assets/img/homeImg.jpg';

AOS.init({
  duration: 1500,
});

function App() {
  const { theme } = useContext(ThemeContext);

  const { toTop, scrollTop, setScrollTop } = useScrollTop();
  return (
    <>
      <GlobalStyle />
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://adrianastiglianoarte.netlify.app" />
        <meta name="theme-color" content="#e0aaff" />
        <title>Bienvenid@</title>
        <link rel="icon" type="image/x-icon" href={ico} />
        <link rel="apple-touch-icon" href={ico} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
        <meta property="og:image" name="twitter:image" content={homeImg} />
        <meta property="og:url" name="twitter:url" content={homeImg} />
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
      </Helmet>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
          {/* <Route path="/exposiciones" element={<Exposiciones />} /> */}
          <Route path="/mis-obras" element={<MisObras />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </HashRouter>
      <BtnScrollTop
        toTop={toTop}
        scrollTop={scrollTop}
        setScrollTop={setScrollTop}
      />
      <BtnDarkMode />
    </>
  );
}

export default App;
