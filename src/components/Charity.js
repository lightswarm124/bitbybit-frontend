import styled from "@emotion/styled";
import React from "react";
import BlockHeading from "./_ui/BlockHeading";
import ContentWrapper from "./ContentWrapper";
import charityImg from "../images/charity.jpg";

const CharitySection = styled("div")`
  background: #220969;
  color: white !important;
  color: black;
  padding-bottom: 6rem;
  z-index: 9999;
  position: relative;

  @media (max-width: 768px) {
    padding-bottom: 2rem;
  }
`;

const CharityWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 800px) {
    flex-direction: column;
  }

  .charity-text {
    flex: 1;
    margin-left: 3rem;
    padding-right: 3rem;

    @media (max-width: 768px) {
      margin-left: 0;
      padding-right: 0;
    }
  }

  .charity-image {
    flex: 1;
    max-width: 30%;
    flex: 1;
    margin-left: 2rem;
    margin-top: -2rem;
    z-index: 9999;

    @media (max-width: 800px) {
      margin-top: 1rem;
      max-width: 90%;
      margin: 0;
    }

    img {
      width: 100%;
      border-radius: 10px;
    }
  }
`;

const Charity = () => {
  return (
    <CharitySection>
      <ContentWrapper id="charity">
        <BlockHeading title="Charity" />
        <CharityWrapper>
          <div className="charity-text">
            <p>Currently accepting charity partnership applications.</p>
            <p>
              To apply for a partnership fill out our contact form or email
              <a href="mailto:support@bitbybit.org"> support@bitbybit.org.</a>
            </p>
          </div>
          <div className="charity-image">
            <img src={charityImg} alt="Hands holding each other" />
          </div>
        </CharityWrapper>
      </ContentWrapper>
    </CharitySection>
  );
};

export default Charity;
