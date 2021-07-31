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

export const SkillIconContainer = styled.div<{ background: string }>`
  padding: 12px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.typography};
  z-index: 2;
  & svg {
    filter: saturate(5) contrast(1);
    border-radius: 20%;
  }
`;

export const progressIncrease = (percents: number) => keyframes`
    0% {
        width: 0;
    }
    100% {
        width: ${percents}%
    }
`;

export const SkillProgressContainer = styled.div`
  width: 100%;
  height: 22px;
  outline: 1px solid ${(props) => props.theme.colors.typography};
  transform: translateX(-13px);
  z-index: 1;
  border-radius: 10px;
`;

export const SkillProgress = styled.div<{ percents: number; name: string }>`
  background: ${(props) => props.theme.colors.typography};
  height: 22px;
  width: 0;
  border-radius: 10px;
  animation: ${(props) => progressIncrease(props.percents)} 2s ease-in-out
    forwards;
  position: relative;

  &::after {
    content: "${(props) => props.name}";
    color: ${(props) => props.theme.colors.primaryLight};
    position: absolute;
    left: 15px;
    font-size: 14px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
