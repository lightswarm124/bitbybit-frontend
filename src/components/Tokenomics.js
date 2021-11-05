import React from "react";
import BlockHeading from "./_ui/BlockHeading";
import ContentWrapper from "./ContentWrapper";
import styled from "@emotion/styled";

const TokenomicsSection = styled.div`
  background: #220969;
  padding-bottom: 6rem;

  @media (max-width: 768px) {
    padding-bottom: 1rem;
  }

  .tokenomics-items {
    max-width: 100%;
    margin-left: 3rem;
    min-height: 10vh;
    display: flex;
    flex-wrap: wrap;

    .item {
      margin-right: 2.5rem;
      margin-bottom: 0.5rem;
      flex: 1 0 calc(25% - 10px);
      h4 {
        font-size: 1rem;
        color: #ff2498;
      }

      p {
        color: white;
      }
    }
  }
`;

const Tokenomics = (content) => {
  content = content.content;
  return (
    <TokenomicsSection>
      <ContentWrapper id="tokenomics">
        <BlockHeading title="Tokenomics" />
        <div className="tokenomics-items">
          {content.map((item) => (
            <div key={item.title} className="item">
              <h4>{item.title}</h4>
              <p>{item.data}</p>
            </div>
          ))}
        </div>
      </ContentWrapper>
    </TokenomicsSection>
  );
};

export default Tokenomics;
