import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import ico from './assets/icon/favicon.ico';
import homeImg from './assets/img/homeImg.jpg';
import { Helmet } from 'react-helmet';

ReactDOM.render(
  <ThemeProvider>
    <Helmet>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href="https://adrianastiglianoarte.netlify.app" />
      <meta name="theme-color" content="#e0aaff" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" type="image/x-icon" href={ico} />
      <link rel="apple-touch-icon" href={ico} />
      <title>Portafolio Artístico | Adriana Stigliano</title>
      <meta name="title" content="Portafolio Artístico | Adriana Stigliano" />
      <meta
        name="description"
        content="Hola bienvenid@ a mi Portafolio artístico"
      />
      <meta name="twitter:card" content="summary" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        name="twitter:title"
        content="Portafolio Artístico | Adriana Stigliano"
      />
      <meta
        property="og:image"
        name="twitter:image"
        content={`https://adrianastiglianoarte.netlify.app${homeImg}`}
      />
      <meta
        property="og:url"
        name="twitter:url"
        content="https://adrianastiglianoarte.netlify.app"
      />
    </Helmet>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
