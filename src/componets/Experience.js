import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faSchool } from "@fortawesome/free-solid-svg-icons";
import "../styles/css/experience.min.css";
import { ExperienceData } from "../data/ExperienceData";

const Experience = () => {
  const WorkIcon = () => <FontAwesomeIcon icon={faBriefcase} />;
  // const StarIcon = () => <FontAwesomeIcon icon={faStar} />;
  const SchoolIcon = () => <FontAwesomeIcon icon={faSchool} />;

  const work = ExperienceData[0]?.work;
  const education = ExperienceData[0]?.education;

  return (
    <section className="experience">
      <VerticalTimeline lineColor={"white"}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          // contentStyle={{ background: "white", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  green" }}
          contentStyle={{ borderTop: "7px solid  green" }}
          date={work.work1.date}
          iconStyle={{ background: "darkgreen", color: "white" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            {work.work1.title}
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            {work.work1.subtitle}
          </h4>
          <p>{work.work1.description}</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={work.work2.date}
          contentArrowStyle={{
            borderRight: "7px solid  green",
          }}
          iconStyle={{ background: "green", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            {work.work2.title}
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            {work.work2.subtitle}
          </h4>
          <p>{work.work2.description}</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date={education.education1.date}
          contentArrowStyle={{
            borderRight: "7px solid  rgb(31, 31, 80)",
          }}
          contentStyle={{ borderTop: "7px solid  rgb(31, 31, 80)" }}
          iconStyle={{ background: "rgb(31, 31, 80)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            {education.education1.title}
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            {education.education1.subtitle}
          </h4>
          <p>{education.education1.description}</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date={education.education2.date}
          contentArrowStyle={{
            borderRight: "7px solid  rgb(31, 31, 80)",
          }}
          iconStyle={{ background: "rgb(31, 31, 80)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            {education.education2.title}
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            {education.education2.subtitle}
          </h4>
          <p>{education.education2.description}</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date={education.education3.date}
          contentArrowStyle={{
            borderRight: "7px solid  rgb(31, 31, 80)",
          }}
          iconStyle={{ background: "rgb(31, 31, 80)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            {education.education3.title}
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            {education.education3.subtitle}
          </h4>
          <p>{education.education3.description}</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date={education.education4.date}
          contentArrowStyle={{
            borderRight: "7px solid  rgb(31, 31, 80)",
          }}
          iconStyle={{ background: "rgb(31, 31, 80)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            {education.education4.title}
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            {education.education4.subtitle}
          </h4>
          <p>{education.education4.description}</p>
        </VerticalTimelineElement>
      </VerticalTimeline>

      {/* {
      console.log(ExperienceData["work1"])
     } */}
    </section>
  );
};

export default Experience;
