import React from "react";
import styled from "@emotion/styled";
import Globe from "../images/bbbGlobe.png";
import ContentWrapper from "./ContentWrapper";

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const TextWrapper = styled.div`
  /* width: 60%; */
  flex: 1;

  h1 {
    font-size: 4vh;
    line-height: 4rem;
  }
  span {
    font-weight: 400;
  }

  h2 {
    font-weight: 400;
    font-size: 1.2rem;
  }
`;

const HeroImageWrapper = styled.div`
  /* width: 40%; */
  flex: 1;
  img {
    min-width: 200px;
  }
`;

const Hero = () => {
  return (
    <ContentWrapper>
      <HeroWrapper>
        <TextWrapper>
          <h1>
            Changing
            <span> the </span>
            World <br />
            Bit
            <span> by </span>
            Bit
          </h1>
          <h2>Invest and donate to charity simultaneously.</h2>
          <button>Buy now</button>
          <button>Learn more</button>
        </TextWrapper>
        <HeroImageWrapper>
          <img src={Globe} alt="Globe animation" />
        </HeroImageWrapper>
      </HeroWrapper>
    </ContentWrapper>
  );
};

export default Hero;
