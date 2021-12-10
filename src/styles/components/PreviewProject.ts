import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;

    background-color: #252525;
    z-index: 1;
`

export const CloseButton = styled.span`
    position: fixed;
    top: 1.5rem;
    right: 1.5rem;
    font-size: 2.5rem;
    z-index: 3;

    cursor: pointer;
`

export const Article = styled.article`
    width: 70rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #191818;
    margin-top: 2rem;
    margin-bottom: 2rem;
    
    @media (max-width: 650px) {
        width: 40rem;
    };
    @media (max-width: 400px) {
        width: 100%;
        margin: 0;
    };
`;

export const SlideContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70vh;

    img {
        width: 100%;
        height: 70vh;
        object-fit: contain;
    };
    @media (max-width: 1000px) {
        height: 37rem;
    };
    @media (max-width: 650px) {
        height: 22rem;
    };
`;

export const Info = styled.div`
    width: 100%;
    margin-top: 3rem;
    padding: 3rem 4rem;
    padding-top: 0;
    video {
        width: 100%;
        object-fit: contain;
    }
`;

export const HtmlContainer = styled.div`
    width: 100%;
    padding: 3rem 4rem;
    padding-top: 0;

    line-height: 2.2rem;

    * + * {
        margin-top: 1.5rem;
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 3.5rem 0 1rem 0;
    }
`

export const Title = styled.h1`
    font-size: 3.8rem;
    margin-bottom: 1rem;
`;

export const Text = styled.p`
    font-size: 1.7rem;
    line-height: 2.2rem;
    text-align: justify;
    margin-bottom: 2.5rem;
    overflow-wrap: break-word;
`;

export const StyledLink = styled.a`
    font-size: 1.6rem;
    font-weight: 500;
    text-decoration: none;
    margin-right: 1rem;
    color: #777;
    transition: opacity .3s ease;
    
    &:hover {
        opacity: .7;
    };
`;
