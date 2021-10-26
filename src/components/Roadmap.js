import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import BlockHeading from "./BlockHeading";
import ContentWrapper from "./ContentWrapper";
import "../styles/roadmap.css";
import { withTheme } from "@emotion/react";
import Checkmark from "../images/checkmark.png";

const Roadmap = () => {
  const roadmapProgress = 1;
  return (
    <ContentWrapper>
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
          iconStyle={{ background: "black" }}
          contentStyle={{ color: "black" }}
        >
          <h3 className="vertical-timeline-element-title">Phase 2</h3>
          <ul>
            <li>ICO Launch</li>
            <li>Marketing Push</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "black" }}
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
          iconStyle={{ background: "black" }}
          contentStyle={{ color: "black" }}
        >
          <h3 className="vertical-timeline-element-title">Phase 4</h3>
          <ul>
            <li>Smart Contract Audit</li>
            <li>Team Expansion</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "black" }}
          contentStyle={{ color: "black" }}
        >
          <h3 className="vertical-timeline-element-title">Phase 5</h3>
          <ul>
            <li>App Development</li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </ContentWrapper>
  );
};

export default Roadmap;
