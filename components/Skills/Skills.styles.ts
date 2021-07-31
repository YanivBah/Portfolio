import styled, { keyframes, css } from "styled-components";

export const SkillsContainer = styled.div`
  background: ${(props) => props.theme.colors.primary};
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 0px;
  padding: 20px 6vw;
  gap: 40px;

  @media (max-width: 1110px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 600px) {
    gap: 60px;
  }
`;

export const SkillsHeader = styled.h2`
  text-align: center;
  font-size: 35px;
  color: ${(props) => props.theme.colors.typography};
  padding-top: 30px;
`;

export const SkillsSubHeader = styled.p`
  color: ${(props) => props.theme.colors.typography};
  text-align: center;
  padding: 10px 6vw 30px 6vw;
`;

// Skill
export const SkillContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LeftSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  width: 110px;
`;

export const SkillIconContainer = styled.div<{ background: string }>`
  padding: 15px;
  border-radius: 40% 60% 67% 33% / 50% 39% 61% 50%;
  background: ${(props) => props.theme.colors.typography};
  margin-bottom: 7px;
  & svg {
    filter: saturate(5) contrast(1);
    border-radius: 20%;
  }
`;

export const SkillName = styled.p`
  display: inline-block;
  color: ${(props) => props.theme.colors.typography};
  font-size: 20px;
  font-weight: 200;

  @media (max-width: 600px) {
    font-size: 16px;
    padding: 3px 8px;
  }
`;

export const progressIncrease = (percents: number) => keyframes`
    0% {
        width: 0;
    }

    /* 80% {
        width: 100%;
    } */

    100% {
        width: ${percents}%
    }
`;

export const SkillProgressContainer = styled.div`
  width: 100%;
  height: 22px;
  outline: 1px solid white;
  /* background: ${(props) => props.theme.colors.background}; */
`;

export const SkillProgress = styled.div<{ percents: number }>`
  background: ${(props) => props.theme.colors.background};
  height: 22px;
  width: 0;
  animation: ${(props) => progressIncrease(props.percents)} 1s linear forwards;
`;
