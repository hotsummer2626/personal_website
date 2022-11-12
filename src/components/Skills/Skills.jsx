import React from "react";
import styles from "./Skills.module.scss";
import { skillList } from "../../static";

const Skills = () => {
  return (
    <div className={styles.container}>
      <h2>Skills</h2>
      {skillList.map((skill) => (
        <div className={styles.skill} key={skill.id}>
          <h3 className={styles.title}>{skill.title}</h3>
          <p>{skill.details}</p>
        </div>
      ))}
    </div>
  );
};

export default Skills;
