import styled from "@emotion/styled";
import React from "react";
import BlockHeading from "./_ui/BlockHeading";
import ContentWrapper from "./ContentWrapper";
import unitedWay from "../images/united-way.png";

const CharitySection = styled("div")`
  background: #220969;
  color: white !important;
  color: black;
  padding-bottom: 6rem;
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
  }

  .charity-image {
    flex: 1;
    max-width: 30%;
    flex: 1;
    margin-left: 2rem;
    margin-top: -2rem;
    z-index: 9999;

    img {
      width: 100%;
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
            <p>We are currently partnered with United Way Worldwide.</p>
            <p>
              United Way advances the common good in communities across the
              world. Their focus is on education, income and health—the building
              blocks for a good quality of life.
            </p>
            <p>
              Staking your BBB tokens will help United Way fight for the health,
              education, and financial stability of every person in every
              community.
            </p>
          </div>
          <div className="charity-image">
            <img src={unitedWay} alt="teacher helping student" />
          </div>
        </CharityWrapper>
      </ContentWrapper>
    </CharitySection>
  );
};

export default Charity;
