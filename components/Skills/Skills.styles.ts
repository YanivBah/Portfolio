import styled, { keyframes, css } from "styled-components";
import { motion } from "framer-motion";

export const SkillsContainer = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${(props) => props.theme.colors.primary};
  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.1);
`;

export const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  padding: 20px 6vw;

  @media (max-width: 1110px) {
    grid-template-columns: 1fr;
  }
`;

export const SkillsHeader = styled.h2`
  font-size: 35px;
  color: ${(props) => props.theme.colors.typography};
  padding: 30px 6vw 0 6vw;
`;

export const SkillsSubHeader = styled.p`
  color: ${(props) => props.theme.colors.typography};
  padding: 10px 6vw 30px 6vw;
`;

// Skill
export const SkillContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

export const SkillIconContainer = styled(motion.div)<{ background: string }>`
  padding: 12px;
  background: ${(props) => props.theme.colors.typography};
  z-index: 2;
  & svg {
    filter: saturate(5) contrast(1);
    border-radius: 20%;
  }
`;

export const SkillProgressContainer = styled(motion.div)`
  height: 22px;
  outline: 1px solid ${(props) => props.theme.colors.typography};
  transform: translateX(-13px);
  z-index: 1;
  border-radius: 10px;
`;

export const SkillProgress = styled(motion.div)<{
  percents: number;
  name: string;
}>`
  background: ${(props) => props.theme.colors.typography};
  height: 22px;
  width: 0;
  border-radius: 10px;
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
