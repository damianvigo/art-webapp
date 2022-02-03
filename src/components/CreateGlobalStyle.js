import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
    /* @link https://utopia.fyi/type/calculator?c=320,21,1.2,1140,24,1.25,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l */
  --step--2: clamp(0.91rem, 0.89rem + 0.09vw, 0.96rem);
  --step--1: clamp(1.09rem, 1.06rem + 0.19vw, 1.20rem);
  --step-0: clamp(1.31rem, 1.24rem + 0.34vw, 1.50rem);
  --step-1: clamp(1.58rem, 1.47rem + 0.55vw, 1.88rem);
  --step-2: clamp(1.89rem, 1.73rem + 0.83vw, 2.34rem);
  --step-3: clamp(2.27rem, 2.03rem + 1.20vw, 2.93rem);
  --step-4: clamp(2.72rem, 2.38rem + 1.71vw, 3.66rem);
  --step-5: clamp(3.27rem, 2.79rem + 2.39vw, 4.58rem);
  --first-color: #e0aaff; // usando
  --first-alpha-color: #e0aaff40; // usando
  --second-color: #10002b; // usando
  --second-alpha-color: #10002b75;
  --third-color: #c77dff; // usando
  --third-alpha-color: #c77dff45;
  --white-color: #fff; // usando
  --black-color: #000;
  --link-color: #240046;
  --title-color: #333;
  --text-color: #222;
  --white-alpha-color: rgba(255, 255, 255, 0.5);
  --black-alpha-color: rgba(0, 0, 0, 0.75); // usando
  --high-black-alpha-color: rgba(0, 0, 0, 0.9);
  --active: #e0aaff;
  --form-ok-color: #4caf50;
  --form-error-color: #f44336;
  --font: 'Lato', sans-serif;
  --max-width: 1200px;
  --header-height: 4rem;
}

/* Reset */
html {
  box-sizing: border-box;
  font-family: var(--font);
  font-size: 16px;
  scroll-behavior: smooth;
}

*,
*::after,
*::before {
  box-sizing: inherit;
}

/* p::selection {
  color: #e0aaff;
  background-color: var(--link-color);
} */

body {
  margin: 0;
  overflow-x: hidden;
  color: var(--text-color);
}
 /*
a {
  color: var(--link-color);
   font-size: 1.5rem;
    transition: all 0.5s ease-out;

a:hover {
  opacity: 0.75;
} */

a {
  transition: all 0.5s ease-in-out;
}

h1 {
  margin: 0;
  font-size: var(--step-5);
}

h2 {
  margin: 0;
  font-size: var(--step-4);
}

h3 {
  margin: 0;
  font-size: var(--step-3);
}

h4 {
  margin: var(--step--1);
  font-size: var(--step-2);
}

h5 {
  margin: 0;
  font-size: var(--step-1);
}

h6 {
  margin: 0;
  font-size: var(--step-0);
}

img, video {
  max-width: 100%;
  height: auto;
}

figure {
  margin: 0;
}

/* line-height: 2.6rem; */

p {
  line-height: var(--step-2);
  font-size: var(--step-0);
}

/* small, b {
  font-size: 1.4rem;
} */

.step--2 {
    font-size: var(--step--2);
}

.step--1 {
    font-size: var(--step--1);
}

.step-0 {
    /* h6 */
    font-size: var(--step-0);
}

.step-1 {
    /* h5 */
    font-size: var(--step-1);
}

.step-2 {
    /* h4 */
    font-size: var(--step-2);
}

.step-3 {
    /* h3 */
    font-size: var(--step-3);
}

.step-4 {
    /* h2 */
    font-size: var(--step-4);
}

.step-5 {
    /* h1 */
    font-size: var(--step-5);
}


/* Utilities */
.box-shadow-card {
    box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.25);
}

.box-shadow-down {
  box-shadow: -15px 15px 5px 15px #0008;
}

.container {
    margin-left: auto;
    margin-right: auto;
    max-width: var(--max-width);
}

.none {
  display: none;
}

.section {
  padding: 2rem 1rem;
}

.text-center {
  text-align: center;
}

.text-left {
  text-align: left;
}

.text-right {
  text-align: right;
}

svg {
  vertical-align: middle;
  width: var(--step--1);
  height: var(--step--1);
}

@media screen and (min-width: 1024px) {
  .full-lg-screen {
    width: 100%;
    min-height: 100vh;
  }

}


`;
