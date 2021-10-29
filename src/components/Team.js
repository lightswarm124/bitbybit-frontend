import styled from "@emotion/styled";
import React from "react";
import ContentWrapper from "./ContentWrapper";
import BlockHeading from "./_ui/BlockHeading";
import Tony from "../images/anthony-ippolito.png";
import Jonas from "../images/matthew-jonas.png";

const TeamSection = styled.div`
  background: white;
  color: #220969;
  width: 100%;
  padding-bottom: 6rem;

  .people {
    display: flex;
    flex-direction: row;
  }

  .person {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h4 {
      color: #c61ab6;
      font-size: 1.2rem;
    }

    .headshot {
      max-width: 60%;
      z-index: 9999;
      border: 4px solid #220969;
      border-radius: 10px;
      margin-bottom: 1rem;

      img {
        border-radius: 10px;
        width: 100%;
      }
    }
  }
`;

const Team = () => {
  return (
    <TeamSection>
      <ContentWrapper id="team">
        <BlockHeading title="Meet Our Team" />
        <div className="people">
          <div className="person">
            <div className="headshot">
              <img src={Tony} alt="Headshot of Anthony Ippolito" />
            </div>
            <h4>Anthony Ippolito</h4>
            <p>Chief Executive Officer</p>
          </div>
          <div className="person">
            <div className="headshot">
              <img src={Jonas} alt="Headshot of Matthew Jonas" />
            </div>
            <h4>Matthew Jonas</h4>
            <p>Project Manager</p>
          </div>
        </div>
      </ContentWrapper>
    </TeamSection>
  );
};

export default Team;
