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
      <link rel="icon" type="image/x-icon" href={ico} />
      <link rel="apple-touch-icon" href={ico} />
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
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
