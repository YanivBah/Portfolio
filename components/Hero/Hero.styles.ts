import styled, { keyframes, css } from "styled-components";

export const HeroContainer = styled.header`
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  padding: 100px 6vw 0 6vw;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  background: ${(props) => props.theme.colors.background};
  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.1);

  @media (max-width: 880px) {
    flex-direction: column;
  }
`;

export const HeroTypographyContainer = styled.div`
  width: 50%;
  @media (max-width: 880px) {
    width: 100%;
  }
`;

const slideToTop = keyframes`
  from {
    transform: scaleX(-1) translateY(500px);
    opacity: 0%;
  }

  to {
    transform: scaleX(-1) translateY(0);
    opacity: 100%;
  }
`;

export const PortraitContainer = styled.div<{ loaded: boolean }>`
  overflow: hidden;
  transition: height 1.5s;
  position: relative;
  margin: 0 auto;
  min-height: 350px;
  max-height: 420px;
  @media (max-width: 880px) {
    margin: 0 0 0 auto;
    width: fit-content;
  }

  & div:last-child {
    transform: scaleX(-1) translateY(500px);
    animation: ${slideToTop} 1s ease-out forwards;

    & img {
      max-height: 600px;
      object-fit: contain;
    }
    ${(props) =>
      props.loaded &&
      css`
        position: relative;
        &::before {
          content: "";
          position: absolute;
          background: red;
          right: 50px;
          top: 20px;
          width: 70%;
          height: 50%;
          border-radius: 70% 30% 30% 70% / 60% 40% 60% 60%;
          box-shadow: 0 0 4px 3px rgba(0, 0, 0, 0.1);
          background-image: linear-gradient(
            19deg,
            ${(props) => props.theme.colors.primaryDark} 0%,
            ${(props) => props.theme.colors.primaryLight} 100%
          );
        }
      `}
  }
`;

export const Header = styled.h1`
  font-size: 40px;
  font-weight: 700;
  background: -webkit-linear-gradient(
    ${(props) => props.theme.colors.primary},
    ${(props) => props.theme.colors.primaryLight}
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 880px) {
    font-size: 30px;
    /* text-align: center; */
  }
`;

export const Bold = styled.span`
  font-weight: 700;
  color: transparent;
  background: ${(props) => props.theme.colors.background};
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${(props) => props.theme.colors.primaryDark};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  &:hover {
    background: unset;
    opacity: 80%;
  }
`;

export const SubHeader = styled.p`
  margin-top: 30px;
  font-size: 18px;
  font-weight: 300;

  @media (max-width: 880px) {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 15px;
    /* text-align: center; */
  }
`;
