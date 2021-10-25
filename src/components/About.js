import styled from "@emotion/styled";
import React from "react";
import BlockHeading from "./BlockHeading";
import ContentWrapper from "./ContentWrapper";
import blocksIllustration from "../images/blocks-illustration.png";

const AboutSection = styled("div")`
  background: white;
  padding: 2rem 0;
  color: black;
`;

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  img {
    flex: 1;
    width: 50%;
    margin-left: 2rem;
    margin-top: -2rem;
  }
`;

const AboutText = styled.div`
  flex-basis: 1;
`;

const About = () => {
  return (
    <AboutSection>
      <ContentWrapper>
        <BlockHeading title="How it works" />
        <AboutWrapper>
          <AboutText>
            <p>
              Bitbybit is a proof-of-stake cryptocurrency that donates 85% of
              its liquidation to charity. It is one of the first non-profit
              organizations that accepts donations through blockchain
              technology; allowing individuals to invest and donate
              simultaneously. Donations are held within the donor’s crypto
              wallet until they decide to sell their tokens. Once sold, the
              tokens are sent to the charity’s crypto wallet. Charitable
              organizations are contracted quarterly for use of this technology.
            </p>

            <p>
              With a strong team of developers, Bitbybit is dedicated to
              providing awareness and funding for charitable organizations. This
              will be achieved by utilizing enhanced public interest and
              innovative financing mechanisms. Our goal is to provide charitable
              organizations across the world access to blockchain technology.
            </p>
          </AboutText>
          <img src={blocksIllustration} alt="people sitting on blocks" />
        </AboutWrapper>
      </ContentWrapper>
    </AboutSection>
  );
};

export default About;
