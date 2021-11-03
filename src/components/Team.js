import styled from "@emotion/styled";
import React from "react";
import ContentWrapper from "./ContentWrapper";
import BlockHeading from "./_ui/BlockHeading";

const TeamSection = styled.div`
  background: white;
  color: #220969;
  width: 100%;
  padding-bottom: 6rem;

  @media (max-width: 768px) {
    padding-bottom: 1rem;
  }

  .people {
    display: flex;
    flex-direction: row;

    @media (max-width: 768px) {
      flex-direction: column;
    }
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
      max-width: 80%;
      z-index: 9999;
      border: 3px solid #220969;
      border-radius: 10px;
      margin-bottom: 1rem;

      img {
        border-radius: 10px;
        width: 100%;
      }
    }
  }
`;

const Team = (content) => {
  content = content.content;
  return (
    <TeamSection>
      <ContentWrapper id="team">
        <BlockHeading title="Meet Our Team" />
        <div className="people">
          {content.map((person) => (
            <div className="person">
              <div className="headshot">
                <img
                  src={person.teamImage ? person.teamImage.url : ""}
                  alt={person.teamMemberName + " headshot"}
                />
              </div>
              <h4>{person.teamMemberName}</h4>
              <p>{person.teamMemberTitle}</p>
            </div>
          ))}
        </div>
      </ContentWrapper>
    </TeamSection>
  );
};

export default Team;
