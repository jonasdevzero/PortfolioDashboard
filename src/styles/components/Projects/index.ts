import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    padding-bottom: 3rem;
`

export const Optionsbar = styled.div`
    display: flex;
    align-items: center;
    width: calc(100% - 6rem);
    height: 7rem;

    margin: 3rem;
    padding: .7rem 1.5rem;
    border-radius: .5rem;

    background-color: #333;
`

export const Option = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5rem;
    height: 5rem;

    border-radius: .5rem;
    transition: opacity .3s ease;
    cursor: pointer;

    svg {
        font-size: 2.5rem;
    }

    &:hover {
        opacity: .7;
    }

    & + & {
        margin-left: 1.5rem;
    }

    &.create {
        background-color: #28a745;
    }
    &.update {
        background-color: #ffc107;
    }
    &.delete {
        background-color: #dc3545;
    }
`

export const Project = styled.div`
    display: flex;
    width: 70rem;
    height: 25rem;

    background-color: #333;

    & + & {
        margin-top: 3rem;
    }
`

export const ProjectBanner =  styled.div<{ url: string }>`
    width: 25rem;
    height: 25rem;
    background-color: #272727;

    background-image: url(${({ url }) => url});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

export const ProjectInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
`

export const ProjectName = styled.h2`
    font-size: 2.5rem;
    font-weight: 400;
    margin-bottom: 1rem;
`

export const ProjectLinks = styled.div`
    display: flex;
    margin-bottom: 2rem;
`

export const ProjectLink =  styled.a`
    font-size: 1.8rem;
    color: lightgray;
    text-decoration: none;
    transition: opacity .3s ease;

    &:hover {
        opacity: .7;
    }

    & + & {
        margin-left: 1rem;
    }
`

export const ProjectDescription = styled.p`
    font-size: 2rem;
    /* text-align: justify; */
`
