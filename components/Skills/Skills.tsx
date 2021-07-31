import Skill from "./Skill";
import {
  SkillsContainer,
  SkillsGrid,
  SkillsHeader,
  SkillsSubHeader,
} from "./Skills.styles";

import JavascriptIcon from "../../assets/img/icons/javascript.svg";
import ReactIcon from "../../assets/img/icons/react.svg";
import NodeJsIcon from "../../assets/img/icons/nodedotjs.svg";
import MongodbIcon from "../../assets/img/icons/mongodb.svg";
import TypescriptIcon from "../../assets/img/icons/typescript.svg";
import ExpressIcon from "../../assets/img/icons/express.svg";

export default function Skills() {
  return (
    <SkillsContainer>
      <SkillsHeader>My Skills</SkillsHeader>
      <SkillsSubHeader>
        The level of each is just my guessing and where I think I can improve.
      </SkillsSubHeader>
      <SkillsGrid>
        <Skill
          name={"Javascript"}
          Icon={JavascriptIcon}
          color={"#F7DF1E"}
          percents={95}
        />
        <Skill
          name={"React"}
          Icon={ReactIcon}
          color={"#61DAFB"}
          percents={90}
        />
        <Skill
          name={"Node.js"}
          Icon={NodeJsIcon}
          color={"#339933"}
          percents={90}
        />
        <Skill
          name={"MongoDB"}
          Icon={MongodbIcon}
          color={"#47A248"}
          percents={85}
        />
        <Skill
          name={"Typescript"}
          Icon={TypescriptIcon}
          color={"#3178C6"}
          percents={80}
        />
        <Skill
          name={"Express"}
          Icon={ExpressIcon}
          color={"#ffffff"}
          percents={90}
        />
        {/* <Skill name={"PostgreSQL"} percents={65} /> */}
      </SkillsGrid>
    </SkillsContainer>
  );
}
