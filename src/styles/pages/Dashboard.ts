import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: calc(100vh - 7rem);

    h1 {
        font-size: 4rem;
        color: #444;

    }
`