import styled from "styled-components"

export const Options = styled.div`
    display: flex;
    margin: 1rem 0;
`

export const Option = styled.span`
    font-size: 1.4rem;
    padding: .7rem 1rem;

    border-radius: .3rem;
    transition: opacity .3s ease;
    cursor: pointer;

    & + & {
        margin-left: 1rem;
    }

    &:hover {
        opacity: .7;;
    }
    &.preview {
        background-color: #111;
    }
    &.create {
        background-color: #28a745;
    }
    &.cancel {
        background-color: #dc3545;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 80rem;

    padding: 2rem;
    margin-bottom: 5rem;;
    border-radius: .5rem;
    background-color: #222;

    .row {
        display: flex;
        flex-direction: row;
    }
    .row + .row {
        margin-top: 1rem;
    }
    .column {
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
        margin-left: 1rem;
    }
`

export const ImagesContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
`

export const AddImageFieldBtn = styled.button`
    height: 4.5rem;

    color: #fff;
    font-size: 1.5rem;
    background-color: #333;
    border: none;
    outline: none;
    margin: 1rem 0;
    cursor: pointer;
`

export const RemoveImageFieldBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.5rem;
    height: 4.5rem;

    background-color: #333;
    margin-left: 1rem;
    border: none;
    outline: none;
    cursor: pointer;

    svg {
        color: #dc3545;
        font-size: 2.5rem;
    }
`

export const TextEditorContainer = styled.div`
    margin-top: 20px;
    font-size: 100%;
    color: #000;

    div.rdw-editor-main {
        color: #fff;
        min-height: 10rem;
        background-color: #333;
        margin-top: 20px;
        padding: 0 10px;
    }
`

export const Error = styled.strong`
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 4.5rem;

    font-size: 1.7rem;
    background-color: red;
    padding: 0 2rem;
`
