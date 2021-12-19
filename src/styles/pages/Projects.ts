import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
`

export const Content = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 1.5rem;
`

export const OptionsBar = styled.div`
    display: flex;
    align-items: center;
    width: 80%;
    height: 7rem;
    background-color: #1f1f1f;

    margin-bottom: 1.5rem;
    padding: .7rem 1.5rem;
    border-radius: .3rem;
`

export const Option = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.5rem;
    height: 4.5rem;

    background-color: #000;
    border-radius: .5rem;
    transition: opacity .3s ease;
    cursor: pointer;

    svg {
        color: #fff;
        font-size: 2.2rem;
    }

    &:hover {
        opacity: .8;
    }
    & + & {
        margin-left: 1.5rem;
    }
    &.create {
        background-color: #28a745;
    }
    &.edit {
        background-color: #ffc107;
    }
    &.delete {
        background-color: #dc3545;
    }
`
