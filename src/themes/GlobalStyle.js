import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,*::after,*::before{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
html{
    font-size: 65%;
    /* Footer support */
    /* position: relative; */

}
h1{
    line-height: 1.2;
}
`;

export default GlobalStyle;
