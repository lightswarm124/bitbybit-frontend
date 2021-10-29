import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import BlockHeading from "./_ui/BlockHeading";
import ContentWrapper from "./ContentWrapper";
import "../styles/roadmap.css";
import Checkmark from "../images/checkmark.png";
import styled from "@emotion/styled";

const RoadmapWrapper = styled.div`
  background-color: white;
  color: #220969;
  padding-bottom: 6rem;

  @media (max-width: 768px) {
    padding-bottom: 1rem;
  }
`;

const Roadmap = () => {
  return (
    <RoadmapWrapper>
      <ContentWrapper id="roadmap">
        <BlockHeading title="Roadmap" />
        <VerticalTimeline lineColor="#FF2498">
          <VerticalTimelineElement
            contentStyle={{ color: "black" }}
            iconStyle={{ background: "#FF2498", color: "#fff" }}
            icon={<img src={Checkmark} alt="" />}
          >
            <h3 className="vertical-timeline-element-title">Phase 1</h3>
            <ul>
              <li>Website Creation</li>
              <li>Charity Partnership</li>
              <li>Smart Contract Creation</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "white" }}
            contentStyle={{ color: "black" }}
          >
            <h3 className="vertical-timeline-element-title">Phase 2</h3>
            <ul>
              <li>ICO Launch</li>
              <li>Marketing Push</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "white" }}
            contentStyle={{ color: "black" }}
          >
            <h3 className="vertical-timeline-element-title">Phase 3</h3>
            <ul>
              <li>Liquidity Pool Implementation</li>
              <li>CoinGecko Listing</li>
              <li>CoinMarketCap Listing</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "white" }}
            contentStyle={{ color: "black" }}
          >
            <h3 className="vertical-timeline-element-title">Phase 4</h3>
            <ul>
              <li>Smart Contract Audit</li>
              <li>Team Expansion</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "white" }}
            contentStyle={{ color: "black" }}
          >
            <h3 className="vertical-timeline-element-title">Phase 5</h3>
            <ul>
              <li>App Development</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </ContentWrapper>
    </RoadmapWrapper>
  );
};

export default Roadmap;
