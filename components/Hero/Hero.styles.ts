import styled, { keyframes, css } from "styled-components";
import { motion } from "framer-motion";

export const HeroContainer = styled.header`
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  padding: 0 6vw 0 6vw;
  display: flex;
  height: 100vh;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.background};
  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.1);

  @media (max-width: 880px) {
    flex-direction: column;
  }
`;

export const HeroTypographyContainer = styled(motion.div)`
  width: 50%;
  align-self: center;
  @media (max-width: 880px) {
    padding: 100px 0 50px 0;
    width: 100%;
    text-align: center;
  }
`;

export const PortraitContainer = styled(motion.div)`
  display: flex;
  position: relative;
  align-self: flex-end;

  @media (max-width: 880px) {
    margin: 0 0 0 auto;
    width: fit-content;
  }

  & img {
    transform: scaleX(-1);
    max-height: calc(85vh);
    max-width: 100%;
    object-fit: contain;
  }

  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 15px;
    width: 90%;
    height: 80%;
    border-radius: 70% 30% 30% 70% / 40% 40% 60% 60%;
    box-shadow: 0 0 4px 3px rgba(0, 0, 0, 0.1);
    background-image: linear-gradient(
      19deg,
      ${(props) => props.theme.colors.primaryDark} 0%,
      ${(props) => props.theme.colors.primaryLight} 100%
    );
  }
`;

export const Header = styled.h1`
  font-size: 60px;
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
  /* color: transparent; */
  /* background: ${(props) => props.theme.colors.background}; */
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

export const Text = styled.span<{
  fontSize?: number;
  margin?: string;
  fontWeight?: number;
  capitalize?: boolean;
}>`
  display: block;
  font-weight: ${(props) => props.fontWeight || 300};
  font-size: ${(props) => props.fontSize || 16}px;
  margin: ${(props) => props.margin || 0};
  text-transform: ${(props) => {
    if (props.capitalize !== undefined) {
      return props.capitalize ? "uppercase" : "lowercase";
    }
  }};
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
