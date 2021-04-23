import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    ${() => reset}
  
`
const reset = css`
    *,
    html,
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', Arial, Helvetica, sans-serif;
        font-size: 16px;
        color: ${(props) => props.theme.colors.white};
    }

    button {
        border-radius: 0.25rem;
        border: none;
        outline: none;
        color: ${(props) => props.theme.colors.white};
        background: ${(props) => props.theme.colors.primary};
        height: 2.5rem;
        padding: 0 2rem;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: 0.5s;
        &:hover {
            filter: brightness(70%);
        }
    }

    @media (max-width: 800px) {
        *,
        html,
        body {
            font-size: 95%;
        }
    }

    @media (max-width: 480px) {
        *,
        html,
        body {
            font-size: 90%;
        }
    }
`
