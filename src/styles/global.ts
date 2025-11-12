import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        color: ${(props) => props.theme.colors.textColor};
        font-family: sans-serif;
        line-height: 140%;
        background-color: ${(props) => props.theme.colors.backgroundColor};
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Kumbh Sans';
    }

    img {
        width: 100%;
    }
`;