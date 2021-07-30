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
  font-size: 30px;
  color: ${(props) => props.theme.colors.backgroundLight};
  padding-top: 30px;
`;

export const SkillsSubHeader = styled.p`
  color: ${(props) => props.theme.colors.backgroundLight};
  text-align: center;
  padding: 10px 6vw 30px 6vw;
`;

// Skill
export const SkillContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SkillName = styled.div`
  width: 180px;

  & p {
    display: inline-block;
    color: ${(props) => props.theme.colors.primaryDark};
    background: ${(props) => props.theme.colors.background};
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 20px;

    @media (max-width: 600px) {
      font-size: 16px;
      padding: 3px 8px;
    }
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
