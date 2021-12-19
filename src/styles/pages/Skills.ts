import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1.5rem;
`;

export const OptionsBar = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  height: 7rem;
  background-color: #1f1f1f;

  margin-bottom: 1.5rem;
  padding: 0.7rem 1.5rem;
  border-radius: 0.3rem;
`;

export const Option = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.5rem;
  height: 4.5rem;

  background-color: #000;
  border-radius: 0.5rem;
  transition: opacity 0.3s ease;
  cursor: pointer;

  svg {
    color: #fff;
    font-size: 2.2rem;
  }

  &:hover {
    opacity: 0.8;
  }
  & + & {
    margin-left: 1.5rem;
  }
  &.create {
    background-color: #28a745;
  }
  &.edit {
    background-color: #ffc107;
  }
  &.delete {
    background-color: #dc3545;
  }
`;

export const SkillsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

export const Skill = styled.div`
  display: flex;
  width: 32rem;
  height: 15rem;
  background-color: #222;
  margin: 1rem;
`;

export const SkillBanner = styled.img`
  width: 40%;
`;

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
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .3);
`

export const SkillOptions = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    width: 40rem;
    height: 40rem;
    overflow-y: scroll;

    background-color: #191818;
    border: solid .2rem #252525;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 1.5rem;
        min-height: 5rem;
        background-color: #121212;

        h3 {
            font-size: 1.8rem;
        }
        svg {
            font-size: 2.2rem;
            cursor: pointer;
        }
    }
`

export const SkillOption = styled.div`
    display: flex;
    align-items: center;
    margin: .5rem 2rem;
    padding: 1rem 0;
    border-bottom: solid .1rem #bbb;

    transition: opacity .2s ease;
    cursor: pointer;

    :hover {
        opacity: .5;
    }
    img {
        width: 5rem;
        height: 5rem;
        object-fit: cover;
    }
    h4 {
        font-size: 1.8rem;
        margin-left: 1rem;
    }
`

export const DeleteWindow = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    width: 40rem;
    height: 20rem;
    padding: 1rem;
    border: solid .2rem #222;

    background-color: #191818;

    strong {
        font-size: 2rem;
    }
    div.row {
        display: flex;
        margin-top: 2rem;

        button {
            width: 9rem;
            height: 3rem;
            background-color: #000;

            border: none;
            outline: none;
            color: #fff;
            cursor: pointer;
        }
        button.confirm  {
            background-color: #dc3545;
        }
        button.cancel {
            background-color: #28a745;
        }
        button + button {
            margin-left: 1rem;
        }
    }
`
