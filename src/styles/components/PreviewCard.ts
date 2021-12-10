import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;

    background-color: #252525;
`

export const CloseButton = styled.span`
    position: fixed;
    top: 1.5rem;
    right: 1.5rem;
    font-size: 2.5rem;
    z-index: 3;

    cursor: pointer;
`

export const Project = styled.section`
    display: flex;
    align-items: center;
    max-width: 85rem;
    width: 100%;
    height: 27rem;
    position: relative;

    border: solid .1rem #191818;
    background-color: #191818;

    @media (max-width: 900px) {
        flex-direction: column;
        width: max-content;
        height: 45rem;
        padding: 0;
        border: 0;
        background-color: #191818;
    }; 

    @media (max-width: 360px) {
        width: 100%;
        height: 40rem;
    }; 
`;

interface IPojectBanner {
    image: string;
};
export const ProjectBanner = styled.div<IPojectBanner>`
    background-image: url(${({ image }) => image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 30rem;
    height: 27rem;
    transition: background-image .5s ease-in-out;
    cursor: pointer;
    
    @media (max-width: 900px) {
        background-image: url(${({ image }) => image}) !important;
        border-radius: 0 0 .4rem .4rem;
    };
    @media (max-width: 360px) {
        width: 100%;
        background-position-y: top;
    };
`;

export const ProjectDetails = styled.div`
    display: flex;
    flex-direction: column; 
    flex: 1;
    height: 20rem;
    padding: 2rem;
    @media (max-width: 900px) {
        width: 36rem;
        flex: 1;
        border-radius: 0 0 .4rem .4rem;
    };
    @media (max-width: 360px) {
        width: 100%;
        padding-top: 0;
    };
`;

export const ProjectLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ProjectLink = styled.span`
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    margin-left: auto;

    svg {
        color: #fff;
        font-size: 3rem;
        cursor: pointer;
    }
`

// --------------------------------

export const ProjectName = styled.h2`
    font-size: 3rem;
    margin-bottom: 1rem;
`;

interface IText {
    maxWidth?: string;
}
export const ProjectDescription = styled.p<IText>`
    font-size: 1.7rem;
    line-height: 2.3rem;
    text-align: justify;
    overflow-wrap: break-word;
    margin-top: 1.5rem;
`;

export const StyledLink = styled.a`
    font-size: 1.6rem;
    font-weight: 500;
    text-decoration: none;
    margin-right: 1rem;
    color: #777;
    transition: color .3s ease;
    &:hover {
        color: #444;
    };
`;