import Skill from "./Skill";
import {
  SkillsContainer,
  SkillsGrid,
  SkillsHeader,
  SkillsSubHeader,
} from "./Skills.styles";

export default function Skills() {
  return (
    <SkillsContainer>
      <SkillsHeader>My Skills</SkillsHeader>
      <SkillsSubHeader>
        The level of each is just my guessing and where I think I can improve.
      </SkillsSubHeader>
      <SkillsGrid>
        <Skill name={"Javascript"} percents={95} />
        <Skill name={"React"} percents={90} />
        <Skill name={"Node.js"} percents={90} />
        <Skill name={"MongoDB"} percents={85} />
        <Skill name={"Typescript"} percents={80} />
        <Skill name={"Express"} percents={90} />
        {/* <Skill name={"PostgreSQL"} percents={65} /> */}
      </SkillsGrid>
    </SkillsContainer>
  );
}
