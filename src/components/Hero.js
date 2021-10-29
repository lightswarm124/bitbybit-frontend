import React from "react";
import styled from "@emotion/styled";
import ContentWrapper from "./ContentWrapper";
import Button from "../components/_ui/Button";
import "../styles/globe.css";
import "../styles/stars.css";

const HeroBackground = styled.div`
  background: #0b0321;
`;

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 7rem 0;

  @media (max-width: 768px) {
    padding: 1.5rem 0;
  }
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

  @media (max-width: 768px) {
    h1 {
      line-height: 2.2rem;
    }
    h2 {
      font-size: 1rem;
      line-height: 1.8rem;
    }
  }
  .buttons-wrapper {
    margin-top: 2rem;
    button {
      margin-right: 2rem;
    }
    @media (max-width: 768px) {
      margin-top: 1rem;
      display: flex;

      button {
        font-size: 0.85rem;
      }
    }
  }
`;

const HeroImageWrapper = styled.div`
  z-index: 99;
  position: relative;
  flex: 1;
  #earth {
    margin: 0 auto;
    z-index: 99;
  }
`;

const Hero = ({ onClickBuy }) => {
  const handleClick = () => {
    onClickBuy();
  };
  return (
    <HeroBackground>
      <div id="stars3" />
      <ContentWrapper>
        <HeroWrapper>
          <TextWrapper>
            <h1>
              Changing
              <span> the </span>
              World <br />
              Bit
              <span> by </span>
              bit
            </h1>
            <h2>Invest and donate to charity simultaneously.</h2>
            <div className="buttons-wrapper">
              <Button variant="primary" onClick={handleClick}>
                Buy now
              </Button>
              <a href="#about">
                <Button
                  onClick="location.href='https://bitbybit.org/#about';"
                  variant="secondary"
                >
                  Learn more
                </Button>
              </a>
            </div>
          </TextWrapper>
          <HeroImageWrapper>
            <div id="earth" />
          </HeroImageWrapper>
        </HeroWrapper>
      </ContentWrapper>
    </HeroBackground>
  );
};

export default Hero;
