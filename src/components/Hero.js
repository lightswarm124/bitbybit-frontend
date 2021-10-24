import styled from "@emotion/styled";
import React from "react";
import Globe from "../images/bbbGlobe.png";

const HeroWrapper = styled("div")`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
`;

const Title = styled("h1")`
  font-size: 4vh;
  line-height: 4rem;
`;

const TitleAccent = styled("span")`
  font-weight: 400;
`;

const Subtitle = styled("h2")`
  font-weight: 400;
  font-size: 1.2rem;
`;

const HeroImageWrapper = styled("div")`
  width: 40vw;
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <div>
        <Title>
          Changing
          <TitleAccent> the </TitleAccent>
          World <br />
          Bit
          <TitleAccent> by </TitleAccent>
          Bit
        </Title>
        <Subtitle>Invest and donate to charity simultaneously.</Subtitle>
        <button>Buy now</button>
      </div>
      <HeroImageWrapper>
        <img src={Globe} alt="Globe animation" />
      </HeroImageWrapper>
    </HeroWrapper>
  );
};

export default Hero;
