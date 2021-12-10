import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    min-height: 100vh;

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
`

export const Options = styled.div`
    display: flex;
    margin: 1rem 0;
`

export const Option = styled.span`
    font-size: 1.4rem;
    padding: .7rem 1rem;

    background-color: #111;
    border-radius: .3rem;
    transition: opacity .3s ease;
    cursor: pointer;

    & + & {
        margin-left: 1rem;
    }

    &:hover {
        opacity: .7;;
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
        color: red;
        font-size: 2.5rem;
    }
`

export const TextEditorContainer = styled.div`
    margin-top: 2rem;
    font-size: 100%;
    color: #000;

    div.rdw-editor-main {
        color: #fff;
    }
    div.preview {
        margin-top: 2rem;
        color: #fff;
    }

    p {
        font-size: 16px;
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
