import styled from 'styled-components'

export const SongBox = styled.div`
    background: ${props => props.active ? 'var(--primary-color)' : 'var(--secondary-color)'};
    margin-right: .7rem;
    padding: .5rem;
    border-radius: 8px;
    color: #FFF;
    min-width: 120px;
    max-width: 120px;
    cursor: pointer;

    &:last-child {
        margin-right: 0;
    }

    &:hover {
        background: var(--primary-color);
        transition: 1s ease;
    }
`

export const TextName = styled.h5`
    margin: 0 0 .1rem 0;
    font-size: .9rem;
`

export const TextLength = styled.small`
    font-size: .75rem;
    font-weight: 300;
`