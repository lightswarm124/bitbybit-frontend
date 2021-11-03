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

const Roadmap = (content) => {
  content = content.content;

  // Check roadmap progress against each phase
  const completed = function (phaseNumber) {
    return phaseNumber <= content.lastPhaseCompleted;
  };

  return (
    <RoadmapWrapper>
      <ContentWrapper id="roadmap">
        <BlockHeading title="Roadmap" />
        <VerticalTimeline lineColor="#FF2498">
          <VerticalTimelineElement
            contentStyle={{ color: "black" }}
            iconStyle={{ background: completed(1) ? "#FF2498" : "white" }}
            icon={<img src={Checkmark} alt="" />}
          >
            <h3 className="vertical-timeline-element-title">Phase 1</h3>
            <ul>
              {content.phase1 && content.phase1.map((item) => <li>{item}</li>)}
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: completed(2) ? "#FF2498" : "white" }}
            contentStyle={{ color: "black" }}
            icon={<img src={Checkmark} alt="" />}
          >
            <h3 className="vertical-timeline-element-title">Phase 2</h3>
            <ul>
              {content.phase2 && content.phase2.map((item) => <li>{item}</li>)}
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: completed(3) ? "#FF2498" : "white" }}
            contentStyle={{ color: "black" }}
            icon={<img src={Checkmark} alt="" />}
          >
            <h3 className="vertical-timeline-element-title">Phase 3</h3>
            <ul>
              {content.phase3 && content.phase3.map((item) => <li>{item}</li>)}
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: completed(4) ? "#FF2498" : "white" }}
            contentStyle={{ color: "black" }}
            icon={<img src={Checkmark} alt="" />}
          >
            <h3 className="vertical-timeline-element-title">Phase 4</h3>
            <ul>
              {content.phase4 && content.phase4.map((item) => <li>{item}</li>)}
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: completed(5) ? "#FF2498" : "white" }}
            contentStyle={{ color: "black" }}
            icon={<img src={Checkmark} alt="" />}
          >
            <h3 className="vertical-timeline-element-title">Phase 5</h3>
            <ul>
              {content.phase5 && content.phase5.map((item) => <li>{item}</li>)}
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </ContentWrapper>
    </RoadmapWrapper>
  );
};

export default Roadmap;
