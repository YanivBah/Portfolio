import {
  SkillContainer,
  SkillProgress,
  SkillProgressContainer,
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
      <SkillIconContainer background={"#ffffff"}>
        <Icon width={30} fill={color} />
      </SkillIconContainer>
      <SkillProgressContainer>
        <SkillProgress percents={percents} name={name} />
      </SkillProgressContainer>
    </SkillContainer>
  );
}
