import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

body, h1, h2, h3, h4, h5, h6, p, figure, blockquote, dl, dd {
  margin: 0;
  background-color: #fafafa;
}

ul, ol {
  padding: 0;
  margin: 0;
  list-style: none;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

button, input, select, textarea {
  font: inherit;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

`;
