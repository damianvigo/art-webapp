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
import { GlobalStyle } from './components/CreateGlobalStyle';
import ico from './assets/icon/favicon.ico';

import { Helmet } from 'react-helmet';
import NetworkStatus from './components/NetworkStatus';
import useNetworkStatus from './hooks/useNetworkStatus';
import Exposiciones from './pages/Exposiciones';

/* import homeImg from './assets/img/homeImg.jpg'; */

AOS.init({
  duration: 1500,
});

function App() {
  const { theme } = useContext(ThemeContext);

  const { toTop, scrollTop, setScrollTop } = useScrollTop();
  const [isOnline] = useNetworkStatus();

  return (
    <>
      <GlobalStyle />
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://adrianastigliano.art" />
        <meta name="theme-color" content="#e0aaff" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          type="image/x-icon"
          href={`https://adrianastiglianoarte.netlify.app${ico}`}
        />
        <link
          rel="apple-touch-icon"
          href={`https://adrianastiglianoarte.netlify.app${ico}`}
        />
        <meta name="title" content="Artista Plástica | Adriana Stigliano" />
        <meta
          name="description"
          content="¡Hola! Bienvenida/o a mi página web artística, aquí verás todas mis obras"
        />
        <meta name="robots" content="index" />
        <meta name="robots" content="follow" />
        <meta name="author" content="Damian Vigo" />
        <meta
          name="keywords"
          content="arte, art, oleo, óleo, acrilico, acrílico, pinturas, tela, obra, obras"
        />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />
      </Helmet>
      {isOnline && (
        <NetworkStatus
          conect="var(--second-color);"
          down="Conexión Perdida"
          up="La conexión se ha restablecido"
        />
      )}
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/exposiciones" element={<Exposiciones />} />
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
