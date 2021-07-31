import {
  SkillContainer,
  SkillName,
  SkillProgress,
  SkillProgressContainer,
  LeftSideContainer,
  SkillIconContainer,
} from "./Skills.styles";

export default function Skill({
  name,
  percents,
  Icon,
  color,
}: {
  name: string;
  percents: number;
  Icon: any;
  color: string;
}) {
  return (
    <SkillContainer>
      <LeftSideContainer>
        <SkillIconContainer background={"#ffffff"}>
          <Icon width={30} fill={color} />
        </SkillIconContainer>
        <SkillName>{name}</SkillName>
      </LeftSideContainer>
      <SkillProgressContainer>
        <SkillProgress percents={percents} />
      </SkillProgressContainer>
    </SkillContainer>
  );
}
