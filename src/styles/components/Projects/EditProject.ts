import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    min-height: 100vh;

    background-color: #252525;
`

export const Sidebar = styled.aside`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 21rem;

    padding: 2rem 0;
    background-color: #222;
    border-right: solid .1rem #353535;

    h3 {
        font-size: 2.5rem;
        margin-bottom: 2rem;
        padding: 0 2rem;
    }

    div.projects {
        display: flex;
        flex-direction: column;

        span {
            padding: 1rem;
            font-size: 1.6rem;
            cursor: pointer;
            border-top: solid .1rem #353535;

            &:hover {
                opacity: .7;
            }
        }
    }
`

export const Inner = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-left: 21rem;
    `

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-height: 7rem;
    
    background-color: #222;
    padding: 0 3rem;
    border-bottom: solid .1rem #353535;

    h2 {
        font-size: 2.5rem;
    }

    span > svg {
        font-size: 2.5rem;
        color: #fff;
        cursor: pointer;
    }
`

export const Error = styled.strong`
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
    right: 0;
    width: calc(100vw - 21rem);
    height: 4.5rem;

    font-size: 1.7rem;
    background-color: red;
    padding: 0 2rem;
`
