'use client';
import { color } from '@/utils/colors';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
		padding: 0;
		border: 0;
    background-color: ${color.GLOBALBGC};
    color: ${color.FONTCOLOR};
  }

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  ::-webkit-scrollbar {
    display: none;
}
`;

export default GlobalStyle;
