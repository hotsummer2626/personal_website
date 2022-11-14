import React from "react";
import styles from "./Experiences.module.scss";
import ExperienceList from "./ExperienceList/ExperienceList";
import { experienceList } from "../../static";

const Experiences = () => {
  return (
    <div className={styles.container} id="experiences">
      <h2>Experiences</h2>
      <ExperienceList experiences={experienceList} />
    </div>
  );
};

export default Experiences;
