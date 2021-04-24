import styled from 'styled-components'

export const DefaultButton = styled.button`
    border-radius: 0.25rem;
    border: none;
    outline: none;
    color: ${(props) => props.theme.colors.white};
    background: ${(props) => props.theme.colors.primary};
    height: 2.5rem;
    padding: 0 2rem;
    font-weight: bold;
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
        filter: brightness(70%);
    }
`
