import styled from "@emotion/styled";
import React from "react";
import BlockHeading from "./_ui/BlockHeading";
import ContentWrapper from "./ContentWrapper";

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

    a {
      color: #bddcfe;
    }

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

const Charity = (content) => {
  content = content.content;

  return (
    <CharitySection>
      <ContentWrapper id="charity">
        <BlockHeading title="Charity" />
        <CharityWrapper>
          <div className="charity-text">
            {content.charityText ? (
              <div
                dangerouslySetInnerHTML={{ __html: content.charityText.html }}
              />
            ) : (
              ""
            )}
          </div>
          <div className="charity-image">
            <img
              src={content.charityImage ? content.charityImage.url : ""}
              alt="Hands holding each other"
            />
          </div>
        </CharityWrapper>
      </ContentWrapper>
    </CharitySection>
  );
};

export default Charity;
