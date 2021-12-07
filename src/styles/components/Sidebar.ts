import styled from "styled-components"

export const Container = styled.aside`
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 21rem;
    height: 100%;

    background-color: #222;
    padding: 1.5rem 1rem;
`

export const Title = styled.h3`
    font-size: 3.5rem;
    font-weight: 600;
    padding: 0 1.5rem;
`

export const Row = styled.hr`
    background-color: #555;
    margin: 1.5rem 0;
    height: .1rem;
    border-width: 0;
`

export const Options = styled.div`
    display: flex;
    flex-direction: column;

    padding: 0 1.5rem;
`

export const Option = styled.span`
    font-size: 2rem;
    font-weight: 400;
    cursor: pointer;

    & + & {
        margin-top: 1rem;
    }
`

export const Logout = styled.span``
