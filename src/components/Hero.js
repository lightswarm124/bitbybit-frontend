import React from "react";
import styled from "@emotion/styled";
import ContentWrapper from "./ContentWrapper";
import Button from "../components/_ui/Button";
import "../styles/globe.css";

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 2rem 0;
`;

const TextWrapper = styled.div`
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

  .buttons-wrapper {
    margin-top: 2rem;
    button {
      margin-right: 2rem;
    }
  }
`;

const HeroImageWrapper = styled.div`
  z-index: 9999;
  flex: 1;
  img {
    max-width: 400px;
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
          <div className="buttons-wrapper">
            <Button variant="primary">Buy now</Button>
            <Button variant="secondary">Learn more</Button>
          </div>
        </TextWrapper>
        <HeroImageWrapper>
          <div id="earth" />
        </HeroImageWrapper>
      </HeroWrapper>
    </ContentWrapper>
  );
};

export default Hero;
