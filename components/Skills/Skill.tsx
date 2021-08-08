import { useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
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
  const [ref, inView] = useInView();
  const [animationStarted, setAnimationStarted] = useState(false);

  const SkillIconAnimation = useAnimation();
  const SkillProgressContainerAnimation = useAnimation();
  const SkillProgressAnimation = useAnimation();

  useEffect(() => {
    const startAnimation = async () => {
      SkillProgressContainerAnimation.start({ opacity: 1, width: "100%" });
      await SkillIconAnimation.start({
        borderRadius: ["0%", "15%", "30%", "50%"],
        rotate: [0, 360, 180, 0],
      });
      SkillProgressAnimation.start({ width: `${percents}%`, opacity: 1 });
    };
    if (inView && !animationStarted) {
      setAnimationStarted(true);
      startAnimation();
    }
  }, [
    SkillIconAnimation,
    SkillProgressAnimation,
    SkillProgressContainerAnimation,
    animationStarted,
    inView,
    percents,
  ]);

  return (
    <SkillContainer
      ref={ref}
      transition={{
        type: "tween",
        duration: 2,
      }}
    >
      <SkillIconContainer
        background={"#ffffff"}
        animate={SkillIconAnimation}
        transition={{
          type: "tween",
          duration: 2,
        }}
      >
        <Icon width={30} fill={color} />
      </SkillIconContainer>
      <SkillProgressContainer
        initial={{ opacity: 0, width: 0 }}
        animate={SkillProgressContainerAnimation}
        transition={{
          type: "tween",
          duration: 2,
        }}
      >
        <SkillProgress
          percents={percents}
          name={name}
          initial={{ width: 0, opacity: 0 }}
          animate={SkillProgressAnimation}
          transition={{
            type: "spring",
            mass: 20,
            damping: 150,
            stiffness: 100,
          }}
        />
      </SkillProgressContainer>
    </SkillContainer>
  );
}
