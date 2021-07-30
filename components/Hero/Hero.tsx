import Image from "next/image";
import {
  HeroContainer,
  HeroTypographyContainer,
  PortraitContainer,
  Header,
  SubHeader,
  Bold,
} from "./Hero.styles";

import profilePic from "../../assets/img/me.png";
import { useState } from "react";

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleLoad = () => {
    setImageLoaded(true);
  };

  return (
    <HeroContainer>
      <HeroTypographyContainer>
        <Header>
          I&apos;m <Bold>Yaniv</Bold>, web developer and creative thinker.
        </Header>
        <SubHeader>
          I enjoy turning complex problems into simple and beautiful. <br />
          When I&apos;m not coding, you&apos;ll find me traveling, photographing
          or working out in the park.
        </SubHeader>
      </HeroTypographyContainer>

      <PortraitContainer loaded={imageLoaded}>
        <Image
          src={profilePic}
          alt="Picture of me"
          onLoad={(e) => {
            const target = e.target as HTMLImageElement;
            target.src.indexOf("data:image/gif;base64") < 0 && handleLoad();
          }}
        />
      </PortraitContainer>
    </HeroContainer>
  );
}
