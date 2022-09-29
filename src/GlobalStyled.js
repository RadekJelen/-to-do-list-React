import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, :after, ::before {
    box-sizing: inherit;
  }

  body {
	font-family: 'Open Sans', sans-serif;
	background-color: #eee;
	padding: 20px;
  max-width: 1000px;
	margin: auto;
}

button {
	cursor: pointer;
}
`;