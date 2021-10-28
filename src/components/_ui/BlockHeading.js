import styled from "@emotion/styled";
import React from "react";
import Block from "../../images/bbbBlock.png";

const HeadingWrapper = styled.div`
  width: 100%;
  margin: 0 auto;

  img {
    width: 3.5rem;
  }

  h3 {
    margin-top: -1.2rem;
    margin-left: 2.75rem;
    margin-bottom: 1.5rem;
    font-size: 2.2rem;
  }
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
