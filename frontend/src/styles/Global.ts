import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

html {
  /* a cada 1rem será considera 10px */
  font-size: 62.5%;
}


body {
  background-color: #121214;
  color: #ffffff;
  -webkit-font-smoothing: antialiased;
}

body, input, button, textarea {
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 500;
}

button {
    cursor: pointer;
}

a {
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
  color: unset;
  text-decoration: none;
  }
}


@media (max-width: 768px) {
  html {
    font-size: 50%;
  }
}
`;