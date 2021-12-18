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
