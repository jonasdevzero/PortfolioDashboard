import styled from "styled-components"

export const Container = styled.header`
    display: flex;
    align-items: center;
    width: 100%;
    height: 7rem;

    background-color: #1f1f1f;
    padding: 0 3rem;

    h3 {
        font-size: 2.2rem;
        margin-right: 5rem;
    }
`

export const StyledLink = styled.a`
    font-size: 1.6rem;
    color: #eee;
    text-decoration: none;
    transition: opacity .2s ease;
    
    :hover {
        opacity: .7;
    }
    & + & {
        margin-left: 1.5rem;
    }
`
