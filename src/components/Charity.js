import styled from "@emotion/styled";
import React from "react";
import BlockHeading from "./BlockHeading";
import ContentWrapper from "./ContentWrapper";
import unitedWay from "../images/united-way.png";

const CharitySection = styled("div")`
  background: #220969;
  color: white !important;
  padding: 2rem 0;
  color: black;
`;

const CharityWrapper = styled.div`
  display: flex;
  flex-direction: row;
  img {
    flex: 1;
    width: 50%;
    height: 25vh;
    margin-left: 2rem;
    margin-top: -2rem;
  }
`;

const CharityText = styled.div`
  flex-basis: 1;
`;

const Charity = () => {
  return (
    <CharitySection>
      <ContentWrapper>
        <BlockHeading title="Charity" />
        <CharityWrapper>
          <CharityText>
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
          </CharityText>
          <img src={unitedWay} alt="teacher helping student" />
        </CharityWrapper>
      </ContentWrapper>
    </CharitySection>
  );
};

export default Charity;
