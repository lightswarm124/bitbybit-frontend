import React from "react";
import ContentWrapper from "./ContentWrapper";
import BlockHeading from "./_ui/BlockHeading";
import CharityIcon from "../images/icons/charity-icon.png";
import GlobeIcon from "../images/icons/globe-icon.png";
import PhoneIcon from "../images/icons/phone-icon.png";
import styled from "@emotion/styled";

const FeatureWrapper = styled.div`
  background-color: #220969;
  position: relative;
  z-index: 99999;
  padding-bottom: 2rem;

  .feature {
    display: flex;
    flex-direction: row;
    margin-left: 3rem;
    margin-bottom: 1rem;

    .icon-wrapper {
      background-color: #ff2498;
      border-radius: 50%;
      width: 4rem;
      height: 4rem;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 2rem;
        height: 2rem;
      }
    }

    .text-wrapper {
      margin-left: 2rem;

      h3 {
        font-size: 1.2rem;
        margin-bottom: 1rem;
      }
      p {
        font-size: 1rem;
      }
    }
  }
`;

const Features = () => {
  return (
    <FeatureWrapper>
      <ContentWrapper>
        <BlockHeading title="Features" />
        <div className="feature">
          <div className="icon-wrapper">
            <img src={CharityIcon} alt="" />
          </div>
          <div className="text-wrapper">
            <h3>Passive Income and Donations</h3>
            <p>75% of liquidation goes to charity</p>
          </div>
        </div>
        <div className="feature">
          <div className="icon-wrapper">
            <img src={GlobeIcon} alt="" />
          </div>
          <div className="text-wrapper">
            <h3>Affect Global Change</h3>
            <p>
              The charity changes throughout the year in an effort to benefit
              all
            </p>
          </div>
        </div>
        <div className="feature">
          <div className="icon-wrapper">
            <img src={PhoneIcon} alt="" />
          </div>
          <div className="text-wrapper">
            <h3>Stay Updated</h3>
            <p>Stay updated with regular social media updates</p>
          </div>
        </div>
      </ContentWrapper>
    </FeatureWrapper>
  );
};

export default Features;
