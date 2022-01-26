import { HashRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './components/CreateGlobalStyle';
import Home from './pages/Home';
import MisObras from './pages/MisObras';
import Contacto from './pages/Contacto';
import Error404 from './pages/Error404';

function App() {
  return (
    <>
      <GlobalStyle />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/exposiciones" element={<Conoceme />} /> */}
          <Route path="/mis-obras" element={<MisObras />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
