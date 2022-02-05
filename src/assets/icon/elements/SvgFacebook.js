import * as React from 'react';

const SvgFacebook = (props) => (
  <a
    href="https://www.facebook.com/adriana.stigliano"
    target="_blank"
    rel="noreferrer"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      style={{
        enableBackground: 'new 0 0 512 512',
        width: 'var(--step-1)',
        height: 'var(--step-1)',
      }}
      xmlSpace="preserve"
      {...props}
    >
      <path
        style={{
          fill: '#4d6fa9',
        }}
        d="M476.69 512H35.31C15.89 512 0 496.11 0 476.69V35.31C0 15.89 15.89 0 35.31 0h441.38C496.11 0 512 15.89 512 35.31v441.38c0 19.42-15.89 35.31-35.31 35.31"
      />
      <path
        style={{
          fill: '#fff',
        }}
        d="M432.552 88.276v88.276h-79.448c-9.71 0-17.655 7.945-17.655 17.655v52.966h88.276v88.276h-88.276V512h-88.276V335.448h-70.621v-88.276h70.621v-52.966c0-55.614 42.372-101.517 97.103-105.931h88.276z"
      />
    </svg>
  </a>
);

export default SvgFacebook;
