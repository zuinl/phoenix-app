import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    :root {
        --primary-color: #F25A30;
        --secondary-color: #8F0A07;

        --primary-font: 'Roboto Mono', serif;

        --text-light: #FFF;
    }

    * {
        box-sizing: border-box;
    }

    body {
        background-color: #B89669;
        margin: 0;
    }
    
    body, input, textarea, select, button {
        font-family: var(--primary-font);
    }
    
    button {
        cursor: pointer;
        transition: .4s ease;

        &:hover {
            opacity: .8;
        }
    }
    
    input, button, select {
        outline: none;
    }

    .App {
        display: flex;
        flex-wrap: wrap;
        width: 100vw;
        height: 100vh;
        padding: 0 1rem 1rem 1rem;
        padding-top: calc(70px + 2rem);
        overflow-x: hidden;
    }

    /* width */
    ::-webkit-scrollbar {
        width: 8px;
        height: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey; 
        border-radius: 6px;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: var(--primary-color); 
        border-radius: 6px;
    }
`

export default GlobalStyle