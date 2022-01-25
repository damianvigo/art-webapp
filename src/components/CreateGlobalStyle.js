import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
  --first-color: #e0aaff;
  --first-alpha-color: rgba(217, 0, 98, 0.75);
  --second-color: #10002b;
  --second-alpha-color: #cddafd75;
  --third-color: #501464;
  --third-alpha-color: rgba(80, 20, 100, 0.75);
  --white-color: #fff;
  --gray-light-color: #f3f3f3;
  --gray-color: #ccc;
  --gray-dark-color: #666;
  --black-color: #000;
  --link-color: #240046;
  --title-color: #333;
  --text-color: #222;
  --white-alpha-color: rgba(255, 255, 255, 0.5);
  --black-alpha-color: rgba(0, 0, 0, 0.5);
  --font: "Raleway", sans-serif;
  --max-width: 1200px;
  --header-height: 6.4rem;
}

/* Reset */
html {
  box-sizing: border-box;
  font-family: var(--font);
  font-size: 62.5%;
  scroll-behavior: smooth;
}

*,
*::after,
*::before {
  box-sizing: inherit;
}

body {
  margin: 0;
  overflow-x: hidden;
  color: var(--text-color);
}

a {
  color: var(--link-color);
  font-size: 1.5rem;
  transition: all 0.5s ease-out;
}

a:hover {
  opacity: 0.75;
}

h1 {
  margin: 0;
  font-size: 3.2rem;
}

h2 {
  margin: 0;
  font-size: 2.4rem;
}

h3 {
  margin: 0;
  font-size: 2rem;
}

h4 {
  margin: 0;
  font-size: 1.6rem;
}

h5 {
  margin: 0;
  font-size: 1.3rem;
}

h6 {
  margin: 0;
  font-size: 1.1rem;
}

img {
  max-width: 100%;
  height: auto;
}

p {
  line-height: 2.6rem;
  font-size: 1.6rem;
}

small, b {
  font-size: 1.4rem;
}

/* Utilities */
.box-shadow-1 {
    box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.25);
}

.container {
    margin-left: auto;
    margin-right: auto;
    max-width: var(--max-width);
}

.none {
    display: none;
}

`;
