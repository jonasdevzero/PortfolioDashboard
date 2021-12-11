import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 100vh;

    padding: 3rem 0;
    overflow-y: scroll;
`

export const Message = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #222;
    width: 60rem;
    padding: 2rem;

    h4 {
        font-size: 2rem;
        margin-bottom: 1.5rem;
    }
    p {
        font-size: 1.7rem;
    }
    div.details {
        display: flex;
        justify-content: space-between;
        margin-top: 4rem;

        span {
            font-size: 1.4rem;;
        }

        button {
            background-color: transparent;
            border: none;
            outline: none;
            color: #fff;
            font-size: 1.8rem;
            cursor: pointer;
        }
    }

    &.viewed {
        opacity: .7;
    }
`