import React from "react";
import styles from "./Projects.module.scss";
import { projectList } from "../../static";
import ProjectItem from "./ProjectItem/ProjectItem";

const Projects = () => {
  return (
    <div className={styles.container} id="projects">
      <h2>Projects</h2>
      <div className={styles.listWrapper}>
        {projectList.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
