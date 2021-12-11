import styled from "styled-components"

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: calc(100vh - 7rem);
`

export const DeleteContainer = styled.div`
    display: flex;
    flex-direction: column;

    h2 {
        font-size: 2.5rem;
    }
    button {
        margin-top: 1rem;
        height: 4.5rem;
        border: none;
        outline: none;
        font-size: 1.6rem;
        color: #fff;
        background-color: #dc3545;
        cursor: pointer;
    }
`