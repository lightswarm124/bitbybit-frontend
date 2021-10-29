import styled from "@emotion/styled";
import React from "react";
import LogoImage from "../../images/bbbLogo@2x.png";

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;

  img {
    width: 2rem;
  }

  p {
    margin: 0;
    margin-left: 0.5rem;
  }

  span {
    font-weight: 300;
  }
`;

const Logo = () => {
  return (
    <LogoWrapper>
      <img src={LogoImage} alt="" />
      <p>
        Bit<span>by</span>bit
      </p>
    </LogoWrapper>
  );
};

export default Logo;
