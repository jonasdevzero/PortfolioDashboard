import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #101010;

    width: 100vw;
    height: 100vh;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`

export const FormTitle = styled.h1`
    font-size: 3.5rem;
    text-align: center;
    margin-bottom: 2rem;
`

export const Label = styled.label`
    font-size: 1.5rem;
    margin-bottom: .3rem;
`

export const Input = styled.input`
    width: 30rem;
    height: 4.5rem;

    font-size: 1.6rem;
    padding: 0 1rem;
    border: none;
    outline: none;
`

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;

    & + & {
        margin-top: 1rem;
    }
`

export const CheckBox = styled.input`
    width: 1.5rem;
    height: 1.5rem;
`

export const CheckBoxLabel = styled.label`
    font-size: 1.3rem;
    margin-left: .5rem;
`

export const CheckBoxWrapper = styled.div`
    display: flex;
    margin-top: 1.5rem;
`

export const Submit = styled.button`
    width: 30rem;
    height: 4.5rem;

    font-size: 1.7rem;
    margin-top: 2rem;
    border: none;
    outline: none;

    cursor: pointer;
`

export const StyledLink = styled.a`
    color: #777;
    font-size: 1.4rem;
    text-align: center;
    text-decoration: none;
    cursor: pointer;

    margin-top: 2rem;
`

export const Error = styled.strong`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    height: 4rem;
    display: flex;
    align-items: center;

    background-color: red;
    padding: 0 2rem;

    font-size: 1.7rem;
`