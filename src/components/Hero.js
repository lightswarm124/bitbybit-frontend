import React from "react";
import styled from "@emotion/styled";
import ContentWrapper from "./ContentWrapper";
import Button from "../components/_ui/Button";
import "../styles/globe.css";
import "../styles/stars.css";
import Logo from "./_ui/Logo";

const HeroBackground = styled.div`
  background: #0b0321;
  #home {
    z-index: 99999;
  }
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
  margin: 1rem 0;

  h1 {
    font-size: 4vh;
    line-height: 4rem;
  }
  span {
    font-weight: 300;
  }

  h2 {
    font-weight: 400;
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    h1 {
      line-height: 2.5rem;
      font-size: 5vh;
    }
    h2 {
      margin-top: 1rem;
      font-size: 3vh;
      line-height: 1.8rem;
      margin-bottom: 2rem;
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
  z-index: 1;
  position: relative;
  flex: 1;

  #earth {
    margin: 0 auto;
    z-index: 99;
  }
`;

const Hero = ({ onClickBuy, content }) => {
  const handleClick = () => {
    onClickBuy();
  };

  return (
    <HeroBackground>
      <div id="stars3" />
      <ContentWrapper id="home">
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
            <h2>{content.subheader}</h2>
            <div className="buttons-wrapper">
              <Button variant="primary" onClick={handleClick}>
                Buy now
              </Button>
              <a href="#about">
                <Button
                  href="https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain"
                  rel="noreferrer"
                  variant="secondary"
                  target="_blank"
                >
                  Setup help
                </Button>
              </a>
              <Logo />
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
