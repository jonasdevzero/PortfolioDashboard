import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    background-color: #252525;
`

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 7rem;

    padding: 0 4rem;
    background-color: #222;
`

export const Title = styled.h1`
    font-size: 2.8rem;
    font-weight: 400;
`

export const CloseButton = styled.span`
    font-size: 2.5rem;
    cursor: pointer;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    margin-top: 2rem;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 80rem;

    padding: 2rem;
    border-radius: .5rem;
    background-color: #222;

    div.row {
        display: flex;
        flex-direction: row;
        width: 100%;
    }
    div.column {
        display: flex;
        flex-direction: column;
    }
`

export const BannerPreview = styled.div<{ url: string }>`
    width: 25rem;
    height: 25rem;
    background-color: #272727;
    margin-bottom: 1rem;

    background-image: url(${({ url }) => url});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

export const BasicData = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 2rem;
`

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    & + & {
        margin-top: 1rem;
    }
`

export const Label = styled.label`
    font-size: 1.5rem;
    margin-bottom: .5rem;
`

export const Input = styled.input`
    width: 100%;
    height: 4.5rem;

    font-size: 1.6rem;
    color: #eee;
    background-color: #333;
    padding: 0 1rem;
    border: none;
    outline: none;
`

export const Textarea = styled.textarea`
    width: 100%;
    min-height: 7rem;
    resize: none;

    font-size: 1.6rem;
    color: #eee;
    background-color: #333;
    padding: .7rem;
    border: none;
    outline: none;
`

export const RowWrapper = styled.div`
    display: flex;
    width: 100%;
    margin-top: 1rem;

    & + ${InputWrapper} {
        margin-top: 1rem;
    }

    ${InputWrapper} + ${InputWrapper} {
        margin-top: 0;
        margin-left: .7rem;
    }
`

export const TextEditorContainer = styled.div`

`

export const Submit = styled.button`
    width: 100%;
    height: 5rem;

    background-color: #333;
`
