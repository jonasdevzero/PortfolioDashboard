import styled from "styled-components"

export const SkillsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 0 1.5rem;
`

export const SkillContainer = styled.div`
    display: flex;
    width: 32rem;
    height: 15rem;
    background-color: #222;
    margin: 1rem;
`

export const SkillBanner = styled.img`
    width: 40%;    
`

export const SkillContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;

    h4 {
        font-size: 2rem;
    }
    p {
        margin-top: 1rem;
        font-size: 1.5rem;
    }
`
