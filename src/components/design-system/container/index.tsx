import styled from 'styled-components'

export const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    background: ${(props) => props.theme.colors.darker};
`

export const Grid = styled.div`
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));

    width: 100%;
    height: 100%;
`
