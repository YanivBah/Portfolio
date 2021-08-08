import Image from "next/image";
import {
  HeroContainer,
  HeroTypographyContainer,
  PortraitContainer,
  Header,
  Text,
} from "./Hero.styles";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imageRef && imageRef.current) {
      setImageLoaded(true);
    }
  }, [imageRef]);

  return (
    <HeroContainer>
      <HeroTypographyContainer
        initial={{ x: -300, opacity: 0 }}
        animate={{
          x: imageLoaded ? 0 : -300,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          mass: 20,
          damping: 75,
          stiffness: 150,
        }}
      >
        <Text fontSize={16} margin={"0 0 10px 0"}>
          Hi There 👋🏼, I&apos;m
        </Text>
        <Header>Yaniv</Header>
        <Text
          fontSize={16}
          margin={"20px 0"}
          fontWeight={700}
          capitalize={true}
        >
          Developer + Designer
        </Text>

        <Text>
          I&apos;m a design minded full-stack developer <br /> based in Israel.
        </Text>
        {/* <SubHeader>
          I enjoy turning complex problems into simple and beautiful. <br />
          When I&apos;m not coding, you&apos;ll find me hiking, photographing or
          doing geeky stuff.
        </SubHeader> */}
      </HeroTypographyContainer>

      <PortraitContainer
        initial={{ x: 500, opacity: 0 }}
        animate={{ x: imageLoaded ? 0 : 500, opacity: 1 }}
        transition={{
          type: "spring",
          mass: 20,
          damping: 75,
          stiffness: 150,
        }}
      >
        <img src="/img/me.png" alt="Picture of me" ref={imageRef} />
      </PortraitContainer>
    </HeroContainer>
  );
}
