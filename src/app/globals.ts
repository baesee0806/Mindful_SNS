'use client';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
		padding: 0;
		border: 0;
    background-color: #000000;
    color: #ffffff;
  }

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    
  }
`;

export default GlobalStyle;
