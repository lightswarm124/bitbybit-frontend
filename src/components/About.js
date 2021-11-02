import styled from "@emotion/styled";
import React from "react";
import BlockHeading from "./_ui/BlockHeading";
import ContentWrapper from "./ContentWrapper";
import blocksIllustration from "../images/blocks-illustration.png";

const AboutSection = styled("div")`
  z-index: 9999;
  padding-bottom: 6rem;
  background: white;
  color: #220969;
  width: 100%;

  @media (max-width: 768px) {
    padding-bottom: 1rem;
  }
`;

const AboutWrapper = styled.div`
  z-index: 9999;
  display: flex;
  margin-left: 3rem;

  @media (max-width: 768px) {
    margin-left: 0;
  }

  .image-wrapper {
    flex: 1;

    img {
      width: 100%;
    }
  }
`;

const About = (content) => {
  content = content.content;
  // console.log(content.aboutImage.url);
  return (
    <AboutSection>
      <ContentWrapper id="about">
        <BlockHeading title="How it works" />
        <AboutWrapper>
          <div className="about-text">
            <p>{content.firstParagraph}</p>
            <div className="image-wrapper">
              <img
                src={content.aboutImage ? content.aboutImage.url : ""}
                alt="people sitting on blocks"
              />
            </div>
            <p>{content.secondParagraph}</p>
          </div>
        </AboutWrapper>
      </ContentWrapper>
    </AboutSection>
  );
};

export default About;
