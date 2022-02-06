import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MisObras from './pages/MisObras';
import Contacto from './pages/Contacto';
import Error404 from './pages/Error404';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ico from './assets/icon/favicon.ico';
import homeImg from './assets/img/homeImg.jpg';
import { Helmet } from 'react-helmet';
import BtnScrollTop from './components/BtnScrollTop';
import useScrollTop from './hooks/useScrollTop';
import ScrollToTop from './components/ScrollToTop';
import { useContext } from 'react';
import ThemeContext from './context/ThemeContext';
import BtnDarkMode from './components/BtnDarkMode';
import { GlobalStyle } from './components/CreateGlobalStyle';

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
        <link
          rel="icon"
          type="image/x-icon"
          href={`https://adrianastiglianoarte.netlify.app${ico}`}
        />
        <link
          rel="apple-touch-icon"
          href={`https://adrianastiglianoarte.netlify.app${ico}`}
        />
        <meta name="theme-color" content="#e0aaff" />
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
      </Helmet>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
          {/* <Route path="/exposiciones" element={<Exposiciones />} /> */}
          <Route path="/mis-obras" element={<MisObras />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
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
