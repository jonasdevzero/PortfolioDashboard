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

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .3);
`

export const ProjectOptions = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    width: 40rem;
    height: 40rem;
    overflow-y: scroll;

    background-color: #191818;
    border: solid .2rem #222;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 1.5rem;
        min-height: 5rem;
        background-color: #121212;

        h3 {
            font-size: 1.8rem;
        }
        svg {
            font-size: 2.2rem;
            cursor: pointer;
        }
    }
`

export const ProjectOption = styled.div`
    display: flex;
    align-items: center;
    margin: .5rem 2rem;
    padding: 1rem 0;
    border-bottom: solid .1rem #252525;

    transition: opacity .2s ease;
    cursor: pointer;

    :hover {
        opacity: .5;
    }
    img {
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        object-fit: cover;
    }
    h4 {
        font-size: 1.8rem;
        margin-left: 1rem;
    }
`

export const DeleteWindow = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    width: 40rem;
    height: 20rem;
    padding: 1rem;
    border: solid .2rem #222;

    background-color: #191818;

    strong {
        font-size: 2rem;
    }
    div.row {
        display: flex;
        margin-top: 2rem;

        button {
            width: 9rem;
            height: 3rem;
            background-color: #000;

            border: none;
            outline: none;
            color: #fff;
            cursor: pointer;
        }
        button.confirm  {
            background-color: #dc3545;
        }
        button.cancel {
            background-color: #28a745;
        }
        button + button {
            margin-left: 1rem;
        }
    }
`
