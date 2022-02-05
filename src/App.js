import { HashRouter, Route, Routes } from 'react-router-dom';

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
import { Helmet } from 'react-helmet';
import { GlobalStyle } from './components/CreateGlobalStyle';

import paint from './assets/icon/paint.png';

AOS.init({
  duration: 1500,
});

function App() {
  const { theme } = useContext(ThemeContext);

  const { toTop, scrollTop, setScrollTop } = useScrollTop();
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
        <link rel="shortcut icon" href={paint} type="image/x-icon" />
        <meta
          name="description"
          content="Hola bienvenid@ a mi Portafolio Profesional, soy Damián Vigo, Desarrollador Web"
        />
        <link
          rel="canonical"
          href="https://damianvigo.github.io/portfolio-cv"
        />
        {/*      <link
          rel="favicon"
          href="https://damianvigo.github.io/portfolio-cv/src/assets/icons/favicon.ico"
        /> */}
        <link
          rel="apple-touch-icon"
          href="https://damianvigo.github.io/portfolio-cv/src/assets/icons/favicon.ico"
        />
        <meta name="theme-color" content="#d9006" />
        <meta name="twitter:card" content="summary" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          name="twitter:title"
          content="Portafolio CV - damianvigo"
        />
        <meta
          property="og:image"
          name="twitter:image"
          content="https://damianvigo.github.io/portfolio-cv/src/assets/img/hero-image-home.jpg"
        />
        <meta
          property="og:url"
          name="twitter:url"
          content="https://damianvigo.github.io/portfolio-cv"
        />
        <meta
          property="og:description"
          name="twitter:description"
          content="Hola bienvenid@ a mi Portafolio Profesional, soy Damián Vigo. Desarrollador Web"
        />
      </Helmet>
      <GlobalStyle />
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
