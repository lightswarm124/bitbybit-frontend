import React from "react";
import BlockHeading from "./components/BlockHeading";
import ContentWrapper from "./components/ContentWrapper";
import styled from "@emotion/styled";

const TokenomicsSection = styled.div`
  background: #220969;

  .tokenomics-items {
    width: 100%;
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

const tokenomicsData = [
  {
    title: "Token Name",
    data: "BitByBit",
  },
  {
    title: "Network",
    data: "Binance Smart Chain",
  },
  {
    title: "Token Symbol",
    data: "BBB",
  },
  {
    title: "ICO Price",
    data: "0.000021 BNB",
  },
  {
    title: "Hard Cap",
    data: "BitByBit",
  },
  {
    title: "Soft Cap",
    data: "BitByBit",
  },
  {
    title: "Crowd Sale Refundable",
    data: "Yes",
  },
];

const Tokenomics = () => {
  return (
    <TokenomicsSection>
      <ContentWrapper>
        <BlockHeading title="Tokenomics" />
        <div className="tokenomics-items">
          {tokenomicsData.map((item) => (
            <div className="item">
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
