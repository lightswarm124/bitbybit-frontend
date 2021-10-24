import styled from "@emotion/styled";
import React from "react";
import Block from "../images/bbbLogo.png";

const HeadingWrapper = styled.div`
  width: 100%;
`;

const BlockHeading = (props) => {
  return (
    <HeadingWrapper>
      <img src={Block} alt="" />
      <h3>{props.title}</h3>
    </HeadingWrapper>
  );
};

export default BlockHeading;
