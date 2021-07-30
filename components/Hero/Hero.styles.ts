import styled, { keyframes, css } from "styled-components";
// import Image from "next/image";

export const HeroContainer = styled.header`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 6vw 0 6vw;
  /* height: 100vh; */
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
`;

export const HeroTypographyContainer = styled.div`
  width: 60%;
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
  width: 30%;
  height: 300px;
  overflow: hidden;
  transition: height 1.5s;
  position: relative;

  ${(props) =>
    props.loaded &&
    css`
      &:hover {
        height: 380px;
      }
    `}

  & div:last-child {
    transform: scaleX(-1) translateY(500px);
    animation: ${slideToTop} 1.5s linear forwards;
    ${(props) =>
      props.loaded &&
      css`
        position: relative;
        &::before {
          content: "";
          position: absolute;
          background: red;
          left: 0;
          top: 20px;
          width: 90%;
          height: 300px;
          border-radius: 70% 30% 30% 70% / 60% 40% 60% 40%;
          box-shadow: 0 0 15px 3px rgba(0, 0, 0, 0.13);
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
    opacity: 50%;
    /* color: unset; */
  }
`;

export const SubHeader = styled.p`
  margin-top: 30px;
  font-size: 18px;
  font-weight: 300;
`;
