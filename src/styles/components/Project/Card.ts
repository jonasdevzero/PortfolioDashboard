import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  max-width: 80rem;
  width: 100%;
  height: 27rem;

  background-color: #191818;
  margin-bottom: 4rem;
  border: solid 0.1rem #191818;

  @media (max-width: 750px) {
    flex-direction: column;
    max-width: 50rem;
    min-height: 50rem;
    height: 100%;
  }

  & + & {
    margin-top: 3rem;
  }
`;

export const Banner = styled.div<{ url: string }>`
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  width: 30rem;
  height: 27rem;
  cursor: pointer;

  @media (max-width: 750px) {
    width: 100%;
  } ;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 20rem;
  padding: 2rem;
  padding-bottom: 5rem;
`;

export const Name = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;
  cursor: pointer;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
`;

export const Link = styled.a`
  font-size: 1.6rem;
  font-weight: 500;
  text-decoration: none;
  margin-right: 1rem;
  color: #777;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
`;

export const Description = styled.p`
  font-size: 1.7rem;
  line-height: 2.3rem;
  text-align: justify;
  overflow-wrap: break-word;
  margin-top: 1.5rem;
`;

export const More = styled.span`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  margin-left: auto;
  svg {
    color: #fff;
    font-size: 3.2rem;
    cursor: pointer;
  }
`;
