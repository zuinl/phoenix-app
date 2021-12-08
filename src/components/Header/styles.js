import styled from 'styled-components'

export const Header = styled.header`
    display: flex;
    position: fixed;
    justify-content: center;
    width: 100%;
    background: var(--secondary-color);
    padding: 1rem;
    margin-bottom: 2rem;
    top: 0;
    left: 0;
    height: 70px;

    & img {
        width: 200px;
        cursor: pointer;
    }
`