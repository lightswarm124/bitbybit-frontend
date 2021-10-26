import React from "react";
import BlockHeading from "./components/BlockHeading";
import ContentWrapper from "./components/ContentWrapper";
import styled from "@emotion/styled";

const TokenomicsWrapper = styled.div`
  background: #0f220969;
  width: 100%;
  height: 10vh;
`;

const TokenomicsSection = styled.div`
  background: white;
`;

const Tokenomics = () => {
  return (
    <TokenomicsSection>
      <ContentWrapper>
        <BlockHeading title="Tokenomics" />
        <TokenomicsWrapper></TokenomicsWrapper>
      </ContentWrapper>
    </TokenomicsSection>
  );
};

export default Tokenomics;
