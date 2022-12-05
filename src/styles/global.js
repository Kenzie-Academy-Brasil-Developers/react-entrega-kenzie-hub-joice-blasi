import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ul, ol, li {
        list-style: none;
    }

    input {
        outline: none;
    }

    :root {
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;
        --grey-0: #F8F9FA;
        --grey-1: #868E96;
        --grey-2:#343B41;
        --grey-3: #212529;
        --grey-4: #121214;
        --success: #3FE864;
        --negative: #E83F5B;
        --toastify-color-success: #3FE864;
        --toastify-color-error: #E83F5B;
    }

    h1, h2, h3, h4, h5, h6, p, a, span, li, button, input, label, select {
        font-family: 'Inter', sans-serif;
    }

    .container {
        width: 100%;
        max-width: 280px;
        margin: 0 auto;
        padding: 0.8rem 0.3rem;
    }

    @media(min-width: 500px) {
        .container {
            max-width: 380px;
        }
    }
`;
