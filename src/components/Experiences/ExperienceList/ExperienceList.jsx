import React from "react";
import styles from "./ExperienceList.module.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useSelector } from "react-redux";

const contentStyle = {
  background: "rgb(33, 150, 243)",
  color: "#fff",
  boxShadow: "none",
  borderRadius: "20px",
};
const contentArrowStyle = { borderRight: "7px solid  rgb(33, 150, 243)" };

const iconStyle = {
  background: "#fff",
  boxShadow: "none",
};

const ExperienceList = ({ experiences }) => {
  const {
    theme: { isLight },
  } = useSelector((state) => state);
  return (
    <VerticalTimeline>
      {experiences.map((experience) => (
        <VerticalTimelineElement
          key={experience.id}
          contentStyle={contentStyle}
          contentArrowStyle={contentArrowStyle}
          date={experience.date}
          dateClassName={`${styles.date} ${isLight ? "" : styles.dark}`}
          iconStyle={iconStyle}
          icon={
            <div className={styles.imgWrapper}>
              <img src={experience.icon} alt="tech stack" />
            </div>
          }
        >
          <h3 className="vertical-timeline-element-title">
            {experience.title}
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            {experience.subtitle}
          </h4>
          <p>{experience.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default ExperienceList;
