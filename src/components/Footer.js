import styled from "@emotion/styled";
import React from "react";
import Logo from "../images/bbbLogo.png";
import ContentWrapper from "./ContentWrapper";

const FooterWrapper = styled.div`
  background: #220969;
  width: 100vw;
  z-index: 999;
  position: relative;
  height: 30vh;
  display: flex;
  flex-direction: column;

  .content {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;

    div {
      flex-basis: 100%;
    }
  }

  .brand {
    img {
      width: 65%;
      margin-bottom: 1rem;
    }

    p {
      font-size: 0.8rem;
    }
  }

  .links {
    display: flex;
    flex-direction: column;
    margin: 0 4rem;

    @media (max-width: 768px) {
      margin: 0 1rem;
    }

    a {
      text-decoration: none;
      color: white;
      margin-right: 0.75rem;
      margin-bottom: 1rem;
    }
  }

  .copyright {
    margin: 0 auto;
    margin-top: 3rem;
    font-size: 0.7rem;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <ContentWrapper className="content">
        <div className="brand">
          <img src={Logo} alt="" />
          <p>
            Changing the world
            <br />
            Bit by bit.
          </p>
        </div>
        <div className="links">
          <a href="#home">Home</a>
          <a href="#About">About</a>
          <a href="#Charity">Charity</a>
        </div>
        <div className="links">
          <a href="#Roadmap">Roadmap</a>
          <a href="#Contact">Contact</a>
        </div>
        <div className="social"></div>
      </ContentWrapper>
      <span className="copyright">© 2021 BitByBit</span>
    </FooterWrapper>
  );
};

export default Footer;
