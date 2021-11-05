import styled from "@emotion/styled";
import React from "react";
import Logo from "./_ui/Logo";

import ContentWrapper from "./ContentWrapper";

const FooterWrapper = styled.div`
  background: #220969;
  width: 100vw;
  z-index: 999;
  position: relative;
  display: flex;
  flex-direction: column;

  .content {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    padding-top: 4rem;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      padding-top: 2.5rem;
    }

    div {
      flex-basis: 100%;
    }
  }

  .brand {
    @media (max-width: 768px) {
      margin-bottom: 1rem;
      align-items: center;
    }

    .tagline {
      margin-top: 1rem;
      font-size: 0.85rem;
    }
  }

  .links {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0 3rem;
    margin: 0 4rem;

    @media (max-width: 768px) {
      margin: 0;
      grid-template-columns: repeat(2, 1fr);
    }

    a {
      text-decoration: none;
      color: white;
      margin-right: 0.75rem;
      margin-bottom: 1rem;
    }
  }

  .social {
    display: flex;

    .icon {
      margin-left: 1rem;
      img {
        max-width: 25px;
      }
    }
  }

  .copyright {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    width: 100%;
    font-size: 0.7rem;
    background-color: #220969;
  }
`;

const Footer = (content) => {
  content = content.content;
  console.log(content);
  return (
    <FooterWrapper>
      <ContentWrapper className="content">
        <div className="brand">
          <Logo />
          <p className="tagline">
            Changing the world
            <br />
            Bit by bit.
          </p>
        </div>
        <div className="links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#charity">Charity</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
          <a href="#contact">Whitepaper</a>
        </div>
        <div className="social">
          {content.map((item) => {
            return (
              <div className="icon">
                {item.icon && item.url ? (
                  <a href={item.url}>
                    <img src={item.icon.url} alt="" />
                  </a>
                ) : null}
              </div>
            );
          })}
        </div>
      </ContentWrapper>
      <span className="copyright">© 2021 BitByBit</span>
    </FooterWrapper>
  );
};

export default Footer;
