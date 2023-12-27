import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,*::after,*::before{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
html{
    font-size: 80%;
    /* Footer support */
    position: relative;

}
h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.2;
  }

  a {
    text-decoration: none;
  }

  img {
    display: block;
    width: 100%;
  }

  button,
  input, 
  textarea {
    border: none;
    outline: none;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
