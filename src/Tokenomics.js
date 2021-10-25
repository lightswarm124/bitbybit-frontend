import React from "react";
import BlockHeading from "./components/BlockHeading";
import ContentWrapper from "./components/ContentWrapper";
import styled from "@emotion/styled";

const TokenomicsWrapper = styled.div``;

const Tokenomics = () => {
  return (
    <ContentWrapper>
      <BlockHeading title="Tokenomics" />
      <TokenomicsWrapper></TokenomicsWrapper>
    </ContentWrapper>
  );
};

export default Tokenomics;
