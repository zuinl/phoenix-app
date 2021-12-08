import styled from 'styled-components'

export const Header = styled.header`
    display: flex;
    justify-content: center;
    width: 100%;
    background: var(--secondary-color);
    padding: 1rem;
    margin-bottom: 2rem;

    & img {
        width: 200px;
        cursor: pointer;
    }
`