import {
  SkillContainer,
  SkillName,
  SkillProgress,
  SkillProgressContainer,
} from "./Skills.styles";

export default function Skill({
  name,
  percents,
}: {
  name: string;
  percents: number;
}) {
  return (
    <SkillContainer>
      <SkillName>
        <p>{name}</p>
      </SkillName>
      <SkillProgressContainer>
        <SkillProgress percents={percents} />
      </SkillProgressContainer>
    </SkillContainer>
  );
}
